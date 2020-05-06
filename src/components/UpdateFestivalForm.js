import React from 'react';
import '../style.css';
import ButtonReturn from './Buttons/ButtonReturn';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

class UpdateFestivalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                name: '',
                startDate: '',
                endDate: '',
                city: '',
                country: '',
                description: '',
                url_video: '',
                image1: '',
                image2: '',
                image3: '',
                image4: ''
            }
        }
    }

    componentDidMount() {        
        const params = this.props.match.params;
        axios.get(`https://api-festit.herokuapp.com/api/festival/${Number(params.idfestival)}`)
        .then(response => response.data)
        .then(data => {
            //console.log(data.filter(item => item.idfestival === Number(params.idfestival)), 'filter');
            this.setState({ inputs: data[0]});
            //data.filter(item => item.idfestival === Number(params.idfestival)).map(item => this.setState({ inputs:  }));
            //data.filter(fest => fest.idfestival === params.idfestival).map(item => this.setState({ item: this.state.item }))
        })
    }

    onChange = (event) => {
        const { inputs } = this.state;
        this.setState({ inputs : { ...inputs,  [event.target.name]: event.target.value}});

    }

    submitForm = (event) => {
        event.preventDefault();
        const params = this.props.match.params;
        const url = `https://api-festit.herokuapp.com/api/festival/${params.idfestival}`;


        axios.put(url, this.state.inputs)
            .then(res => res.data)
            .then(res => {
                //alert(`Le festival a bien été modifié !`);
            })
            .catch(e => {
                alert(`Erreur lors de la modification du festival : ${event.message}`);
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
                <Link to="/"><button
                    className="ButtonAction Cancel"
                    >
                    Ok
                </button></Link>
                </Modal.Footer>
            </Modal>
            <div className="container ActionBloc">
                <p className="title">Description de l'évènement</p>
                <Link to="/"><ButtonReturn /></Link>
            </div>
            <div className="container ContainerBody">
                <form onSubmit={this.submitForm}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="name">Nom du festival</label>
                            <input
                            type="text"
                            className="form-control"
                            name="name"
                            onChange={this.onChange}
                            value={this.state.inputs.name}
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="startDate">Date de début l'évènement</label>
                            <input
                            type="date"
                            className="form-control"
                            name="startDate"
                            onChange={this.onChange}
                            value={this.state.inputs.startDate}
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="endDate">Date de fin l'évènement</label>
                            <input
                            type="date"
                            className="form-control"
                            name="endDate"
                            onChange={this.onChange}
                            value={this.state.inputs.endDate}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="city">Ville</label>
                            <input
                            type="text"
                            className="form-control"
                            name="city"
                            onChange={this.onChange}
                            value={this.state.inputs.city}
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
                        <label htmlFor="description">Description</label>
                        <textarea
                        className="form-control"
                        name="description"
                        rows="4"
                        onChange={this.onChange}
                        value={this.state.inputs.description}
                        >
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="url_video">Vidéo trailer</label>
                        <input
                        type="text"
                        className="form-control"
                        name="url_video"
                        placeholder="URL du trailer du festival"
                        onChange={this.onChange}
                        value={this.state.inputs.url_video}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image1">Image 1</label>
                        <input
                        type="text"
                        className="form-control"
                        name="image1"
                        placeholder="URL de l'illustration du festival"
                        onChange={this.onChange}
                        value={this.state.inputs.image1}
                        />
                    </div>
                    <p className="mandatory">Tous les champs ci-dessus sont obligatoires</p>
                    <div className="form-group">
                        <label htmlFor="image2">Image 2</label>
                        <input
                        type="text"
                        className="form-control"
                        name="image2"
                        onChange={this.onChange}
                        value={this.state.inputs.image2}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image3">Image 3</label>
                        <input
                        type="text"
                        className="form-control"
                        name="image3"
                        onChange={this.onChange}
                        value={this.state.inputs.image3}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image4">Image 4</label>
                        <input
                        type="text"
                        className="form-control"
                        name="image4"
                        onChange={this.onChange}
                        value={this.state.inputs.image4}
                        />
                    </div>
                    <div className="col-sm-4 offset-sm-4">
                        <button type="submit" onClick={this.handleShow} className="SaveForm ButtonAction">Modifier</button>
                    </div>
                </form>
            </div>
            </>
        );
    }
}

export default UpdateFestivalForm; 