import React from 'react';
import '../style.css';
import ButtonReturn from './Buttons/ButtonReturn';
import { Link } from 'react-router-dom';
import axios from 'axios';

class UpdateFestivalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: [{
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
            }]
            
        }
    }

    componentDidMount() {        
        const params = this.props.match.params;
        axios.get(`https://api-festival.herokuapp.com/api/festival`)
        .then(response => response.data)
        .then(data => {
            //console.log(data.filter(item => item.idfestival === Number(params.idfestival)), 'filter');
            
            this.setState({ inputs: data.filter(item => item.idfestival === Number(params.idfestival)) })
            //data.filter(item => item.idfestival === Number(params.idfestival)).map(item => this.setState({ inputs:  }));
            //data.filter(fest => fest.idfestival === params.idfestival).map(item => this.setState({ item: this.state.item }))

        })     
    }

    onChange = (event) => {
        const { inputs } = this.state;
        this.setState({
            [inputs[0][event.target.id]]: event.target.value,
        });
        console.log([inputs[0][event.target.id]], 'event target console');
        console.log(event.target.value, 'event value');
    }

    submitForm = (event) => {
        event.preventDefault();
        const params = this.props.match.params;
        const url = `https://api-festival.herokuapp.com/api/festival/${params.idfestival}`;
        axios.put(url, this.state.inputs[0])
            .then(res => res.data)
            .then(res => {
                alert(`Le festival ${this.state.inputs[0].name} a bien été modifié !`);
            })
            .catch(e => {
                alert(`Erreur lors de la modification du festival : ${event.message}`);
            });
    }

    render() {
        console.log(this.state.inputs[0], 'state');
        return (
            <div>
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
                                id="name"
                                onChange={this.onChange}
                                value={this.state.inputs[0].name}
                                />
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="startDate">Date de début l'évènement</label>
                                <input
                                type="date"
                                className="form-control"
                                id="startDate"
                                onChange={this.onChange}
                                value={this.state.value}
                                />
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="endDate">Date de fin l'évènement</label>
                                <input
                                type="date"
                                className="form-control"
                                id="endDate"
                                onChange={this.onChange}
                                value={this.state.value}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="city">Ville</label>
                                <input
                                type="text"
                                className="form-control"
                                id="city"
                                onChange={this.onChange}
                                value={this.state.inputs[0].city}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="country">Pays</label>
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
                        <div className="form-group">
                            <label htmlFor="url_video">Vidéo trailer</label>
                            <input
                            type="text"
                            className="form-control"
                            id="url_video"
                            placeholder="URL du trailer du festival"
                            onChange={this.onChange}
                            value={this.state.value}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image1">Image 1</label>
                            <input
                            type="text"
                            className="form-control"
                            id="image1"
                            placeholder="URL de l'illustration du festival"
                            onChange={this.onChange}
                            value={this.state.value}
                            />
                        </div>
                        <p className="mandatory">Tous les champs ci-dessus sont obligatoires</p>
                        <div className="form-group">
                            <label htmlFor="image2">Image 2</label>
                            <input
                            type="text"
                            className="form-control"
                            id="image2"
                            onChange={this.onChange}
                            value={this.state.value}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image3">Image 3</label>
                            <input
                            type="text"
                            className="form-control"
                            id="image3"
                            onChange={this.onChange}
                            value={this.state.value}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image4">Image 4</label>
                            <input
                            type="text"
                            className="form-control"
                            id="image4"
                            onChange={this.onChange}
                            value={this.state.value}
                            />
                        </div>
                        <div className="col-sm-4 offset-sm-4">
                            <input type="submit" className="SaveForm" value="Modifier" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default UpdateFestivalForm;