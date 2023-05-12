import React from 'react'
import { BrandLogo } from '../../components/brandLogo'
import { Navbar } from '../../components/navbar'
import Form from './Form'
export default function dashboard() {
    return (
        <>
            <Navbar mode='beta' />
            <div style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                flexWrap: 'wrap',
                // backgroundColor: 'pink'
            }}>
                <Form />
                <Form />
            </div>
        </>

    )
}
