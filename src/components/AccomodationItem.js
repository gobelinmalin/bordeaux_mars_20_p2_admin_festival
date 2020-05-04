import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import ButtonAction from './Buttons/ButtonAction';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

class AccomodationItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    deleteEvent = () => {
        axios.delete(`https://api-festit.herokuapp.com/api/accomodation/${this.props.idaccomodation}`)
        .then(response => {
            //alert(`L'hébergement ${this.props.nameAccomodation} a bien été supprimé`);
            this.refreshPage();
          })
          .catch(err => {
            alert(`Erreur lors de la suppression de l'hébergement : ${err.message}`);
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
                <Modal.Title>Supprimer le logement {this.props.nameAccomodation}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Êtes-vous sûr de vouloir supprimer cet hébergement ?</Modal.Body>
                <Modal.Footer>
                <button className="ButtonAction Cancel" onClick={this.handleClose}>
                    Annuler
                </button>
                <button className="Delete ButtonAction" onClick={() => {
                    this.deleteEvent();
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
                            <img src={this.props.image1} className="img-round" alt={this.props.nameAccomodation}/>
                        </div>
                        <div className="col-md-7">
                            <div>
                                <h3>{this.props.nameAccomodation} <span className="IdItem">{`(id : ${this.props.idaccomodation})`}</span></h3>
                            </div>
                            <div>
                                <p>{this.props.soldOut ? "Sold Out" : "Disponible"} | Prix avec Pass : {this.props.passPrice}€ | Prix par nuit : {this.props.priceByNight}€</p>
                            </div>
                        </div>
                        <div className="buttons col-md-4">
                            <Link to={`/update-accomodation/${this.props.idaccomodation}`}><ButtonAction name="Modifier" class="Update"/></Link>
                            <button onClick={this.handleShow} className="Delete ButtonAction"> 
                                Supprimer
                            </button>
                        </div>
                    </div>
                    <div className="Description col-md-12">
                        <p>Logement disponible à partir du {this.props.date} à {this.props.hour}</p>
                        <p>Nombre de place : {this.props.numberPlace} | Places encore disponibles : {this.props.placeAvailable}</p>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default AccomodationItem;