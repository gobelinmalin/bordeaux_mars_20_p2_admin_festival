import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import ButtonAction from './Buttons/ButtonAction';
import axios from 'axios';

class ArtistItem extends React.Component {
    constructor(props) {
        super(props);
    }

    deleteArtist = (idartist) => {
        axios.delete(`https://api-festival.herokuapp.com/api/artists/${this.props.idartist}`)
        .then(response => {
            alert(`L'artiste a bien été supprimé`);
          })
          .catch(err => {
            alert(`Erreur lors de la suppression de l'artiste : ${err.message}`);
          });
    }

    render() {
        return (
            <div className="container">
                <div className="Card">
                    <div className="InfoUp">
                        <div className="col-md-1">
                            <img src={this.props.image_url} className="img-round" alt={this.props.name}/>
                        </div>
                        <div className="col-md-7">
                            <div>
                                <h3>{this.props.name} <span className="IdItem">{`(id : ${this.props.idartist})`}</span></h3>
                            </div>
                            <div>
                                <p>Genre, {this.props.country}</p>
                            </div>
                        </div>
                        <div className="buttons col-md-4">
                            <ButtonAction name="Modifier" class="Update" /*onClick={this.updateArtist()}*//>
                            <ButtonAction name="Supprimer" class="Delete" onClick={() => this.deleteArtist(this.props.idartist)}/>
                        </div>
                    </div>
                    <div className="Description col-md-12">
                        <p>
                            {this.props.music_url}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArtistItem;