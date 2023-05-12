import React, { useState } from 'react';
import { Navbar } from '../../components/navbar'
import Form from './Form'
import Table from './Table'
import { data } from './data'

export default function Dashboard() {

    const [JSONData, setJSONData] = useState(data)

    return (
        <>
            <Navbar mode='beta' />
            <div style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                flexWrap: 'wrap',
                backgroundColor: '#F4EEE0'
            }}>
                <Form dataXS={JSONData} setData={setJSONData} />
                <Table Dataxs={JSONData} />
            </div>
        </>

    )
}
