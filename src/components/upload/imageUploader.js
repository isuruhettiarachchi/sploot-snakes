import React from 'react';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

function customUpload(data){
    console.log(data);
    return setTimeout(()=>{
        if(beforeUpload(data.file)){
            data.onSuccess(true,data.file);
        }else{
            data.onError(1,false)
        }
        
    },1000)
    
}

export default class ImageUploader extends React.Component {
  state = {
    loading: false,
  };

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  render() {
    const uploadButton = (

        !this.state.imageUrl&&
      <div>
        {this.state.loading ? <LoadingOutlined /> : <PlusOutlined style={{color:"#FDDA00"}} />}
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={true}
        // action={(v)=>{console.log(v)}}
        customRequest={(v)=>customUpload(v)}
        // beforeUpload={beforeUpload}
        onChange={this.handleChange}
        onRemove={()=>{this.setState({imageUrl:null})}}
        
      >
        {uploadButton}
      </Upload>
    );
  }
}

