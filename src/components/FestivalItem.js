import React from 'react';
import { Link } from 'react-router-dom';

class FestivalItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // isRead: false
        }
    }

    render() {
        return (
            <div className="FestCard">
                <div className="FestInfoUp">
                    <div className="">
                        <div className="FestTitle">
                            <h3>{this.props.name}</h3><p>{`(id : ${this.props.idfestival})`}</p>
                        </div>
                        <div className="FestInfo">
                            <p>{`Du ${this.props.datetime}`}   {this.props.city} {this.props.country}</p>
                        </div>
                    </div>
                    <div className="buttons">
                        <button>Modifier</button>
                        <button>Supprimer</button>
                    </div>
                </div>
                <div className="FestDescription">
                    <p>
                        {this.props.description}
                    </p>
                </div>
            </div>
        )
    }
}

export default FestivalItem;