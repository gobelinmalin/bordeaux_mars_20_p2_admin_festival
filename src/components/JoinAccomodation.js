import React from 'react';
import '../style.css';
import ButtonReturn from './Buttons/ButtonReturn';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import FestivalCheckbox from './FestivalCheckbox';

class JoinAccomodation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                nameAccomodation: '',
            }
        }
    }

    handleCheckbox = (e) => {
        e.preventDefault();
        const params = this.props.match.params;
        const {festivalschecked} = this.form;
        const checkboxArray = Array.prototype.slice.call(festivalschecked);
        const checkedCheckboxes = checkboxArray.filter(input => input.checked);
        const checkedCheckboxesValues = checkedCheckboxes.map(input => input.value);
        console.log('checked array values:', checkedCheckboxesValues);
        const urlPut = checkedCheckboxesValues.map(item => 
            `https://api-festit.herokuapp.com/api/festival/${item}/accomodations/${Number(params.idaccomodation)}`);
        console.log(urlPut);
        for (let i = 0; i < urlPut.length; i++) {
            axios.post(urlPut[i])
            .then(res => res.data)
            .catch(event => {
                alert(`Erreur lors de la modification de l'artiste : ${event.message}`);
            });
        }
    }

    handleShow = () => {
        this.setState({ show: true });
    }
    
    render() {
        console.log(this.state.inputs, 'state');
        return (
            <>
            <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Jointures sauvegardées</Modal.Title>
                </Modal.Header>
                <Modal.Body>L'hébergement est maintenant associé à un ou plusieurs festivals.</Modal.Body>
                <Modal.Footer>
                <Link to="/accomodations"><button
                    className="ButtonAction Cancel"
                    >
                    Ok
                </button></Link>
                </Modal.Footer>
            </Modal>
            <div className="container ActionBloc">
                <p className="title">Lier {this.state.inputs.nameAccomodation} à un ou plusieurs festivals</p>
                <Link to="/accomodations"><ButtonReturn /></Link>
            </div>
            <div className="container ContainerBody">
                <form ref={form => this.form = form} onSubmit={this.handleCheckbox}>
                <div className="Checkbox mb-3">
                        <FestivalCheckbox/>
                    </div>
                    <div className="col-sm-4 offset-sm-4">
                        <button type="submit" className="SaveForm ButtonAction" onClick={this.handleShow}>Lier</button>
                    </div>
                </form>
            </div>
            </>
        );
    }
    
}

export default JoinAccomodation;