import React from 'react';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Route, Switch } from 'react-router-dom';
import FestivalList from './components/FestivalList';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={FestivalList} />
      </Switch>
    </div>
    
  );
}

export default App;
