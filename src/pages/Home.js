import React from 'react'
import { Layout, Menu } from 'antd';
import Drag from '../components/drag';
import Image from '../components/Image';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components/macro';
const HomeContainer =styled.div`
  padding-top: 50px;
  margin:auto;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  
`;

function Home() {
  return (
    <Layout>
      <Sidebar/>
      <HomeContainer >
        <Image />
        <Drag />
      </HomeContainer>
    </Layout>
  )
}

export default Home;
