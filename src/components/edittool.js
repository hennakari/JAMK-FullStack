import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { withRouter } from "react-router";
import "../form.css"
 
class EditTool extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);
 
    this.onChangeToolName = this.onChangeToolName.bind(this);
    this.onChangeToolHours = this.onChangeToolHours.bind(this);
    this.onChangeToolDate = this.onChangeToolDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
      tool_name: "",
      tool_hours: "",
      tool_date: "",
      tools: [],
    };
  }
  // This will get the record based on the id from the database.
  componentDidMount() {
    axios
      .get("http://localhost:5000/tool/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          tool_name: response.data.tool_name,
          tool_hours: response.data.tool_hours,
          tool_date: response.data.tool_date,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 
  // These methods will update the state properties.
  onChangeToolName(e) {
    this.setState({
      tool_name: e.target.value,
    });
  }
 
  onChangeToolHours(e) {
    this.setState({
      tool_hours: e.target.value,
    });
  }
 
  onChangeToolDate(e) {
    this.setState({
      tool_date: e.target.value,
    });
  }
 
  // This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();
    const newEditedtool = {
      tool_name: this.state.tool_name,
      tool_hours: this.state.tool_hours,
      tool_date: this.state.tool_date,
    };
    console.log(newEditedtool);
 
    // This will send a post request to update the data in the database.
    axios
      .post(
        "http://localhost:5000/update/tool/" + this.props.match.params.id,
        newEditedtool
      )
      .then((res) => console.log(res.data));
 
    this.props.history.push("/tools");
  }
 
  // This following section will display the update-form that takes the input from the user to update the data.
  render() {
    return (
      <div className="content">
      <div className="form-box">
        <h3 className="form-step">Päivitä työkalun käyttö</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            
            <label>Päivämäärä: </label>
            <input
              type="text"
              className="form-input"
              value={this.state.tool_date}
              onChange={this.onChangeToolDate}
            />
            
            <label>Työkalun nimi: </label>
            <input
              type="text"
              className="form-input"
              value={this.state.tool_name}
              onChange={this.onChangeToolName}
            />

            <label>Käyttötunnit: </label>
            <input
              type="text"
              className="form-input"
              value={this.state.tool_hours}
              onChange={this.onChangeToolHours}
            />

          </div>

            <button
              type="submit"
              value="Päivitä"
              className="nextBtn">Päivitä muutokset
            </button>

        </form>
      </div>
      </div>
    );
  }
}
 
// You can get access to the history object's properties and the closest <Route>'s match via the withRouter
// higher-order component. This makes it easier for us to edit our records.
 
export default withRouter(EditTool);