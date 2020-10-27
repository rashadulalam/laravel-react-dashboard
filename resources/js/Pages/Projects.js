import React, {Component} from 'react';
import {Button, Col, Container, Jumbotron, Modal, Row, Form} from "react-bootstrap";
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
            modalShow: false,
            addTitle: '',
            addDes: '',
            addFile: '',
        }
        this.deleteRowData = this.deleteRowData.bind(this);
        this.imageColumn = this.imageColumn.bind(this);
        this.modalHandleClose = this.modalHandleClose.bind(this);
        this.modalHandleOpen = this.modalHandleOpen.bind(this);
        this.titleOnChange = this.titleOnChange.bind(this);
        this.descriptionOnChange = this.descriptionOnChange.bind(this);
        this.fileOnChange = this.fileOnChange.bind(this);
        this.formSubmitData = this.formSubmitData.bind(this);
    }
    modalHandleClose() {
        this.setState({modalShow:false})
    }
    modalHandleOpen() {
        this.setState({modalShow:true})
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


    // form data pull
    titleOnChange( event ) {
        this.setState({addTitle: event.target.value});

    }

    descriptionOnChange( event ) {
        this.setState({addDes: event.target.value});
    }

    fileOnChange( event ) {
        this.setState({addFile:event.target.files[0]});
    }

    formSubmitData(){
        // alert(this.state.addTitle + this.state.addDes + this.state.addFile);

        let url = '/add-project';
        let formData = new FormData();
        formData.append('title', this.state.addTitle);
        formData.append('description', this.state.addDes);
        formData.append('photo', this.state.addFile);

        let config = {
            headers: {'content-type': 'multipart/form-data'}
        }
        Axios.post(url, formData, config)
            .then((response => {
                if(response.data == 1){

                    this.modalHandleClose();
                    this.componentDidMount();

                }
            }))
            .catch(error => {
                alert(error);
            })
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
                    text: 'Image',
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
                                    <Button varient="primary" className="my-3 ml-3" onClick={this.modalHandleOpen}>Add new</Button>
                                    <BootstrapTable keyField='id' data={contactList} columns={column} selectRow={selectRow}  pagination={ paginationFactory() } />
                                </Col>
                            </Row>
                        </Container>
                    </Sitenavigation>

                    <Modal show={this.state.modalShow} onHide={this.modalHandleClose} className="fade">
                        <Modal.Header closeButton>
                            <Modal.Title>Add new project</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Project name</Form.Label>
                                    <Form.Control type="text" onChange={this.titleOnChange} placeholder="Project name" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Project details</Form.Label>
                                    <Form.Control as="textarea" onChange={this.descriptionOnChange} rows={3} />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.File id="exampleFormControlFile1" onChange={this.fileOnChange} label="Project image" />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.modalHandleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={this.formSubmitData}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>



                </>
            );
        }
    }
}

export default Projects;
