import React from 'react';
import Head from 'next/head';
import {
    Container,
    Button,
} from 'react-bootstrap';

const loginGoogle = () => {

    return (
        <>
            <Head>
                <title>Login with Google</title>
            </Head>
            <Container>
                <Button> Login with Google </Button>
            </Container>
        </>
    )
};

export default loginGoogle;