import React, { Component } from "react";
import { Container, Row, Col } from 'react-grid-system';
import Chart from "./chart";

class Demo extends Component {
     render() {
         return (
            <Container fluid className="demokontti">
            <Row justify="center">
                <Col sm={12}>
                    <h1>Työssäoppimisjaksolla menee näin:</h1>
                </Col>
            </Row>
            <Row justify="center">
                <Col sm={3}>
                    <Chart height={'250px'} width={'300px'} chartId={'cd7c426b-2a93-45ce-8870-caf210098ebe'}/>
                </Col>
                <Col sm={3}>
                    <Chart height={'250px'} width={'300px'} chartId={'e2aa4cfa-d6ff-4bb7-9107-f02a1fa5d66a'}/>
                </Col>
                <Col sm={3}>
                    <Chart height={'250px'} width={'300px'} chartId={'8392c116-f2a2-4b70-830d-0b4a89b15f8c'}/>
                </Col>
                <Col sm={3}>
                    <Chart height={'250px'} width={'300px'} chartId={'8392c116-f2a2-4b70-830d-0b4a89b15f8c'}/>
                </Col>
            </Row>
            <Row justify="center">
                <Col sm={8}>
                    <Chart height={'350px'} width={'800px'} chartId={'1b15e847-bdb6-4139-a1e7-938c714c4a87'}/>
                </Col>
                <Col sm={4}>
                    <Chart height={'350px'} width={'400px'} chartId={'75ddbab3-a823-4b0d-8946-c265ea2c6d7b'}/>
                </Col>
            </Row>
            </Container>
         );
    };
};

export default Demo;