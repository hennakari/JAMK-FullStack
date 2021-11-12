import React, { Component } from 'react';
import GridLayout from 'react-grid-layout';
// import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import Chart from "./chart";
import RecordItem from "./recordItem";

class MyFirstGrid extends Component {
    render() {
      // layout is an array of objects, see the demo for more complete usage
      const layout = [
        {i: 'a', x: 0, y: 0, w: 12, h: 1, static: true},//otsikko
        {i: 'b', x: 0, y: 1, w: 3, h: 2.5, static: true},//päivät jaksolla viisari
        {i: 'c', x: 3, y: 1, w: 3, h: 2.5, static: true},//tunnit numero
        {i: 'd', x: 6, y: 1, w: 3, h: 2.5, static: true},//oma fiilis KA viisari
        {i: 'e', x: 9, y: 1, w: 3, h: 2.5, static: true},//teksti
        {i: 'f', x: 0, y: 3.5, w: 8, h: 3.5, static: true},//tunnit ja fiilis column
        {i: 'g', x: 8, y: 3.5, w: 4, h: 3.5, static: true},//kategoriat donitsi
        {i: 'h', x: 0, y: 7, w: 4, h: 3.5, static: true},//työkalut donitsi
        {i: 'i', x: 4, y: 7, w: 8, h: 3.5, static: true},//ajankäyttö kategorioittain, häkkyrä
        {i: 'j', x: 0, y: 10.5, w: 6, h: 4.5, static: true}, //heatmap
        {i: 'k', x: 6, y: 10.5, w: 6, h: 4.5, static: true} // tekstipilvi
      ];
      return (
        <div className="content-dashboard">
            {/* <ResponsiveGridLayout className="layout" layouts={layout}
            breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
            cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}> */}
        <GridLayout className="layout" layout={layout} cols={12} rowHeight={100} width={1250}>
          <div className="ruutu-otsikko" key="a">
            <h1>Työssäoppimisjaksolla menee näin:</h1>
          </div>
          <div className="ruutu" key="b">
            <Chart height={'250px'} width={'300px'} chartId={'cd7c426b-2a93-45ce-8870-caf210098ebe'}/>
          </div>
          <div className="ruutu" key="c">
          <Chart height={'250px'} width={'300px'} chartId={'e2aa4cfa-d6ff-4bb7-9107-f02a1fa5d66a'}/>
          </div>
          <div className="ruutu" key="d">
            <Chart height={'250px'} width={'300px'} chartId={'8392c116-f2a2-4b70-830d-0b4a89b15f8c'}/>
          </div>
          <div className="ruutu" key="e">
              <RecordItem />
          </div>
          <div className="ruutu" key="f">
            <Chart height={'350px'} width={'800px'} chartId={'1b15e847-bdb6-4139-a1e7-938c714c4a87'}/>
          </div>
          <div className="ruutu" key="g">
            <Chart height={'350px'} width={'400px'} chartId={'75ddbab3-a823-4b0d-8946-c265ea2c6d7b'}/>
          </div>
          <div className="ruutu" key="h">
            <Chart height={'350px'} width={'400px'} chartId={'41268173-ee6c-4a73-875d-173cf002cf21'}/>
          </div>
          <div className="ruutu" key="i">
            <Chart height={'350px'} width={'800px'} chartId={'a03eb9ee-f79b-4547-b7eb-64558a87b7c6'}/>
          </div>
          <div className="ruutu" key="j">
            <Chart height={'450px'} width={'600px'} chartId={'8f9f9ec6-cc89-44a5-ae4f-6c5534f65b1c'}/>
          </div>
          <div className="ruutu" key="k">
            <Chart height={'450px'} width={'600px'} chartId={'0bb41bab-cb61-4900-a341-6bf0f0747638'}/>
          </div>
        </GridLayout>
        {/* </ResponsiveGridLayout> */}
        </div>
      )
    }
  };

  export default MyFirstGrid;