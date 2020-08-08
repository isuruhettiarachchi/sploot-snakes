import React, { useState, useEffect } from 'react';
import { Layout, Button,Row, Drawer, Col, Affix } from 'antd';
import { DownCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function Header({menu}){
    const [visible, setVisible] = useState(true);
    const [mobile,setMobile] = useState(true)
    const [subMenu,setSubMenu] = useState(false)
    var lst = window.pageYOffset || document.documentElement.scrollTop;  //lst is last scroll top

    const setDimensions = () => {
            if(window.innerWidth>768){
                setMobile(false)
                setSubMenu(false)
            }else{
                setMobile(true)
            }
    }

    //Copied from an answer in https://stackoverflow.com/questions/31223341/detecting-scroll-direction
    const checkScrollDirection = () => { 
       const st =  window.pageYOffset || document.documentElement.scrollTop //st is scroll top
       if(st==0){
           setVisible(true);
       } else {
           setVisible(false);
       }

       lst = st <= 0 ? 0 :st;
    }

    useEffect(()=>{
        setDimensions()
    },[])

    
    window.addEventListener("resize",setDimensions)
    window.addEventListener("scroll",checkScrollDirection,false)



    return<Row justify="end" className="navigation" >
        <Layout.Header  
            style={{
                background:"none",
                position:"absolute"
            }} 
            >
     
                <Affix>
                <Link to="register">

                <Button 
                className="emphasis-on-btn navigation-logo-button " type="primary">I Handle Snakes!</Button>
                </Link>
            <Button
                onClick= {()=>setVisible(true)}
                type="link"
                className="navigation-logo-button"
                // className={window.location.pathname==="/"?"navigation-logo-button navigation-logo-button-home":"navigation-logo-button-home"}
                > 
                <h2>Snakes</h2> <DownCircleOutlined  className="caret" /> </Button>
                </Affix>
                

        

        {/* For window.innerWidth less than 600px */}
        <Drawer
        visible={visible&&mobile}
        onClose= {()=>setVisible(false)}
        onBlur={()=>{
            setVisible(false)
        }}
        placement="top"
        mask={false}

        className="navigation-drawer-mobile"
        drawerStyle = {{
            backgroundColor:"#1E3033",
        }}
        height={150}
        >   <Link to="/">
            <h1>Snakes</h1><small>  by Sploot</small>
        </Link>
            <Row justify="center"     onBlur={()=>{
            setVisible(false)
        }}> 
                <Button type="link"><strong>About</strong></Button>
                <Button type="link"><strong>Sploot Project</strong></Button>
                <Button type="link"><strong>Login</strong></Button>
                
                <Button type="link"
                onClick = {() => setSubMenu(true)}
                ><strong>More</strong> <RightCircleOutlined/></Button>
            </Row>
           
  
        
   
        </Drawer>
        
        {/* For window.innerWidth greater than or equal to 600px */}
        <Drawer
        visible={visible&&!mobile}
        onClose= {()=>setVisible(false)}
        onBlur={()=>{
            setVisible(false)
        }}
        placement="top"
        mask={false}
        className="navigation-drawer"
        >  
        <Row justify="start" style={{height:"10px"}} gutter={[24,12]}>
            <Col className="navigation-drawer-col"  md={8} sm={8} xs={10} >
            <Link to="/">
            <h1>Snakes</h1> <small> by Sploot</small><br/>
            </Link>
            <Button type="link"><strong>About</strong></Button>
                <Button type="link"><strong>Sploot Project</strong></Button>
                <Button type="link"><strong>Login</strong></Button>
            </Col>
            <Col className="navigation-drawer-col" md={6} sm={8} xs={4}>
        
            </Col>
            <Col className="navigation-drawer-col navigation-drawer-col-right"  md={10} sm={8} xs={10}>
            <Button type="link"><strong>Blog</strong></Button>
             <Button type="link"><strong>Snake Wiki</strong></Button>
             <Button type="link"><strong>Snake Bites</strong></Button>
             <Button type="link"><strong>Snake Removal</strong></Button>
            </Col>
   
        </Row>

        </Drawer>

        <Drawer
            visible={subMenu}
            height={200}
            onClose={() => setSubMenu(false)}
            
            drawerStyle = {{
                backgroundColor:"#1E3033",
            }}
            className="navigation-drawer-mobile"
            >
                <Row justify="center">
                    <Col className="navigation-drawer-col-center">
                        
                            <li><Button type="link"><strong>Blog</strong></Button></li>
                            <li><Button type="link"><strong>Snake Wiki</strong></Button></li>
                            <li><Button type="link"><strong>Snake Bites</strong></Button></li>
                            <li><Button type="link"><strong>Snake Removal</strong></Button></li>
                        
                    </Col>
                </Row>
            </Drawer>
        </Layout.Header>
    </Row>

}