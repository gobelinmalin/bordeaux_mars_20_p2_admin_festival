import React from "react";
import axios from "axios";

class FestivalCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      festivals: []
    };
  }

  componentDidMount() {
    axios.get("https://api-festit.herokuapp.com/api/festival").then((response) => response.data).then((data) => {
      this.setState({ festivals: data });
    });
  }

  handleChecked = (idFestival) => {
    const arrayValidChecked = this.props.checkedArray.map((item) => item.idfestival);
    if (arrayValidChecked.includes(idFestival)) {
      return true;
    }
    return false;
  };

  render() {
    const { festivals } = this.state;

    return festivals.map((festival, index) => {
      return (
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
          />
          <label htmlFor={festival.name} className="form-check-label">
            {festival.name}
          </label>
        </div>
      );
    });
  }
}

export default FestivalCheckbox;
