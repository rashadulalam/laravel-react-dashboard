import React, {Component} from 'react';
import {Card, Col, Container, Jumbotron, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Sitenavigation from "../Components/Sitenavigation";
import Axios from "axios";
import Loading from "../Components/Loading";
import Error from "../Components/Error";

class Home extends Component {

    constructor() {
        super();

        this.state = {
            dataList : '',
            isLoading: true,
            isError: false
        }
    }
    componentDidMount() {
        Axios.get('/summary')
            .then((response) => {
                if( response.status == 200) {
                    this.setState({dataList: response.data, isLoading: false, isError: false});
                }else {
                    this.setState({isError: true, isLoading: false});
                }
            })
            .catch((error) => {
                this.setState({isError: true, isLoading: false});
            })
    }

    render() {
        if(this.state.isLoading == true) {
            return(
                <Sitenavigation>
                    <Loading />
                </Sitenavigation>
            )
        } else if(this.state.isError == true) {
            return(
                <Sitenavigation>
                    <Error />
                </Sitenavigation>
            )
        } else {
            return (
                <>
                    <Sitenavigation title="Welcome">
                        <Jumbotron>
                            <Container fluid>
                                <Row>
                                    <Col lg="12" className="text-center">
                                        <h1>Welcome to Dashboard!</h1>
                                    </Col>
                                </Row>
                                {/*    Summary */}
                                <Row className="mt-5 justify-content-center">
                                    <Col md={3} className="p-2">
                                        <Card>
                                            <Card.Body>
                                            <Link className="btn-link" to="/contact-with-us">
                                                <h1>{this.state.dataList.contacts}</h1>
                                                <h4 className="text-uppercase">Contact request</h4>
                                            </Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={3} className="p-2">
                                        <Card>
                                            <Card.Body>
                                                <Link className="btn-link" to="/our-projects">
                                                <h1>{this.state.dataList.projects}</h1>
                                                <h4 className="text-uppercase">Projects</h4>
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={3} className="p-2">
                                        <Card>
                                            <Card.Body>
                                                <Link className="btn-link" to="/our-services">
                                                <h1>{this.state.dataList.services}</h1>
                                                <h4 className="text-uppercase">Services</h4>
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>


                                </Row>
                            </Container>
                        </Jumbotron>
                    </Sitenavigation>
                </>
            );
        }
    }
}

export default Home;
