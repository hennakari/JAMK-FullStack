
import Chart from "./chart";
import 'react-grid-layout/css/styles.css'; 
import 'react-resizable/css/styles.css';



const Dashboard = () => {

  return <div className="App">
    <div className="chart-container">
      <h1 className="title">Hennan Harkka-Dashboard</h1>
      <div className="charts">
        <Chart className="chart-d" height={'250px'} width={'300px'} chartId={'cd7c426b-2a93-45ce-8870-caf210098ebe'}/>
        <Chart className="chart-d" height={'250px'} width={'300px'} chartId={'e2aa4cfa-d6ff-4bb7-9107-f02a1fa5d66a'}/>
        <Chart className="chart-d" height={'250px'} width={'300px'} chartId={'8392c116-f2a2-4b70-830d-0b4a89b15f8c'}/>
        <div className="chart-d" height={'250px'} width={'300px'}>Jotain kommentteja..</div>
        <Chart className="chart-d" height={'350px'} width={'800px'} chartId={'1b15e847-bdb6-4139-a1e7-938c714c4a87'}/>
        <Chart className="chart-d" height={'350px'} width={'400px'} chartId={'75ddbab3-a823-4b0d-8946-c265ea2c6d7b'}/>
        <Chart className="chart-d" height={'350px'} width={'400px'} chartId={'41268173-ee6c-4a73-875d-173cf002cf21'}/>
        <Chart className="chart-d" height={'350px'} width={'800px'} chartId={'a03eb9ee-f79b-4547-b7eb-64558a87b7c6'}/>
        <Chart className="chart-d" height={'450px'} width={'600px'} chartId={'8f9f9ec6-cc89-44a5-ae4f-6c5534f65b1c'}/>
        <Chart className="chart-d" height={'450px'} width={'600px'} chartId={'0bb41bab-cb61-4900-a341-6bf0f0747638'}/>
      </div>
      </div>
  </div>
};

export default Dashboard;