import React from 'react';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Route, Switch } from 'react-router-dom';
import FestivalList from './components/FestivalList';
import AddFestival from './components/AddFestival';
import ArtistList from './components/ArtistList';
import AddEventForm from './components/AddEventForm';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={FestivalList} />
      </Switch>
      <Switch>
        <Route path="/add-festival" component={AddFestival} />
      </Switch>
      <Switch>
          <Route path="/artists" component={ArtistList} />
      </Switch>
      <Switch>
          <Route path="/add-event" component={AddEventForm} />
      </Switch>
    </div>
    
  );
}

export default App;
