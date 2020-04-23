import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import ButtonAction from './Buttons/ButtonAction';

class AccomodationItem extends React.Component {

    render() {
        return (
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
                        <div className="buttons col-md-8">
                            <ButtonAction name="Modifier" class="Update"/>
                            <ButtonAction name="Supprimer" class="Delete"/>
                        </div>
                    </div>
                    <div className="Description col-md-12">
                        <p>Logement disponible à partir du {this.props.date} à {this.props.hour}</p>
                        <p>Nombre de place : {this.props.numberPlace} | Places encore disponibles : {this.props.placeAvailable}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AccomodationItem;