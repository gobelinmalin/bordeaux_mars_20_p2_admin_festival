import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import ButtonAction from './Buttons/ButtonAction';
import axios from 'axios';

class FestivalItem extends React.Component {
    constructor(props) {
        super(props);
    }

    deleteEvent = (idfestival) => {
        axios.delete(`https://api-festival.herokuapp.com/api/festival/${this.props.idfestival}`)
        .then(response => {
            alert(`Le festival a bien été supprimé`);
          })
          .catch(err => {
            alert(`Erreur lors de la suppression du festival : ${err.message}`);
          });
    }

    render() {
        return (
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
                        <div className="buttons col-md-8">
                            <ButtonAction name="Modifier" class="Update"/>
                            <ButtonAction name="Supprimer" class="Delete" onClick={() => this.deleteEvent(this.props.idfestival)}/>
                        </div>
                    </div>
                    <div className="Description col-md-12">
                        <p>
                            {this.props.description}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default FestivalItem;