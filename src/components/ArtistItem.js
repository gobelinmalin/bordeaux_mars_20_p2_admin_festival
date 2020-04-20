import React from 'react';
import { Link } from 'react-router-dom';
import './FestivalItem.css';
import ButtonUpdate from './Buttons/ButtonUpdate';
import ButtonDelete from './Buttons/ButtonDelete';

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
                <div className="FestCard">
                    <div className="FestInfoUp">
                        <div className="col-md-1">
                            <img src={this.props.image_url} className="img-round" alt={this.props.name}/>
                        </div>
                        <div className="col-md-7">
                            <div className="FestTitle">
                                <h3>{this.props.name} <span className="idfestival">{`(id : ${this.props.idartist})`}</span></h3>
                            </div>
                            <div className="FestInfo">
                                <p>Genre, {this.props.country}</p>
                            </div>
                        </div>
                        <div className="buttons col-md-8">
                            <ButtonUpdate />
                            <ButtonDelete />
                        </div>
                    </div>
                    <div className="FestDescription col-md-12">
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