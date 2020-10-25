import React, {Component} from 'react';
import {Col, Container, Jumbotron, Row} from "react-bootstrap";
import Sitenavigation from "../Components/Sitenavigation";
import {Link} from "react-router-dom";

class Logout extends Component {
    render() {
        return (
            <>
                <Sitenavigation title="Logout">
                    <Jumbotron>
                        <Container fluid>
                            <Row>
                                <Col lg="12" className="text-center">
                                    <h1>Logout Successfull!</h1>
                                    <Link to="/" className="btn btn-success">Sign in</Link>

                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                </Sitenavigation>
            </>
        );
    }
}

export default Logout;
