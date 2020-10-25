import React, {Component} from 'react';
import {Col, Container, Jumbotron, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Sitenavigation from "../Components/Sitenavigation";

class About extends Component {
    render() {
        return (
            <>
               <Sitenavigation title="About us">
                   <Jumbotron>
                       <Container fluid>
                           <Row>
                               <Col lg="12" className="text-center">
                                   <h1>About us</h1>

                               </Col>
                           </Row>
                           <Row className="justify-content-center">
                               <Col md="7">
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem harum incidunt nam officiis quam veritatis voluptate. Dolor iusto maxime modi porro possimus quo sed similique totam ut. Autem culpa delectus dicta est expedita facilis fuga harum laborum magni minus necessitatibus nesciunt, nisi optio perferendis, quo quod reprehenderit vel vero voluptatum!</p>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut cum deleniti dolore dolorem harum itaque, laboriosam magni minus modi molestiae natus nemo non quaerat quas, quasi quidem quisquam repudiandae, tempora voluptatem. Amet cupiditate debitis eos eum id laboriosam nulla placeat voluptatibus! Iure necessitatibus pariatur quae. Amet architecto assumenda, blanditiis dicta error ex facilis fuga fugiat ipsum iste labore praesentium quod repellat rerum similique soluta veniam, voluptas. Adipisci asperiores blanditiis consectetur consequuntur corporis deleniti dignissimos, dolorem dolores eaque excepturi impedit incidunt itaque maxime provident quam quidem rem rerum unde, voluptas voluptatibus. A amet eaque omnis quasi quia recusandae, ullam vitae.</p>
                               </Col>
                           </Row>
                       </Container>
                   </Jumbotron>
               </Sitenavigation>

            </>
        );
    }
}

export default About;
