import React from 'react';
import { Link } from 'react-router-dom';
import './FestivalItem.css';
import ButtonUpdate from './ButtonUpdate';
import ButtonDelete from './ButtonDelete';

class FestivalItem extends React.Component {
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
                        <div className="col-md-8">
                            <div className="FestTitle">
                                <h3>{this.props.name} <span className="idfestival">{`(id : ${this.props.idfestival})`}</span></h3>
                            </div>
                            <div className="FestInfo">
                                <p>{`Du ${this.props.datetime}`}   {this.props.city} {this.props.country}</p>
                            </div>
                        </div>
                        <div className="buttons col-md-8">
                            <ButtonUpdate />
                            <ButtonDelete />
                        </div>
                    </div>
                    <div className="FestDescription col-md-12">
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