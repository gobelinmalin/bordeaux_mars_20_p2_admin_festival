import React from 'react';
import '../style.css';
import AccomodationItem from './AccomodationItem';
import ButtonAction from './Buttons/ButtonAction';
import ButtonReturn from './Buttons/ButtonReturn';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AccomodationSkeleton from './Skeletons/AccomodationSkeleton';

class AccomodationList extends React.Component {
    state = {
        accomodations: [],
        skeleton: true
    }
    componentDidMount() {
        axios.get('https://api-festival.herokuapp.com/api/accomodation')
        .then(response => response.data)
        .then(data => {
            this.setState({ accomodations: data, skeleton: false })
        })
    }

    // componentDidMount() {
    //     axios.get('https://api-festival.herokuapp.com/api/accomodation')
    //     .then(response => response.data)
    //     .then(data => {
    //         this.setState({ accomodations: data, skeleton: false })
    //     })
    // }
    
    render() {
        return (
            <div>
                <div className="ActionCenter col-12">
                <Link to="/add-accomodation"><ButtonAction name="Ajouter un hébergement" class="Action" /></Link>
                </div>
                <div className="ActionBloc container">
                    <h3>Liste des hébergements du festival</h3>
                    <Link to="/add-festival"><ButtonReturn /></Link>
                </div>
                {
                    this.state.skeleton ? <AccomodationSkeleton/> : 
                    <section id="list" className="container ContainerBody">
                    {this.state.accomodations.map((accomodation, index) =>
                    <AccomodationItem
                        key={index}
                        idaccomodation={accomodation.idaccomodation}
                        namePackage={accomodation.namePackage}
                        nameAccomodation={accomodation.nameAccomodation}
                        passPrice={accomodation.passPrice}
                        priceByNight={accomodation.priceByNight}
                        price={accomodation.price}
                        date={accomodation.date}
                        hour={accomodation.hour}
                        image1={accomodation.image1}
                        image2={accomodation.image2}
                        image3={accomodation.image3}
                        image4={accomodation.image4}
                        numberPlace={accomodation.numberPlace}
                        km={accomodation.km}
                        placeAvailable={accomodation.placeAvailable}
                        airbnb={accomodation.airbnb}
                    />
                    )}
                </section>
                }
            </div>
        );
    }
    
}

export default AccomodationList;