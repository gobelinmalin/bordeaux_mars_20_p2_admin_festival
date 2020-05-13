import React from 'react';
import '../style.css';
import ButtonReturn from './Buttons/ButtonReturn';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import FestivalCheckbox from './FestivalCheckbox';

class JoinArtist extends React.Component {
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

    handleCheckbox = (e) => {
        e.preventDefault();
        const {festivalschecked} = this.form;
        const checkboxArray = Array.prototype.slice.call(festivalschecked);
        const checkedCheckboxes = checkboxArray.filter(input => input.checked);
        const checkedCheckboxesValues = checkedCheckboxes.map(input => input.value);
        console.log('checked array values:', checkedCheckboxesValues);
        const urlPut = checkedCheckboxesValues.map(item => 
            `https://api-festit.herokuapp.com/api/festival/${item}/artists/${this.state.inputs.idartist}`);
        console.log(urlPut);
        for (let i = 0; i < urlPut.length; i++) {
            axios.post(urlPut[i])
            .then(res => res.data)
            .catch(event => {
                alert(`Erreur lors de la modification de l'artiste : ${event.message}`);
            });
        }
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
                <Modal.Title>Jointures sauvegardées</Modal.Title>
                </Modal.Header>
                <Modal.Body>L'artiste est maintenant associé à un ou plusieurs festivals.</Modal.Body>
                <Modal.Footer>
                <Link to="/artists"><button
                    className="ButtonAction Cancel"
                    >
                    Ok
                </button></Link>
                </Modal.Footer>
            </Modal>
            <div className="container ActionBloc">
                <p className="title">Lier {this.state.inputs.name} à un ou plusieurs festivals</p>
                <Link to="/artists"><ButtonReturn /></Link>
            </div>
            <div className="container ContainerBody">
                <form ref={form => this.form = form} onSubmit={this.handleCheckbox}>
                <div className="Checkbox mb-3">
                        <FestivalCheckbox/>
                    </div>
                    <div className="col-sm-4 offset-sm-4">
                        <button type="submit" className="SaveForm ButtonAction" onClick={this.handleShow}>Check</button>
                    </div>
                </form>
            </div>
            </>
        );
    }
    
}

export default JoinArtist;