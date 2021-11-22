import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Tool = (props) => (
  <tr>
    <td>{props.record.tool_name}</td>
    <td>{props.record.tool_hours}</td>
    <td>{props.record.tool_date}</td>
    <td>
      <Link to={"/edittool/" + props.record._id}>Edit</Link> |
      <a
        href="/tools"
        onClick={() => {
          props.deleteTool(props.record._id);
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);

export default class toolList extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    this.deleteTool = this.deleteTool.bind(this);
    this.state = { tools: [] };
  }

  // This method will get the data from the database.
  componentDidMount() {
    axios
      .get("http://localhost:5000/tool/")
      .then((response) => {
        this.setState({ tools: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // This method will delete a user based on the method
  deleteTool(id) {
    axios.delete("http://localhost:5000/tool/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      record: this.state.tools.filter((el) => el._id !== id),
    });
  }

  // This method will map out the users on the table
  toolList() {
    return this.state.tools.map((currenttool) => {
      return (
        <Tool
          record={currenttool}
          deleteTool={this.deleteTool}
          key={currenttool._id}
        />
      );
    });
  }

  // This following section will display the table with the users of individuals.
  render() {
    return (
      <div>
        <table id="tyokalut" className="table table-striped">
          <thead>
            <tr>
              <th>Työkalun nimi</th>
              <th>Käytetty aika</th>
              <th>Päivämäärä</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.toolList()}</tbody>
        </table>
      </div>
    );
  }
}