import React from 'react';
import '../style.css';
import FestivalItem from './FestivalItem';
import axios from 'axios';


class FestivalList extends React.Component {
    componentDidMount() {
        axios.get('https://api-festival.herokuapp.com/api/festival')
        // Extract the DATA from the received response
        .then(response => response.data)
        // Use this data to update the state

        .then(data => {
            this.setState({ festival: data })
        })
        console.log(this.festival, 'contenu festival');
    }
    
    render() {
        return (
            <div id="list" className="">
                {/* {this.festival.map((item, index) =>
                <FestivalItem
                    key={index}
                    idfestival={item.idfestival}
                    name={item.name}
                    description={item.description}
                    datetime={item.datetime}
                    city={item.city}
                    country={item.country}
                />
                )} */}
            </div>
        );
    }
    
}

export default FestivalList;