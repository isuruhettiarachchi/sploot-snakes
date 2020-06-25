import React, { Fragment } from 'react';
import MapComponent from '../../components/map/mapComponent';
import ResultsTable from '../../components/results/resultsTable';
import { Row,Col } from 'antd';

export default function HomeContent(){
    return <Fragment>
        <Row justify="center">
            <MapComponent/>
        </Row>
        <Row justify="center" style={{marginTop:"376px"}}>
            <Col span={24}>
                <ResultsTable/>
            </Col>
        </Row>
    </Fragment>
}