import React from 'react';
import { Container, Box, Input, TextareaAutosize } from '@mui/material';

import logo from './logo.svg';
import './App.css';
import { Header } from './components';
import Layout from './components/Layout';
import Block from './components/Block';

export interface Page {
  title: string;
  content: React.ReactNode
}

const pages: Page[] = [
  {
    title: 'About Product',
    content: 'About',
  },
  {
    title: 'About us',
    content: 'About',
  },
  {
    title: 'Buy here',
    content: 'Product + Payment flow',
  },
  {
    title: 'Contact us',
    content: 'contact form',
  },
]

const App: React.FC = () => {
  return (
    <div className="App" >
      <Layout>
        <Container
          sx={{
            width: '100vw',
            height: '100vh',
            background: 'red',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center'
          }}
        >
          <Block />
        </Container>
      </Layout>
    </div>
  );
}

export default App;
