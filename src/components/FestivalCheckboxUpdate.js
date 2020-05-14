import React from 'react';
import axios from 'axios';

class FestivalCheckbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            festivals: []
        }
    }

    componentDidMount() {
        axios.get('https://api-festit.herokuapp.com/api/festival')
            .then(response => response.data)
            .then(data => {
                this.setState({ festivals: data })
            });
    }

    handleChecked = (idFestival) => {
        const { checked } = this.props;

        let isChecked;
            
        checked.map(item => {
            //console.log("puips", checked)
            //console.log(idFestival, 'idFestival');
            // let isTrue = idFestival === item;
            // console.log(isTrue);

            if(idFestival === item ) {
                console.log("checks envoyé")
                isChecked = true
            } else {
                isChecked = false
            }
            
        })
        return isChecked

    }

    render() {
        const { festivals } = this.state;
        //const { checked } = this.props;
        
        return festivals.map((festival, index) => 
            <div className="CheckBoxCase">
                <input 
                    key={index} 
                    type="checkbox" 
                    ref="check_me" 
                    className="form-check-input" 
                    value={festival.idfestival} 
                    id={festival.name} 
                    name="festivalschecked"
                    checked={this.handleChecked(festival.idfestival)}
                    //defaultChecked={checked.map(item => festival.idfestival === item ? {checked} : "")}
                    //{...checked.map(item => festival.idfestival === item && defaultChecked)}
                />
                <label htmlFor={festival.name} className="form-check-label">{festival.name}</label>
            </div>
        )
    }
}

export default FestivalCheckbox;