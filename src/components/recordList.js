import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

import "../css/report.css"

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
        href="/recordList"
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
  constructor(props) {
    super(props);
    this.deleteRecord = this.deleteRecord.bind(this);
    this.state = { records: [] };
  }

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

  deleteRecord(id) {
    axios.delete("http://localhost:5000/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      record: this.state.records.filter((el) => el._id !== id),
    });
  }


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

