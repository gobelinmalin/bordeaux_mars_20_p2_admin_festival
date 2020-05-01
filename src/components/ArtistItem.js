import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import ButtonAction from './Buttons/ButtonAction';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

class ArtistItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    deleteArtist = (idartist) => {
        axios.delete(`https://api-festival.herokuapp.com/api/artists/${this.props.idartist}`)
        .then(response => {
            //alert(`L'artiste ${this.props.name} a bien été supprimé`);
            this.refreshPage();
          })
          .catch(err => {
            alert(`Erreur lors de la suppression de l'artiste : ${err.message}`);
          });
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow = () => {
        this.setState({ show: true });
    }

    refreshPage = () => {
        window.location.reload(false);
    }

    render() {
        return (
            <>
            <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Supprimer l'artiste {this.props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Êtes-vous sûr de vouloir supprimer cet artiste ?</Modal.Body>
                <Modal.Footer>
                <button className="ButtonAction Cancel" onClick={this.handleClose}>
                    Annuler
                </button>
                <button className="Delete ButtonAction" onClick={() => {
                    this.deleteArtist();
                    this.handleClose();
                    }}>
                    Supprimer
                </button>
                </Modal.Footer>
            </Modal>
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
                            <Link to={`/update-artist/${this.props.idartist}`}><ButtonAction name="Modifier" class="Update"/></Link>
                            <button onClick={this.handleShow} className="Delete ButtonAction"> 
                                Supprimer
                            </button>
                        </div>
                    </div>
                    <div className="Description col-md-12">
                        <p>
                            {this.props.music_url}
                        </p>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default ArtistItem;