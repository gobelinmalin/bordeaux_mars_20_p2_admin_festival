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
            <div className="AddFestival col-md-2 offset-md-5">
                <div className="CenteredItem">
                    <Link to="/"><ButtonReturn /></Link>
                </div>
                <ButtonAddArtists />
                <ButtonAddAccomodations />
                <ButtonAddEvent />
            </div>
        </div>
    );
}

export default AddFestival;