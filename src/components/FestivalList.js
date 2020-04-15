import React from 'react';
import '../style.css';
import FestivalItem from './FestivalItem';
import ButtonAddFest from './ButtonAddFest';
import axios from 'axios';


class FestivalList extends React.Component {
    state = {
        festival: []
    }
    componentDidMount() {
        axios.get('https://api-festival.herokuapp.com/api/festival')
        .then(response => response.data)
        .then(data => {
            this.setState({ festival: data })
        })
    }
    
    render() {
        return (
            <div>
                <div className="CenteredItem">
                <ButtonAddFest />
                </div>
                <div id="list" className="container ContainerBody">
                    {this.state.festival.map((item, index) =>
                    <FestivalItem
                        key={index}
                        idfestival={item.idfestival}
                        name={item.name}
                        description={item.description}
                        datetime={item.datetime}
                        city={item.city}
                        country={item.country}
                    />
                    )}
                </div>
            </div>
        );
    }
    
}

export default FestivalList;