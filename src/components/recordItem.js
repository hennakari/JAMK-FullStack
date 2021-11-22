import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import RandomStrings from "./random";


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