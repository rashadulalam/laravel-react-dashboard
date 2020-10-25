import React, {Component} from 'react';
import {Button, Col, Container, Jumbotron, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Sitenavigation from "../Components/Sitenavigation";
import Axios from "axios";
import BootstrapTable from 'react-bootstrap-table-next';
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import paginationFactory from 'react-bootstrap-table2-paginator';



class Projects extends Component {

    constructor() {
        super();
        this.state = {
            dataList: [],
            isLoading: true,
            isError: false,
            delRowId: '',
        }
        this.deleteRowData = this.deleteRowData.bind(this);
        this.imageColumn = this.imageColumn.bind(this);
    }

    componentDidMount() {
        Axios.get('/projects').then((response) => {

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
            alert('Please select a row!')
        } else {
            var cnf = confirm('Do you want to delete this item?')

            if(cnf == true) {
                Axios.post('/projects-delete', {id: this.state.delRowId})
                    .then((response) => {
                        this.componentDidMount();
                    }).catch((e) => {
                    console.log(e);
                })
            }
        }

    }

    imageColumn(cell, row) {
        return(
            <img src={cell} className="w-50"/>
        );
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
                    text: 'Project name'
                },
                {
                    dataField: 'details',
                    text: 'Details'
                },
                {
                    dataField: 'image',
                    text: 'Media',
                    formatter: this.imageColumn
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
                    <Sitenavigation title="Projects">
                        <Jumbotron>
                            <Container fluid>
                                <Row>
                                    <Col lg="12" className="text-center">
                                        <h1>Our Projects</h1>
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

export default Projects;
