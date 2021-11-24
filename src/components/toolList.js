import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import "../css/report.css"

const Tool = (props) => (
  <tr>
    <td>{props.record.tool_name}</td>
    <td>{props.record.tool_hours}</td>
    <td>{props.record.tool_date}</td>
    <td>
      <Link to={"/editTool/" + props.record._id}>Edit</Link> |
      <a
        href="/toolList"
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
  constructor(props) {
    super(props);
    this.deleteTool = this.deleteTool.bind(this);
    this.state = { tools: [] };
  }

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

  deleteTool(id) {
    axios.delete("http://localhost:5000/tool/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      record: this.state.tools.filter((el) => el._id !== id),
    });
  }

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