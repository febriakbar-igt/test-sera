import React, { useState } from 'react';
import Head from 'next/head';
import {
  Button,
  Container,
  FormControl
} from 'react-bootstrap';
import fire from '../src/Firebase';

const FirebaseCrud = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [notification, setNotification] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fire.firestore()
      .collection('blog')
      .add({
        title: title,
        content: content,
      });
    setTitle('');
    setContent('');
    setNotification('Created');
    setTimeout(() => {
      setNotification('')
    }, 2000)
  };

  return (
    <>
      <Head>
        <title>Firebase CRUD</title>
      </Head>
      <Container>
        <h2>Firebase CRUD</h2>
        {notification}
        <form onSubmit={handleSubmit}>
          <div>
            Title<br />
            <FormControl 
              type="text"
              value={title} 
              onChange={({target}) => setTitle(target.value)} 
            />
          </div>
          <div>
            Content<br />
            <FormControl
              value={content} 
              onChange={({target}) => setContent(target.value)} 
            />
          </div>
          <br />
          <Button type="submit" variant="secondary">Save</Button>
        </form>
      </Container>
    </>
  )
}

export default FirebaseCrud;