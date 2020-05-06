import React from 'react';
import '../style.css';
import ButtonReturn from './Buttons/ButtonReturn';
import StyleItem from './StyleItem';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

class UpdateArtistForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                name: '',
                image_url: '',
                tracker_count: 0,
                music_url: '',
                description: '',
                country: '',
                id_style: '',
                embed_video: ''
            }
        }
    }

    componentDidMount() {        
        const params = this.props.match.params;
        axios.get(`https://api-festit.herokuapp.com/api/artists/id/${Number(params.idartist)}`)
        .then(response => response.data)
        .then(data => {
            this.setState({ inputs: data[0] });
        })     
    }

    onChange = (event) => {
        const { inputs } = this.state;
        this.setState({ inputs : { ...inputs,  [event.target.name]: event.target.value}});
    }

    submitForm = (event) => {
        event.preventDefault();
        const params = this.props.match.params;
        const url = `https://api-festit.herokuapp.com/api/artists/${params.idartist}`;
        axios.put(url, this.state.inputs)
            .then(res => res.data)
            .then(res => {
                //alert(`L'artiste a bien été modifié !`);
            })
            .catch(event => {
                alert(`Erreur lors de la modification de l'artiste : ${event.message}`);
            });
    }

    handleShow = () => {
        this.setState({ show: true });
    }
    
    render() {
        console.log(this.state.inputs, 'state');
        return (
            <>
            <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modifications effectuées</Modal.Title>
                </Modal.Header>
                <Modal.Body>Les modifications ont bien été prises en compte.</Modal.Body>
                <Modal.Footer>
                <Link to="/artists"><button
                    className="ButtonAction Cancel"
                    >
                    Ok
                </button></Link>
                </Modal.Footer>
            </Modal>
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
                            value={this.state.inputs.name}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="country">Pays</label>
                            <input
                            type="text"
                            className="form-control"
                            name="country"
                            onChange={this.onChange}
                            value={this.state.inputs.country}
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
                        value={this.state.inputs.image_url}
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
                        value={this.state.inputs.music_url}
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
                        value={this.state.inputs.embed_video}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="id_style">ID du style de l'artiste</label>
                        <select 
                        className="form-control"
                        onChange={this.onChange}
                        value={this.state.inputs.id_style} name="id_style">
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
                        value={this.state.inputs.description}
                        >
                        </textarea>
                    </div>
                    <p className="mandatory">Tous les champs ci-dessus sont obligatoires</p>
                    <div className="col-sm-4 offset-sm-4">
                        <button type="submit" onClick={this.handleShow} className="SaveForm ButtonAction">Modifier</button>
                    </div>
                </form>
            </div>
            </>
        );
    }
    
}

export default UpdateArtistForm;