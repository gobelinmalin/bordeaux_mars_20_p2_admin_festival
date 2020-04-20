import React from 'react';
import './AddFestival.css';
import ButtonAddArtists from './Buttons/ButtonAddArtists';
import ButtonAddAccomodations from './Buttons/ButtonAddAccomodations';
import ButtonAddEvent from './Buttons/ButtonAddEvent';
import ButtonReturn from './Buttons/ButtonReturn';
import { Link } from 'react-router-dom';

function AddFestival() {
    return (
        <div>
            <div className="AddFestival col-sm-4 offset-sm-4">
                <div className="CenteredItem">
                    <Link to="/"><ButtonReturn /></Link>
                </div>
                <Link to="/artists"><ButtonAddArtists /></Link>
                <ButtonAddAccomodations />
                <Link to="/add-event"><ButtonAddEvent /></Link>
            </div>
        </div>
    );
}

export default AddFestival;