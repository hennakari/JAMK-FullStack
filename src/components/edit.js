import React, { Component } from "react";
import axios from 'axios';
import { withRouter } from "react-router";
import "../form.css"
 
class Edit extends Component {
  // Constructor stores the data.
  constructor(props) {
    super(props);
 
    this.onChangeDiaryDow = this.onChangeDiaryDow.bind(this);
    this.onChangeDiaryDate = this.onChangeDiaryDate.bind(this);
    this.onChangeDiaryHours = this.onChangeDiaryHours.bind(this);
    this.onChangeDiaryCat = this.onChangeDiaryCat.bind(this);
    this.onChangeDiaryTask = this.onChangeDiaryTask.bind(this);
    this.onChangeDiaryFeedback = this.onChangeDiaryFeedback.bind(this);
    this.onChangeDiaryFeel = this.onChangeDiaryFeel.bind(this);
    this.onChangeDiaryNote = this.onChangeDiaryNote.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
      diary_dow: "",
      diary_date: "",
      diary_hours: "",
      diary_cat: "",
      diary_task: "",
      diary_feedback: "",
      diary_feel: "",
      diary_note: "",
      records: [],
    };
  }
  // This will get the record based on the id from the database.
  componentDidMount() {
    axios
      .get("http://localhost:5000/record/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          diary_dow: response.data.diary_dow,
          diary_date: response.data.diary_date,
          diary_hours: response.data.diary_hours,
          diary_cat: response.data.diary_cat,
          diary_task: response.data.diary_task,
          diary_feedback: response.data.diary_feedback,
          diary_feel: response.data.diary_feel,
          diary_note: response.data.diary_note,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 
  // These methods will update the state properties.
  onChangeDiaryDow(e) {
    this.setState({
      diary_dow: e.target.value,
    });
  }

  onChangeDiaryDate(e) {
    this.setState({
      diary_date: e.target.value,
    });
  }

  onChangeDiaryHours(e) {
    this.setState({
      diary_hours: e.target.value,
    });
  }

  onChangeDiaryCat(e) {
    this.setState({
      diary_cat: e.target.value,
    });
  }

  onChangeDiaryTask(e) {
    this.setState({
      diary_task: e.target.value,
    });
  }

  onChangeDiaryFeedback(e) {
    this.setState({
      diary_feedback: e.target.value,
    });
  }

  onChangeDiaryFeel(e) {
    this.setState({
      diary_feel: e.target.value,
    });
  }

  onChangeDiaryNote(e) {
    this.setState({
      diary_note: e.target.value,
    });
  }
  
 
  // This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();
    const newEditedrecord = {
      diary_dow: this.state.diary_dow,
      diary_date: this.state.diary_date,
      diary_hours: this.state.diary_hours,
      diary_cat: this.state.diary_cat,
      diary_task: this.state.diary_task,
       diary_feedback: this.state.diary_feedback,
      diary_feel: this.state.diary_feel,
      diary_note: this.state.diary_note,
    };
    console.log(newEditedrecord);
 
    // This will send a post request to update the data in the database.
    axios
      .post(
        "http://localhost:5000/update/" + this.props.match.params.id,
        newEditedrecord
      )
      .then((res) => console.log(res.data));
 
    this.props.history.push("/tapahtumat");
  }
 
  // This following section will display the update-form that takes the input from the user to update the data.
  render() {
    return (
      <div className="content">
        <div className="form-box">
          <h3 className="form-step">Luo uusi tapahtuma</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group-long">
              <div className="row">
                <div className="column">  
                  <label>Viikonpäivä: </label>
                  <input
                  type="text"
                  className="form-input"
                  value={this.state.diary_dow}
                  onChange={this.onChangeDiaryDow}
                  /> 
                </div>
                <div className="column"> 
                  <label>Päivämäärä: </label>
                  <input
                  type="text"
                  className="form-input"
                  value={this.state.diary_date}
                  onChange={this.onChangeDiaryDate}
                  /> 
                </div>
              </div>
              <div className="row">
                <div className="column">
                  <label>Työtunnit: </label>
                  <input
                  type="text"
                  className="form-input"
                  value={this.state.diary_hours}
                  onChange={this.onChangeDiaryHours}
                  /> 
                </div>
                <div className="column">
                  <label>Kategoria: </label>
                  <input
                  type="text"
                  className="form-input"
                  value={this.state.diary_cat}
                  onChange={this.onChangeDiaryCat}
                  />
                </div>
              </div>
              <div className="row">
                <div className="column">
                  <label>Työtehtävät: </label>
                  <textarea
                    type="text"
                    className="form-input"
                    value={this.state.diary_task}
                    onChange={this.onChangeDiaryTask}
                  />
                </div>
                <div className="column">
                  <label>Saatu palaute: </label>
                  <textarea
                    type="text"
                    className="form-input"
                    value={this.state.diary_feedback}
                    onChange={this.onChangeDiaryFeedback}
                  /> 
                </div>
              </div>
              <div className="row">
                <div className="column">
                  <label>Oma fiilis: </label>
                  <input
                    type="text"
                    className="form-input"
                    value={this.state.diary_feel}
                    onChange={this.onChangeDiaryFeel}
                  />
                </div>
                <div className="column">
                  <label>Omat kommentit: </label>
                  <textarea
                    type="text"
                    className="form-input"
                    value={this.state.diary_note}
                    onChange={this.onChangeDiaryNote}
                  /> 
                </div>
              </div>
            </div>
              <button
                type="submit"
                value="Pävitä tapahtuma"
                className="nextBtn"
              >Päivitä tapahtuma</button>
            
          </form>
        </div>
      </div>
    );
  }
}
 
export default withRouter(Edit);