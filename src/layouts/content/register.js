import React, { Fragment } from 'react';
import { Row, Col, PageHeader, Typography, Button, Input, Avatar } from 'antd';
import { useHistory } from 'react-router-dom';
import MapComponent from '../../components/map/mapComponent';

import ImageUploader  from '../../components/upload/imageUploader';

export default function RegisterContent(){
    const back = useHistory();

    return <div >
        <div className="layout-content-banner">
            <h1>Snakes by Sploot</h1>
        </div>

        <Row  justify="center" gutter={[12,12]}>
            <Col className="layout-content-container" md={12} sm={24} offset={{md:6,sm:0}}>
                <PageHeader 
                title="Wrangler Registration"
                onBack = {()=>back.go("/")}
                className="page-header"
                />
                <Row gutter={[12,12]}>
                    <Col md={12} sm={24} xs={24}>
                        <Typography.Title level={4}>General Information</Typography.Title>
                        <Input
                            placeholder="Your Full Name"
                        />
                        <Input
                            placeholder="Your NIC Number"
                        />
                    </Col>
                    <Col md={12}>
                        <Typography.Title level={4}>Your Profile Picture</Typography.Title>
                        <ImageUploader/>
                    </Col>
                </Row>
                <Row>
                    <Col md={24}>
                        <Typography.Title level={4}>Your Contact Information</Typography.Title>
                    </Col>
                    <Col md={12} sm={24} xs={24}>
                            <Input 
                                placeholder="Your Primary Contact Number *"
                            />     
                    </Col>
                    <Col md={12} sm={24} xs={24}>
                    <Input 
                            placeholder="Alternative Contact Number"
                            /> 
                    </Col>
                </Row>
                <Row>
                    <Col md={24}>
                        <Typography.Title level={4}>Your Base Location <small>(Eg:Your home location or your home town)</small></Typography.Title>
                    </Col>
                    <Col md={24} sm={24} xs={24} style={{
                        marginBottom:"400px",
                        marginTop:"24px"
                    }}>
                        <MapComponent title="Search Map"/>
                    </Col>
                </Row>
                <Row>
                    <Col md={24}>
                        <Typography.Title level={4}>Your Rates and Charges</Typography.Title>
                    </Col>
                </Row>
                <Row>
                    <Col md={24}>
                        <Typography.Title level={4}>Disclaimer</Typography.Title>
                    </Col>
                </Row>
                <Row justify="center">
                    <Button
                       className="emphasis-on-btn"
                    >Complete Registration</Button>
                </Row>
            </Col>
        </Row>
         
 
    </div>
}