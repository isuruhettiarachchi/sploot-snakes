import React, { useState, useEffect } from 'react';
import { Layout, Button,Row, Drawer, Col, } from 'antd';
import { DownCircleOutlined, RightCircleOutlined } from '@ant-design/icons';

export default function Header({menu}){
    const [visible, setVisible] = useState(true);
    const [mobile,setMobile] = useState(true)
    const [subMenu,setSubMenu] = useState(false)

    const setDimensions = () => {
            if(window.innerWidth>768){
                setMobile(false)
            }else{
                setMobile(true)
            }
    }

    useEffect(()=>{
        setDimensions()
    },[])

    
    window.addEventListener("resize",setDimensions)




    return<Row justify="end" className="navigation">
        <Layout.Header  
            style={{
                background:"none",
                position:"absolute"
            }} 
            >
                <Button className="emphasis-on-btn" type="primary">I Handle Snakes!</Button>
            <Button
                onClick= {()=>setVisible(true)}
                type="link"
                className="navigation-logo-button"
                > <h2>Snakes</h2> <DownCircleOutlined className="caret" /> </Button>
                
        

        {/* For window.innerWidth less than 600px */}
        <Drawer
        visible={visible&&mobile}
        onClose= {()=>setVisible(false)}
        placement="top"
        className="navigation-drawer-mobile"
        drawerStyle = {{
            backgroundColor:"#1E3033",
        }}
        height={150}
        >
            <h1>Snakes</h1><small>  by Sploot</small>
            <Row justify="center">
                <Button type="link">About</Button>
                <Button type="link">Sploot Project</Button>
                <Button type="link">Login</Button>
                <Button type="link"
                onClick = {() => setSubMenu(true)}
                >More <RightCircleOutlined/></Button>
            </Row>
           
  
        
   
        </Drawer>
        
        {/* For window.innerWidth greater than or equal to 600px */}
        <Drawer
        visible={visible&&!mobile}
        onClose= {()=>setVisible(false)}
        placement="top"
        closable={false}
        className="navigation-drawer"
        >  
        <Row justify="start" style={{height:"10px"}} gutter={[24,12]}>
            <Col className="navigation-drawer-col"  md={8} sm={8} xs={10} >
            <h1>Snakes</h1> <small> by Sploot</small><br/>
            <Button type="link">About</Button>
            <Button type="link">Sploot Project</Button>
            <Button type="link">Login</Button>
            </Col>
            <Col className="navigation-drawer-col" md={8} sm={8} xs={4}>
        
            </Col>
            <Col className="navigation-drawer-col"  md={8} sm={8} xs={10}>

            
             <Button type="link">Almanac </Button>
             <Button type="link">Snake Removal</Button>
             <Button type="link">First Aid</Button>
            </Col>
   
        </Row>

        </Drawer>

        <Drawer
            visible={subMenu}
            height={200}
            onClose={() => setSubMenu(false)}
            placement="right"
            >

                <Row justify="center">
                    <Button type="link">Almanac of Snakes</Button>
                    <Button type="link">Snake Removal</Button>
                    <Button type="link">First Aid</Button>
                </Row>
            </Drawer>
        </Layout.Header>
    </Row>

}