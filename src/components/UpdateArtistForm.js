import React from 'react';
import '../style.css';
import ButtonReturn from './Buttons/ButtonReturn';
import StyleItem from './StyleItem';
import { Link } from 'react-router-dom';
import axios from 'axios';

class UpdateArtistForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: [{
                name: '',
                image_url: '',
                tracker_count: 0,
                music_url: '',
                description: '',
                country: '',
                id_style: '',
                embed_video: ''
            }]
        }
    }

    componentDidMount() {        
        const params = this.props.match.params;
        axios.get(`https://api-festit.herokuapp.com/api/artists`)
        .then(response => response.data)
        .then(data => {
            this.setState({ inputs: data.filter(item => item.idartist === Number(params.idartist)) });
        })     
    }

    onChange = (event) => {
        this.setState({ inputs: [{ [event.target.name]: event.target.value }] });
    }

    submitForm = (event) => {
        event.preventDefault();
        const params = this.props.match.params;
        const url = `https://api-festit.herokuapp.com/api/artists/${params.idartist}`;
        axios.put(url, this.state.inputs[0])
            .then(res => res.data)
            .then(res => {
                alert(`L'artiste a bien été modifié !`);
            })
            .catch(event => {
                alert(`Erreur lors de la modification de l'artiste : ${event.message}`);
            });
    }
    
    render() {
        console.log(this.state.inputs[0], 'state');
        return (
            <div>
                <div className="container ActionBloc">
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
                                name="name"
                                onChange={this.onChange}
                                value={this.state.inputs[0].name}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="country">Pays</label>
                                <input
                                type="text"
                                className="form-control"
                                name="country"
                                onChange={this.onChange}
                                value={this.state.inputs[0].country}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="image_url">Lien vers l'image de l'artiste</label>
                            <input
                            type="text"
                            className="form-control"
                            name="image_url"
                            placeholder="https://..."
                            onChange={this.onChange}
                            value={this.state.inputs[0].image_url}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="music_url">Lien vers le compte Youtube de l'artiste</label>
                            <input
                            type="text"
                            className="form-control"
                            name="music_url"
                            placeholder="https://..."
                            onChange={this.onChange}
                            value={this.state.inputs[0].music_url}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="embed_video">Lien embed vers le clip de l'artiste</label>
                            <input
                            type="text"
                            className="form-control"
                            name="embed_video"
                            placeholder='<iframe width="560" height="315" src="..."></iframe>'
                            onChange={this.onChange}
                            value={this.state.inputs[0].value}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="id_style">ID du style de l'artiste</label>
                            <select 
                            className="form-control"
                            onChange={this.onChange}
                            value={this.state.inputs[0].id_style} name="id_style">
                                <StyleItem />
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                            className="form-control"
                            name="description"
                            rows="4"
                            type="text"
                            onChange={this.onChange}
                            value={this.state.inputs[0].description}
                            >
                            </textarea>
                        </div>
                        <p className="mandatory">Tous les champs ci-dessus sont obligatoires</p>
                        <div className="col-sm-4 offset-sm-4">
                            <input type="submit" className="SaveForm" value="Enregistrer" />
                        </div>
                    </form>
                </div>
                
            </div>
        );
    }
    
}

export default UpdateArtistForm;