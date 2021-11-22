import React, { Component } from "react";
import axios from 'axios';
import "../form.css"

  

export default class Addtool extends Component {
  // Constructor stores the data.
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
    };
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
 
    // When post request is sent to the create url, axios will add a new record(newtool) to the database.
    const newtool = {
      tool_name: this.state.tool_name,
      tool_hours: this.state.tool_hours,
      tool_date: this.state.tool_date,
    };
 
    axios
      .post("http://localhost:5000/tool/add", newtool)
      .then((res) => console.log(res.data));

 
    // We will empty the state after posting the data to the database
    this.setState({
      tool_name: "",
      tool_hours: "",
      tool_date: "",
    });
  }
 
  // This following section will display the form that takes the input from the user.
  
  render() {
    return (
      <div className="content">
      <div className="form-box">
        <h3 className="form-step">Tallenna työkalun käyttö</h3>
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
              value="Lisää työkalu"
              className="nextBtn">Lisää työkalu
            </button>
        </form>
      </div>
      </div>
    );
  }
}