import React from 'react';
import '../style.css';
import ButtonReturn from './Buttons/ButtonReturn';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

class AddAccomodationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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

    onChange = (event) => {
        this.setState({
          [event.target.id]: event.target.value,
        });
    }

    submitForm = (event) => {
        event.preventDefault();
        const url = 'https://api-festival.herokuapp.com/api/accomodation';
        axios.post(url, this.state)
            .then(res => res.data)
            .then(res => {
                alert(`L'hébergement ${this.state.nameAccomodation} a bien été ajouté !`);
            })
            .catch(event => {
                alert(`Erreur lors de l'ajout de l'hébergement : ${event.message}`);
            });
    }

    // submitForm = (event) => {
    //     event.preventDefault();
    //     const url = 'https://api-festival.herokuapp.com/api/accomodation';
    //     axios.post(url, this.state)
    //         .then(res => res.data)
    //         .then(res => {
    //             alert(`L'hébergement ${this.state.nameAccomodation} a bien été ajouté !`);
    //         })
    //         .catch(event => {
    //             alert(`Erreur lors de l'ajout de l'hébergement : ${event.message}`);
    //         });
    // }
    
    render() {
        console.log(this.state);
        return (
            <div>
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
                                id="nameAccomodation"
                                onChange={this.onChange}
                                value={this.state.value}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="namePackage">Nom du package festival</label>
                                <input
                                type="text"
                                className="form-control"
                                id="namePackage"
                                onChange={this.onChange}
                                value={this.state.value}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="priceByNight">Prix par nuit</label>
                                <input
                                type="number"
                                className="form-control"
                                id="priceByNight"
                                onChange={this.onChange}
                                value={this.state.value}
                                />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="price">Prix global</label>
                                <input
                                type="number"
                                className="form-control"
                                id="price"
                                onChange={this.onChange}
                                value={this.state.value}
                                />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="passPrice">Prix avec le pass</label>
                                <input
                                type="number"
                                className="form-control"
                                id="passPrice"
                                onChange={this.onChange}
                                value={this.state.value}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="date">Date de disponibilité</label>
                                <input
                                type="date"
                                className="form-control"
                                id="date"
                                onChange={this.onChange}
                                value={this.state.value}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="hour">Horaire de check-in</label>
                                <input
                                type="text"
                                className="form-control"
                                id="hour"
                                onChange={this.onChange}
                                value={this.state.value}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="numberPlace">Nombre de place</label>
                                <input
                                type="number"
                                className="form-control"
                                id="numberPlace"
                                onChange={this.onChange}
                                value={this.state.value}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="placeAvailable">Nombre de places disponibles</label>
                                <input
                                type="number"
                                className="form-control"
                                id="placeAvailable"
                                onChange={this.onChange}
                                value={this.state.value}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="km">Distance du festival (km)</label>
                                <input
                                type="number"
                                className="form-control"
                                id="km"
                                onChange={this.onChange}
                                value={this.state.value}
                                />
                            </div>
                            <div className=" col-md-6">
                                <label htmlFor="airbnb">Partenariat Airbnb</label><br/>
                                <BootstrapSwitchButton
                                checked={false}
                                id="airbnb"
                                data-toggle="toggle"
                                onstyle="success"
                                onChange={(checked) => {
                                    this.setState({ airbnb: checked })
                                }}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                            className="form-control"
                            id="description"
                            rows="4"
                            type="text"
                            onChange={this.onChange}
                            value={this.state.value}
                            >
                            </textarea>
                        </div>
                        <p className="mandatory">Tous les champs ci-dessus sont obligatoires</p>
                        <div className="form-group">
                            <label htmlFor="image1">Image 1 de l'hébergement</label>
                            <input
                            type="text"
                            className="form-control"
                            id="image1"
                            placeholder="https://..."
                            onChange={this.onChange}
                            value={this.state.value}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image2">Image 2 de l'hébergement</label>
                            <input
                            type="text"
                            className="form-control"
                            id="image2"
                            placeholder="https://..."
                            onChange={this.onChange}
                            value={this.state.value}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image3">Image 3 de l'hébergement</label>
                            <input
                            type="text"
                            className="form-control"
                            id="image3"
                            placeholder="https://..."
                            onChange={this.onChange}
                            value={this.state.value}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image4">Image 4 de l'hébergement</label>
                            <input
                            type="text"
                            className="form-control"
                            id="image4"
                            placeholder="https://..."
                            onChange={this.onChange}
                            value={this.state.value}
                            />
                        </div>
                        <div className="col-sm-4 offset-sm-4">
                            <input type="submit" className="SaveForm" value="Enregistrer" />
                        </div>
                    </form>
                </div>
                
            </div>
        );
    }
    
}

export default AddAccomodationForm;