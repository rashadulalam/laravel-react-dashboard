import React, {Component} from 'react';
import {Button, Col, Container, Jumbotron, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Sitenavigation from "../Components/Sitenavigation";
import Axios from "axios";
import BootstrapTable from 'react-bootstrap-table-next';
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import paginationFactory from 'react-bootstrap-table2-paginator';


class Services extends Component {

    constructor() {
        super();
        this.state = {
            dataList: [],
            isLoading: true,
            isError: false,
            delRowId: '',
        }
        this.deleteRowData = this.deleteRowData.bind(this);
        this.cellFormating = this.cellFormating.bind(this);
    }

    componentDidMount() {
        Axios.get('/services').then((response) => {

            if (response.status == 200) {
                this.setState({dataList: response.data, isLoading: false, isError: false});
            } else {
                this.setState({isLoading: false, isError: true});
            }
        }).catch((e) => {
            this.setState({isLoading: false, isError: true});
        })

    }

    deleteRowData() {
        if(this.state.delRowId == '') {
            alert('Please select an item!')
        } else {
            var cnf = confirm('Do you want to delete this item?')

            if(cnf == true) {
                Axios.post('/services-delete', {id: this.state.delRowId})
                    .then((response) => {
                        this.componentDidMount();
                    }).catch((e) => {
                    console.log(e);
                })
            }
        }

    }

    cellFormating(cell, row) {
        return (
            <img src={cell} className="w-25"/>
        )
    }

    render() {

        if(this.state.isLoading == true) {
            return (
                <Sitenavigation>
                    <Loading />
                </Sitenavigation>
            )
        } else if(this.state.isError == true) {
            return (
                <Sitenavigation>
                    <Error />
                </Sitenavigation>
            )
        } else {
            const column = [
                {
                    dataField: 'id',
                    text: 'ID'
                },
                {
                    dataField: 'name',
                    text: 'Service name'
                },
                {
                    dataField: 'description',
                    text: 'Details'
                },
                {
                    dataField: 'image',
                    text: 'Media', formatter: this.cellFormating
                },

            ]

            const contactList = this.state.dataList;

            const selectRow = {
                mode: 'radio',
                onSelect: (row, isSelect, rowIndex, e) => {
                    this.setState({delRowId: row.id});

                }

            };




            return (
                <>
                    <Sitenavigation title="Services">
                        <Jumbotron>
                            <Container fluid>
                                <Row>
                                    <Col lg="12" className="text-center">
                                        <h1>Services</h1>
                                    </Col>
                                </Row>
                            </Container>
                        </Jumbotron>
                        <Container>
                            <Row>
                                <Col md="12">
                                    <Button className="my-3 btn-danger" onClick={this.deleteRowData}>Delete</Button>
                                    <BootstrapTable keyField='id' data={contactList} columns={column} selectRow={selectRow}  pagination={ paginationFactory() } />
                                </Col>
                            </Row>
                        </Container>
                    </Sitenavigation>
                </>
            );
        }
    }
}

export default Services;
