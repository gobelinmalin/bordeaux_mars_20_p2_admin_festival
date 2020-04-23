import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import ButtonAction from './Buttons/ButtonAction';

class ArtistItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // isRead: false
        }
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
                        <div className="buttons col-md-8">
                            <ButtonAction name="Modifier" class="Update"/>
                            <ButtonAction name="Supprimer" class="Delete"/>
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