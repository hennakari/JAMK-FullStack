import React, { Component } from "react";
import axios from 'axios';
import "../css/form.css";
 
export default class Create extends Component {
 
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
    };
  }
 
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
      diary_hours: (e.target.value),
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
 
  onSubmit(e) {
    e.preventDefault();
 
    const newdiary = {
      diary_dow: this.state.diary_dow,
      diary_date: this.state.diary_date,
      diary_hours: this.state.diary_hours,
      diary_cat: this.state.diary_cat,
      diary_task: this.state.diary_task,
      diary_feedback: this.state.diary_feedback,
      diary_feel: this.state.diary_feel,
      diary_note: this.state.diary_note,
    };
 
    axios
      .post("http://localhost:5000/record/add", newdiary)
      .then((res) => console.log(res.data));

       this.setState({
        diary_dow: "",
        diary_date: "",
        diary_hours: "",
        diary_cat: "",
        diary_task: "",
        diary_feedback: "",
        diary_feel: "",
        diary_note: "",
    });
  }

  render() {
    return (
      <div className="content">
        <div className="form-box">
          <h3 className="form-step">Luo uusi tapahtuma</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group-long">
              <div className="row">
                <div className="column">  
                  <label>Viikonp??iv??: </label>
                  <input
                  type="text"
                  className="form-input"
                  value={this.state.diary_dow}
                  onChange={this.onChangeDiaryDow}
                  /> 
                </div>
                <div className="column"> 
                  <label>P??iv??m????r??: </label>
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
                  <label>Ty??tunnit: </label>
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
                  <label>Ty??teht??v??t: </label>
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
                  value="Tallenna tapahtuma"
                  className="nextBtn"
                >Tallenna tapahtuma</button>
              
          </form>
        </div>
      </div>
    );
  }
}