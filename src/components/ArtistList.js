import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ArtisItem from './ArtistItem';
import ButtonReturn from './Buttons/ButtonReturn';
import ButtonAction from './Buttons/ButtonAction';


class ArtistList extends React.Component {
    state = {
        artists: []
    }
    componentDidMount() {
        axios.get('https://api-festival.herokuapp.com/api/artists')
        .then(response => response.data)
        .then(data => {
            this.setState({ artists: data })
        });
    }

    deleteArtist = (idartist) => {
        axios.delete(`https://api-festival.herokuapp.com/api/artists/${idartist}`)
        .then(response => {
            alert(`L'artiste a bien été supprimé`)
          })
          .catch(err => {
            alert(`Erreur lors de la suppression de l'artiste : ${err.message}`);
          });
    }
    
    render() {
        return (
            <div>
                <div className="ActionCenter col-12">
                <Link to="/add-artist"><ButtonAction name="Ajouter un artiste" class="Action" /></Link>
                </div>
                <div className="ActionBloc container">
                    <h3>Liste des artistes du festival</h3>
                    <Link to="/add-festival"><ButtonReturn /></Link>
                </div>
                <section id="list" className="container ContainerBody">
                    {this.state.artists.map((item, index) =>
                    <ArtisItem
                        key={index}
                        idartist={item.idartist}
                        name={item.name}
                        image_url={item.image_url}
                        music_url={item.music_url}
                        country={item.country}
                    />
                    )}
                </section>
            </div>
        );
    }
    
}

export default ArtistList;