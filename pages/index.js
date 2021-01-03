import React, { useState } from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import cookie from 'js-cookie';
import {
  EyeFill,
  EyeSlashFill
} from 'react-bootstrap-icons';
import {
  Button,
  Container,
  Card,
  InputGroup,
  Modal,
  FormControl,
  Spinner
} from 'react-bootstrap';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(true);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const handleClose = () => setShow(false);
  
  const togglePass = () => {
    if (showPass) {
      setShowPass(false);
    } else {
      setShowPass(true);
    }
  };
 
  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    //call api
    fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'email': email,
        'password': password,
      }),
    })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        if (data && data.error) {
          setMessage(data.error);
          setShow(true);
          setLoading(false);
        }
        if (data && data.token) {
          //set cookie
          cookie.set('token', data.token, {expires: 2});
          setMessage('Success');
          setShow(true);
          setLoading(false);
        }
      });
  }

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name='application-name' content='Login and Register' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Login and Register' />
        <meta name='description' content='Login and Register' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-TileColor' content='#2B5797' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#000000' />
                  
        <link rel='apple-touch-icon' sizes='180x180' href='/static/icons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/static/icons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/static/icons/favicon-16x16.png' />
        <link rel='manifest' href='/static/manifest.json' />
        <link rel='mask-icon' href='/static/icons/safari-pinned-tab.svg' color='#5bbad5' />
        <link rel='shortcut icon' href='/static/icons/favicon.ico' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
            
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:url' content='http://localhost:3000' />
        <meta name='twitter:title' content='Login and Register' />
        <meta name='twitter:description' content='Login and Register' />
        <meta name='twitter:image' content='http://localhost:3000/static/icons/android-chrome-192x192.png' />
        <meta name='twitter:creator' content='@DavidWShadow' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Login and Register' />
        <meta property='og:description' content='Login and Register' />
        <meta property='og:site_name' content='Login and Register' />
        <meta property='og:url' content='http://localhost:3000' />
        <meta property='og:image' content='http://localhost:3000/static/icons/apple-touch-icon.png' />
      </Head>
      <Container>
        <Card>
          <Card.Body>
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <FormControl 
                id="emailLogin"
                aria-describedby="basic-addon1"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                id="passwordLogin"
                placeholder="Password"
                aria-describedby="basic-addon2"
                type={showPass ? 'password' : 'text'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" onClick={() => togglePass()}>
                  {showPass ? <EyeFill /> : <EyeSlashFill />}
                </Button>
              </InputGroup.Append>
            </InputGroup>
            <Button id="buttonLogin" variant="primary" type="submit" block disabled={loading}>
              {loading ? (<Spinner animation="border" size="sm" />) : 'submit'}
            </Button>
            </form>
          </Card.Body>
        </Card>
        <Link href="/register">Register</Link>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hello !</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Home;
