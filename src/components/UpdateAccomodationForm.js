import React from 'react';
import '../style.css';
import ButtonReturn from './Buttons/ButtonReturn';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import Modal from 'react-bootstrap/Modal';

class UpdateAccomodationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                namePackage: '',
                nameAccomodation: '',
                passPrice: '',
                priceByNight: '',
                price: '',
                date: '',
                hour: '',
                image1: '',
                image2: '',
                image3: '',
                image4: '',
                numberPlace: '',
                km: '',
                placeAvailable: '',
                airbnb: false,
                description: ''
            }
        }
    }

    componentDidMount() {        
        const params = this.props.match.params;
        axios.get(`https://api-festit.herokuapp.com/api/accomodation/${Number(params.idaccomodation)}`)
        .then(response => response.data)
        .then(data => {
            this.setState({ inputs: data[0] });
        })     
    }

    onChange = (event) => {
        const { inputs } = this.state;
        this.setState({ inputs : { ...inputs,  [event.target.name]: event.target.value}});
    }

    submitForm = (event) => {
        event.preventDefault();
        const params = this.props.match.params;
        const url = `https://api-festit.herokuapp.com/api/accomodation/${params.idaccomodation}`;
        axios.put(url, this.state.inputs)
            .then(res => res.data)
            .then(res => {
                //alert(`L'hébergement a bien été modifié !`);
            })
            .catch(event => {
                alert(`Erreur lors de la modification de l'hébergement : ${event.message}`);
            });
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
                <Modal.Title>Modifications effectuées</Modal.Title>
                </Modal.Header>
                <Modal.Body>Les modifications ont bien été prises en compte.</Modal.Body>
                <Modal.Footer>
                <Link to="/accomodations"><button
                    className="ButtonAction Cancel"
                    >
                    Ok
                </button></Link>
                </Modal.Footer>
            </Modal>
            <div className="container ActionBloc">
                <p className="title">Ajouter un hébergement</p>
                <Link to="/accomodations"><ButtonReturn /></Link>
            </div>
            <div className="container ContainerBody">
                <form onSubmit={this.submitForm}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="nameAccomodation">Nom de l'hébergement</label>
                            <input
                            type="text"
                            className="form-control"
                            name="nameAccomodation"
                            onChange={this.onChange}
                            value={this.state.inputs.nameAccomodation}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="namePackage">Nom du package festival</label>
                            <input
                            type="text"
                            className="form-control"
                            name="namePackage"
                            onChange={this.onChange}
                            value={this.state.inputs.namePackage}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label htmlFor="priceByNight">Prix par nuit</label>
                            <input
                            type="number"
                            className="form-control"
                            name="priceByNight"
                            onChange={this.onChange}
                            value={this.state.inputs.priceByNight}
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="price">Prix global</label>
                            <input
                            type="number"
                            className="form-control"
                            name="price"
                            onChange={this.onChange}
                            value={this.state.inputs.price}
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="passPrice">Prix avec le pass</label>
                            <input
                            type="number"
                            className="form-control"
                            name="passPrice"
                            onChange={this.onChange}
                            value={this.state.inputs.passPrice}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="date">Date de disponibilité</label>
                            <input
                            type="date"
                            className="form-control"
                            name="date"
                            onChange={this.onChange}
                            value={this.state.inputs.date}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="hour">Horaire de check-in</label>
                            <input
                            type="text"
                            className="form-control"
                            name="hour"
                            onChange={this.onChange}
                            value={this.state.inputs.hour}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="numberPlace">Nombre de place</label>
                            <input
                            type="number"
                            className="form-control"
                            name="numberPlace"
                            onChange={this.onChange}
                            value={this.state.inputs.numberPlace}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="placeAvailable">Nombre de places disponibles</label>
                            <input
                            type="number"
                            className="form-control"
                            name="placeAvailable"
                            onChange={this.onChange}
                            value={this.state.inputs.placeAvailable}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="km">Distance du festival (km)</label>
                            <input
                            type="number"
                            className="form-control"
                            name="km"
                            onChange={this.onChange}
                            value={this.state.inputs.km}
                            />
                        </div>
                        <div className=" col-md-6">
                            <label htmlFor="airbnb">Partenariat Airbnb</label><br/>
                            <BootstrapSwitchButton
                            checked={this.state.inputs.airbnb}
                            name="airbnb"
                            data-toggle="toggle"
                            onstyle="success"
                            onChange={(checked) => {
                                const { inputs } = this.state;
                                this.setState({ inputs : { ...inputs,  airbnb: checked}});
                            }}
                            value={this.state.inputs.airbnb}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                        className="form-control"
                        name="description"
                        rows="4"
                        type="text"
                        onChange={this.onChange}
                        value={this.state.inputs.description}
                        >
                        </textarea>
                    </div>
                    <p className="mandatory">Tous les champs ci-dessus sont obligatoires</p>
                    <div className="form-group">
                        <label htmlFor="image1">Image 1 de l'hébergement</label>
                        <input
                        type="text"
                        className="form-control"
                        name="image1"
                        placeholder="https://..."
                        onChange={this.onChange}
                        value={this.state.inputs.image1}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image2">Image 2 de l'hébergement</label>
                        <input
                        type="text"
                        className="form-control"
                        name="image2"
                        placeholder="https://..."
                        onChange={this.onChange}
                        value={this.state.inputs.image2}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image3">Image 3 de l'hébergement</label>
                        <input
                        type="text"
                        className="form-control"
                        name="image3"
                        placeholder="https://..."
                        onChange={this.onChange}
                        value={this.state.inputs.image3}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image4">Image 4 de l'hébergement</label>
                        <input
                        type="text"
                        className="form-control"
                        name="image4"
                        placeholder="https://..."
                        onChange={this.onChange}
                        value={this.state.inputs.image4}
                        />
                    </div>
                    <div className="col-sm-4 offset-sm-4">
                        <button type="submit" onClick={this.handleShow} className="SaveForm ButtonAction">Modifier</button>
                    </div>
                </form>
            </div> 
            </>
        );
    }
}

export default UpdateAccomodationForm; 