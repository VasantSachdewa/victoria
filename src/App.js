import React from 'react';
import Header from './components/Header';
import Listing from './screens/Listing';
import Login from './screens/Login';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/">
              <Listing/>
            </Route>
          </Switch>
          <Footer>
            <span>NTTN</span>
          </Footer>
        </BrowserRouter>
    </div>
  );
}


const Footer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #203040;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default App;
