import React from 'react';
import './AddEventForm.css';
import ButtonReturn from './Buttons/ButtonReturn';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AddArtistForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            image_url: '',
            music_url: '',
            description: '',
            url_video: '',
            country: '',
            id_style: '',
            embed_video: ''
        }
    }

    onChange = (event) => {
        this.setState({
          [event.target.id]: event.target.value,
        });
    }

    submitForm = (event) => {
        event.preventDefault();
        const url = 'https://api-festival.herokuapp.com/api/artists';
        axios.post(url, this.state)
            .then(res => res.data)
            .then(res => {
                alert(`L'artiste ${res.name} a bien été ajouté !`);
                console.log(res);
            })
            .catch(event => {
                console.error(event);
                alert(`Erreur lors de l'ajout de l'artiste : ${event.message}`);
            });
    }
    

    render() {
        console.log(this.state);
        return (
            <div>
                <div className="container AddEvent">
                    <p className="title">Ajouter un artiste</p>
                    <Link to="/artists"><ButtonReturn /></Link>
                </div>
                <div className="container ContainerBody">
                    <form onSubmit={this.submitForm}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="name">Nom</label>
                                <input
                                type="text"
                                className="form-control"
                                id="name"
                                onChange={this.onChange}
                                value={this.state.value}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="datetime">Pays</label>
                                <input
                                type="text"
                                className="form-control"
                                id="country"
                                onChange={this.onChange}
                                value={this.state.value}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="image_url">Lien vers l'image de l'artiste</label>
                            <input
                            type="text"
                            className="form-control"
                            id="image_url"
                            placeholder="https://..."
                            onChange={this.onChange}
                            value={this.state.value}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="music_url">Lien vers le compte Youtube de l'artiste</label>
                            <input
                            type="text"
                            className="form-control"
                            id="music_url"
                            placeholder="https://..."
                            onChange={this.onChange}
                            value={this.state.value}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="embed_video">Lien embed vers le clip de l'artiste</label>
                            <input
                            type="text"
                            className="form-control"
                            id="embed_video"
                            placeholder='<iframe width="560" height="315" src="..."></iframe>'
                            onChange={this.onChange}
                            value={this.state.value}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="id_style">ID du style de l'artiste</label>
                            <input
                            type="text"
                            className="form-control"
                            id="id_style"
                            onChange={this.onChange}
                            value={this.state.value}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                            className="form-control"
                            id="description"
                            rows="4"
                            onChange={this.onChange}
                            value={this.state.value}
                            >
                            </textarea>
                        </div>
                        <p className="mandatory">Tous les champs ci-dessus sont obligatoires</p>
                        <div className="col-sm-4 offset-sm-4">
                            <input type="submit" className="ButtonAddEvent" value="Enregistrer" />
                        </div>
                    </form>
                </div>
                
            </div>
        );
    }
    
}

export default AddArtistForm;