import React, { Component } from "react";
import axios from 'axios';
import { withRouter } from "react-router";
import "../css/form.css";
 
class EditTool extends Component {
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
 
  onSubmit(e) {
    e.preventDefault();
    const newEditedtool = {
      tool_name: this.state.tool_name,
      tool_hours: this.state.tool_hours,
      tool_date: this.state.tool_date,
    };
    console.log(newEditedtool);

    axios
      .post(
        "http://localhost:5000/update/tool/" + this.props.match.params.id,
        newEditedtool
      )
      .then((res) => console.log(res.data));
 
    this.props.history.push("/toolList");
  }

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
              className="nextBtn">Tallenna muutokset
            </button>

        </form>
      </div>
      </div>
    );
  }
}
 
export default withRouter(EditTool);