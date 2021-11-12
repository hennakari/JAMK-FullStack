import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import RandomStrings from "./random";

const Day = (props) => (
  <div>{props.record.diary_dow}</div>
);
const Date = (props) => (
  <div>{props.record.diary_date}</div>
);
const Hours = (props) => (
  <div>{props.record.diary_hours}</div>
);
const Cat = (props) => (
  <div>{props.record.diary_cat}</div>
);
const Task = (props) => (
  <div>{props.record.diary_task}</div>
);
// const Tutor = (props) => (
//   <div>{props.record.diary_tutor}</div>
// );
// const Feedback = (props) => (
//   <div>{props.record.diary_feedback}</div>
// );
// const Feel = (props) => (
//   <div>{props.record.diary_feel}</div>
// );
const Note = (props) => (
  <div>{props.record.diary_note}</div>
);


export default class RecordItem extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    this.state = { records: [] };
  }

  // This method will get the data from the database.
  componentDidMount() {
    axios
      .get("http://localhost:5000/record/")
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // recordDay() {
  //   return this.state.records.map((currentrecord) => {
  //     return (
  //       <Day
  //         record={currentrecord}
  //         key={currentrecord._id}
  //       />
  //     );
  //   });
  // }
  // recordDate() {
  //   return this.state.records.map((currentrecord) => {
  //     return (
  //       <Date
  //         record={currentrecord}
  //         key={currentrecord._id}
  //       />
  //     );
  //   });
  // }
  // recordHours() {
  //   return this.state.records.map((currentrecord) => {
  //     return (
  //       <Hours
  //         record={currentrecord}
  //         key={currentrecord._id}
  //       />
  //     );
  //   });
  // }
  // recordCat() {
  //   return this.state.records.map((currentrecord) => {
  //     return (
  //       <Cat
  //         record={currentrecord}
  //         key={currentrecord._id}
  //       />
  //     );
  //   });
  // }
  // recordTask() {
  //   return this.state.records.map((currentrecord) => {
  //     return (
  //       <Task
  //         record={currentrecord}
  //         key={currentrecord._id}
  //       />
  //     );
  //   });
  // }
  // recordTutor() {
  //   return this.state.records.map((currentrecord) => {
  //     return (
  //       <Tutor
  //         record={currentrecord}
  //         key={currentrecord._id}
  //       />
  //     );
  //   });
  // }
  // recordFeedback() {
  //   return this.state.records.map((currentrecord) => {
  //     return (
  //       <Feedback
  //         record={currentrecord}
  //         key={currentrecord._id}
  //       />
  //     );
  //   });
  // }
  // recordFeel() {
  //   return this.state.records.map((currentrecord) => {
  //     return (
  //       <Feel
  //         record={currentrecord}
  //         key={currentrecord._id}
  //       />
  //     );
  //   });
  // }
  recordNote() {
    return this.state.records.map((currentrecord) => {
      return (
        <Note
          record={currentrecord}
          key={currentrecord._id}
        />
      );
    });
  }

  


  // This following section will display the table with the records of individuals.

  render() {
    let myArray = this.recordNote();
    console.log(myArray);
    return (
      <div>
        <h4><RandomStrings muuttuja={myArray} /></h4>
      </div>
    );
  }
}

// random text every few seconds --> toimisko tää kommenttien kanssa??
// https://www.youtube.com/watch?v=2y5hiqI4nfI