import React, { useState } from 'react';
import { Layout, Button,Row, Drawer, Col } from 'antd';
import { DownCircleOutlined } from '@ant-design/icons';

export default function Header({menu}){
    const [visible, setVisible] = useState(true);
    

    return<Row justify="end" className="navigation">
        <Layout.Header  
            style={{
                background:"none",
                position:"absolute"
            }} 
            >
            
            <Button
                onClick= {()=>setVisible(true)}
             
                type="link"
                className="navigation-logo-button"
                > <h2>Snakes</h2> <DownCircleOutlined className="caret" /> </Button>
                
        </Layout.Header>
        <Drawer
        visible={visible}
        onClose= {()=>setVisible(false)}
        placement="top"
        closable={false}
        className="navigation-drawer"
        >  
        <Row justify="start" style={{height:"10px"}} gutter={[24,24]}>
            <Col className="navigation-drawer-col"  md={8} sm={8} xs={10} >
            <h1>Snakes</h1> <small> by Sploot</small>
            <br/>
            <Button type="link">About</Button>
            <Button type="link">Sploot Project</Button>
    
            </Col>
            <Col className="navigation-drawer-col" md={8} sm={8} xs={4}>
        
            </Col>
            <Col className="navigation-drawer-col" md={8} sm={8} xs={10}>
<br/>
             <Button type="link">Almanac of Snakes</Button>
             <Button type="link">Snake Wrangling</Button>
             <Button type="link">First Aid</Button>
            </Col>
   
        </Row>

        </Drawer>
    </Row>

}