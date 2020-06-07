import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Input, Dropdown, Menu,Typography, Space } from 'antd';

import {
    predictionText,
    predictionsFetch,
    selectPredText,
    selectPredList,
    predictionList,
    mapBoundingBox
} from '../../redux/slices/clientSlice';

const  {Text} = Typography

export const Autocomplete = () => {
    const result = useSelector(selectPredText);
    const list  = useSelector(selectPredList);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(result&&result.length%1===0&&result.length<15||result&&result.charAt(result.length-1)===" ")
        {
            dispatch(predictionsFetch(result))
        }
        else{
            dispatch(predictionList([{
                display_name:<div>Powered by <a 
                href="https://locationiq.com/attribution">
                    <img
                    src="https://locationiq.com/static/v2/images/logo.png"
                    width={50}
                    />
                </a></div>
            }]))
        }   
    },[result,dispatch])


    const menu = (
        <Menu>
            {
                list.map((pre,k)=>{
                    return<Menu.Item 
                    onClick = {() => {dispatch(mapBoundingBox(pre.address))}}
                    key={k}>
                        <div>
                            <Space>
                            <Text type="primary" strong >{pre.display_name}</Text>
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
    <Dropdown overlay={list.length?menu:<p></p>}>
        <Input 
        onChange = {(e)=> dispatch(predictionText(e.target.value))}
        placeholder={" Where's the Snake?"}
        type="search"
        className="leaflet-map-search-bar"/>
    </Dropdown>    
   
    </Row>
}




