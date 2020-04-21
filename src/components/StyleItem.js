import React from 'react';
import axios from 'axios';

class StyleItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            styles: []
        }
    }

    componentDidMount() {
        axios.get('https://api-festival.herokuapp.com/api/style')
            .then(response => response.data)
            .then(data => {
                this.setState({ styles: data })
            });
    }

    render() {
        const { styles } = this.state;
        return styles.map((style, index) =>
            <option key={index} value={style.idstyle}>{style.name}</option>
            )
    }
}

export default StyleItem;