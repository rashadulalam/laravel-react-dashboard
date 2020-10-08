import React, {Component} from 'react';
import {Col, Container, Jumbotron, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Sitenavigation from "../Components/Sitenavigation";

class Projects extends Component {
    render() {
        return (
            <>
                <Sitenavigation>
                    <Jumbotron>
                        <Container fluid>
                            <Row>
                                <Col lg="12" className="text-center">
                                    <h1>Our Projects</h1>
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                </Sitenavigation>
            </>
        );
    }
}

export default Projects;
