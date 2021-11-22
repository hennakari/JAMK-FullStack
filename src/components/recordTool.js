import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';


const Tool = (props) => (
  <tr>
    <td>{props.tool.tool_name}</td>
    <td>{props.tool.tool_hours}</td>
  </tr>
);


// const Tool = (props) => (
//   <div>
//     <div>{props.tool.tool_name}:{props.tool.tool_hours}</div>
//   </div>
// );


export default class RecordTool extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    this.state = { tools: [] };
  }

  // This method will get the data from the database.
  componentDidMount() {
    axios
      .get("http://localhost:5000/tool/")
      .then((response) => {
        this.setState({ tools: response.data });
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  recordTool() {
    return this.state.tools.map((currenttool) => {
      return (
        <Tool
          tool={currenttool}
          key={currenttool._id}
        />
      );
    });
  }


  render() {
    // let myArray = this.recordTool();
    return (
        <div>
          <table id="tapahtumat" className="table table-striped">
            <thead>
              <tr>
                <th>Nimi</th>
                <th>Tunnit</th>
              </tr>
            </thead>
          <tbody>{this.recordTool()}</tbody>
          </table>
      </div>
    );
  }
}

// random text every few seconds --> toimisko tää kommenttien kanssa??
// https://www.youtube.com/watch?v=2y5hiqI4nfI