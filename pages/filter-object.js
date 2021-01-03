import React from 'react';
import Head from 'next/head';
import Data from '../src/Data.json';
import {
    Container
} from 'react-bootstrap';

const FilterObject = () => {
    const data = Data.data;
    const billDetails = data && data.response && data.response.billdetails;

    const filtered = billDetails.filter(function (e) {
        const getString = e.body.toString();
        const getNumber = getString.replace(/\D/g, "");
        return getNumber >= 100000;
    });

    return (
        <>
            <Head>
                <title>Filter Object</title>
            </Head>
            <Container>
                {JSON.stringify(filtered)}
            </Container>
        </>
    );
};

export default FilterObject;