import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import { Container} from '@material-ui/core';

import {MobileInputForm} from "./components/mobile-input-form/mobile-input-form";
import {Header} from "./components/header/header";
import {OrderInfo} from './components/order-info/order-info';

class  App extends Component {
  render(){
  return (
    <React.Fragment>
      <Container>
        <Router>
          <Header />
          <Switch>
            <Route exact path = '/'  component={MobileInputForm} />
            <Route path='/order-info' component = {OrderInfo} />
          </Switch>
        </Router>
      </Container>
    </React.Fragment>
  );
  }
}

export default App;
