import React from 'react';
import Header from './components/Header';
import Listing from './screens/Listing';
import styled from 'styled-components';


function App() {
  return (
    <div className="App">
      <Header/>
      <Listing></Listing>
      <Footer>
        <span>NTTN</span>
      </Footer>
    </div>
  );
}


const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #203040;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default App;
