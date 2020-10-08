import React, {Component} from 'react';
import {Col, Container, Jumbotron, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Sitenavigation from "../Components/Sitenavigation";

class Home extends Component {
    render() {
        return (
            <>
                <Sitenavigation>
                    <Jumbotron>
                        <Container fluid>
                            <Row>
                                <Col lg="12" className="text-center">
                                    <h1>Welcome to Dashboard!</h1>
                                    <Link to="/logout" className="btn btn-danger">Logout</Link>
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                </Sitenavigation>
            </>
        );
    }
}

export default Home;
