import Axios from 'axios';
import React, {Component} from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import Loading from '../Components/Loading';
import Sitenavigation from '../Components/Sitenavigation';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

class Review extends Component {

    constructor() {
        super()
        this.state = {
            datalist: [],
            isLoading: true,
            isError: false,
            delRow: ''
        }
    }

    
    componentDidMount() {
        const data =  Axios.get('/reviews')
        .then((response) => {
            if(response.status == 200) {
                this.setState({dataList:response.data, isLoading:false, isError:false});


            
            } else {
                this.setState({isLoading:false, isError:true});
            }
        }).catch((error) => {
            this.setState({isLoading: false, isError: true});
        })
    } 

    render() {
        
        if(this.state.isLoading == true){
            return (
                <>
                    <Sitenavigation>
                        <Loading />
                    </Sitenavigation>
                </>
            )
        }else if(this.state.isError == true) {
            return (
                <>
                    <Sitenavigation>
                        <Error/>
                    </Sitenavigation>
                </>
            )
        }else {

            const column = [
                {
                    dataField: 'id',
                    text: 'ID'
                },
                {
                    dataField: 'title',
                    text: 'Client Name'
                },
                {
                    dataField: 'description',
                    text: 'Review'
                },
                {
                    dataField: 'image',
                    text: 'Avater'
                }
            ]
            const mydata = this.state.datalist;
            return (
                <>
                    <Sitenavigation>
                        <Jumbotron>
                            <Container>
                                <Row>
                                    <Col lg="12">
                                        <h1>Client Reviews</h1>
                                    </Col>
                                </Row>
                            </Container>
                        </Jumbotron>

                        <Container>
                            <Row>
                                <Col md="12">
                                    <BootstrapTable keyField="id" data={mydata} columns={column} pagination={paginationFactory() }/>
                                </Col>
                            </Row>
                        </Container>

                    </Sitenavigation>
                </>
            );
        }

        
    }
}

export default Review;
