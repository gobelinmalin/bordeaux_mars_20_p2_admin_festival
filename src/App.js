import React from 'react';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Route, Switch } from 'react-router-dom';
import FestivalList from './components/FestivalList';
import AddFestival from './components/AddFestival';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={FestivalList} />
      </Switch>
      <Switch>
        <Route exact path="/add-event" component={AddFestival} />
      </Switch>
    </div>
    
  );
}

export default App;
