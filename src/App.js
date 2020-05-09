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
import AddArtistForm from './components/AddArtistForm';
import AccomodationList from './components/AccomodationList'
import AddAccomodationForm from './components/AddAccomodationForm';
import UpdateFestivalForm from './components/UpdateFestivalForm';
import UpdateArtistForm from './components/UpdateArtistForm';
import UpdateAccomodationForm from './components/UpdateAccomodationForm';
import JoinArtist from './components/JoinArtist';

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
      <Switch>
          <Route path="/add-artist" component={AddArtistForm} />
      </Switch>
      <Switch>
          <Route path="/accomodations" component={AccomodationList} />
      </Switch>
      <Switch>
          <Route path="/add-accomodation" component={AddAccomodationForm} />
      </Switch>
      <Switch>
          <Route path="/update-festival/:idfestival" component={UpdateFestivalForm} />
      </Switch>
      <Switch>
          <Route path="/update-artist/:idartist" component={UpdateArtistForm} />
      </Switch>
      <Switch>
          <Route path="/update-accomodation/:idaccomodation" component={UpdateAccomodationForm} />
      </Switch>
      <Switch>
          <Route path="/join-artist/:idartist" component={JoinArtist} />
      </Switch>
    </div>
    
  );
}

export default App;
