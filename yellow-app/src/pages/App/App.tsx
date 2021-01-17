import React from 'react';
import './App.scss';
import Header from '../../components/Header/Header';
import Items from '../Items/Items';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from '../../components/Footer/Footer';

function App() {

  return (
    <Router>
      <div className="App">
        <Header/>
        <main role="main">
            <Switch>
              <Route path={"/items"} children={<Items/>} />
            </Switch>
        </main>
        <Footer/>
      </div>
    </Router>
  );
  
}

export default App;
