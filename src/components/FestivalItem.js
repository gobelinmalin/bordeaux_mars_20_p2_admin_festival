import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import ButtonAction from './Buttons/ButtonAction';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

class FestivalItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    deleteEvent = () => {
        axios.delete(`https://api-festit.herokuapp.com/api/festival/${this.props.idfestival}`)
        .then(response => {
            //alert(`Le festival ${this.props.name} a bien été supprimé`);
            this.refreshPage();
          })
          .catch(err => {
            alert(`Erreur lors de la suppression du festival : ${err.message}`);
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
                <Modal.Title>Supprimer le festival {this.props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Êtes-vous sûr de vouloir supprimer ce festival ?</Modal.Body>
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
                        <div className="col-md-8">
                            <div>
                                <h3>{this.props.name} <span className="IdItem">{`(id : ${this.props.idfestival})`}</span></h3>
                            </div>
                            <div>
                                <p>{`Du ${this.props.startDate} au ${this.props.endDate} à ${this.props.city}, ${this.props.country}`}</p>
                            </div>
                        </div>
                        <div className="buttons col-md-4">
                            <Link to={`/update-festival/${this.props.idfestival}`}><ButtonAction name="Modifier" class="Update"/></Link>
                            <button onClick={this.handleShow} className="Delete ButtonAction"> 
                                Supprimer
                            </button>
                        </div>
                    </div>
                    <div className="Description col-md-12">
                        <p>
                            {this.props.description}
                        </p>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default FestivalItem;