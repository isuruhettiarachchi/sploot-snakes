import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Input, Dropdown, Menu,Typography, Space } from 'antd';

import {
    predictionText,
    predictionsFetch,
    selectPredText,
    selectPredList,
    predictionList,
    coordinateUpdate,
    resultUpdate
} from '../../redux/slices/clientSlice';

const  {Text} = Typography

export const Autocomplete = ({title}) => {
    const result = useSelector(selectPredText);
    const list  = useSelector(selectPredList);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        if((result&&result.length%2===0&&result.length<15)||(result&&result.charAt(result.length-1)===""))
        {
            dispatch(predictionsFetch(result))
        }
        else{
            // TODO: Dispatching non serializable objects such as this React Instance is discouraged. Do something you moron!
            dispatch(predictionList([{
                display_place:<div>Powered by <a 
                href="https://locationiq.com/attribution"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <img

                    alt="LocationIQ"
                    src="https://locationiq.com/static/v2/images/logo.png"
                    width={50}
                    />
                </a></div>
            }]))
        }   
    },[result,dispatch])

    const handlePredictionClick = (pre) => {
        if(pre.lat&&pre.lon){
            dispatch(coordinateUpdate([parseFloat(pre.lat),parseFloat(pre.lon)]));
            dispatch(predictionText(pre.display_place))
            dispatch(resultUpdate([{
                display_name:pre.display_name
            }]))
        }
    }

    const menu = (
        <Menu
        className="dropdown"
        >
            {
                list.map((pre,k)=>{
                    return<Menu.Item 
                    onClick = {() => {handlePredictionClick(pre)}}
                    key={k}>
                        <div>
                            <Space>
                            <Text type="primary" strong >{pre.display_place}</Text>
                            <Text type="secondary">{pre.address?.city || pre.address?.state || pre.address?.country }</Text>
                            <Text type="secondary"> {pre.address?.country }</Text>
                            </Space>
                        
                        </div>
                    </Menu.Item>
                })
            }
        </Menu>
    )
    return <Row justify="center" >
    <Dropdown 
  
    placement="bottomCenter"
    overlay={list.length?menu:<p></p>}>
        <Input 
        onKeyUp = {(e)=> dispatch(predictionText(e.target.value))}
        // value = {result}
        placeholder={title}
        type="search"
        className="leaflet-map-search-bar"/>
    </Dropdown>    /
   
    </Row>
}




