import React from 'react';
import '../style.css';
import ButtonReturn from './Buttons/ButtonReturn';
import ButtonAction from './Buttons/ButtonAction';
import { Link } from 'react-router-dom';

function AddFestival() {
    return (
        <div>
            <div className="AddFestival col-sm-4 offset-sm-4">
                <div className="CenteredItem">
                    <Link to="/"><ButtonReturn /></Link>
                </div>
                <div className="ActionCenter">
                    <Link to="/artists"><ButtonAction name="Artistes" class="Action"/></Link>
                    <Link to="/accomodations"><ButtonAction name="Hébergement" class="Action"/></Link>
                    <Link to="/add-event"><ButtonAction name="Evènement" class="Action"/></Link>
                </div>
            </div>
        </div>
    );
}

export default AddFestival;