import React from 'react';
import '../style.css';
import FestivalItem from './FestivalItem';
import ButtonAction from './Buttons/ButtonAction';
import { Link } from 'react-router-dom';
import FestivalSkeleton from './Skeletons/FestivalSkeleton';
import ReactPlaceholder from 'react-placeholder';
import axios from 'axios';


class FestivalList extends React.Component {
    state = {
        festival: [],
        skeleton: true
    }
    componentDidMount() {
        axios.get('https://api-festival.herokuapp.com/api/festival')
        .then(response => response.data)
        .then(data => {
            this.setState({ 
                festival: data,
                skeleton: false
            })
        })
    }
    
    render() {
        return (
            <div>
                <div className="ActionCenter col-12">
                <Link to="/add-festival"><ButtonAction name="Ajouter un festival" class="Action"/></Link>
                </div>
                {
                    this.state.skeleton ? <FestivalSkeleton /> :
                        <section id="list" className="container ContainerBody">
                        {this.state.festival.map((item, index) =>
                        <FestivalItem
                            key={index}
                            idfestival={item.idfestival}
                            name={item.name}
                            description={item.description}
                            startDate={item.startDate}
                            endDate={item.endDate}
                            city={item.city}
                            country={item.country}
                        />
                        )}
                    </section>
                }
                    
                
            </div>
        );
    }
    
}

export default FestivalList;