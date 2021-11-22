import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { Link } from "react-router-dom";

import "../report.css"

const Record = (props) => (
  <tr>
    <td>{props.record.diary_dow}</td>
    <td>{props.record.diary_date}</td>
    <td>{props.record.diary_hours}</td>
    <td>{props.record.diary_cat}</td>
    <td>{props.record.diary_task}</td>
    <td>{props.record.diary_feedback}</td>
    <td>{props.record.diary_feel}</td>
    <td>{props.record.diary_note}</td>
    <td>
      <Link to={"/edit/" + props.record._id}>Edit</Link> |
      <a
        href="/"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);


export default class RecordList extends Component {
  // Constructor stores the data retrieved from the database
  constructor(props) {
    super(props);
    this.deleteRecord = this.deleteRecord.bind(this);
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

  // This method will delete a record based on the method
  deleteRecord(id) {
    axios.delete("http://localhost:5000/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      record: this.state.records.filter((el) => el._id !== id),
    });
  }


  // This method will map out the records on the table
  recordList() {
    return this.state.records.map((currentrecord) => {
      return (
        <Record
          record={currentrecord}
          deleteRecord={this.deleteRecord}
          key={currentrecord._id}
        />
      );
    });
  }


  // This following section will display the table with the records of individuals.
  render() {
    return (
      <div>
        
        <table id="tapahtumat" className="table table-striped">
          <thead>
            <tr>
              <th>Viikonpäivä</th>
              <th>Päivämäärä</th>
              <th>Tunnit</th>
              <th>Kategoria</th>
              <th>Työtehtävät</th>
              <th>Palaute</th>
              <th>Oma fiilis</th>
              <th>Kommentit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.recordList()}</tbody>
        </table>
      </div>
    );
  }
}

