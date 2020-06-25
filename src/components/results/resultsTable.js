import React from 'react';
import { useSelector } from 'react-redux';
import { selectResults } from '../../redux/slices/clientSlice';
import { Table } from 'antd';

const {Column} = Table;

export default function ResultsTable(){

    const results = useSelector(selectResults);

   

    return <Table dataSource={results} 
        pagination={false}
        style={{
            backgroundColor:"none"
        }}
    >
        <Column  title="Name" dataIndex="display_name" key="display_name"/>
        <Column width={"10%"} title="Distance" dataIndex="distance" key="distance"/>
        <Column width={"10%"} title="Availability" dataIndex="availability" key="availability"/>
        <Column width={"10%"}title="Rates" dataIndex="rates" key="rates"/>
        <Column width={"10%"} title="Contact" dataIndex="contact" key="key"/>
    </Table>
     
}