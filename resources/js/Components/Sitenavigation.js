import React, {Component} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FaBars} from 'react-icons/fa';

class Sitenavigation extends Component {
    constructor(props) {
        super();

        this.state = {
            sidenavClass: "sidenave",
            isSideNavActive: false,
            overlay: ''
        }
        this.sidenavToggle = this.sidenavToggle.bind(this);
    }


    sidenavToggle() {

        if(this.state.isSideNavActive === false) {
            this.setState({sidenavClass: 'sidenave active', isSideNavActive: true, overlay: 'site-overlay'});
        } else{
            this.setState({sidenavClass: 'sidenave', isSideNavActive: false, overlay: ''});
        }
    }


    render() {
        return (

            <>
                <title>{this.props.title}</title>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#" onClick={this.sidenavToggle}><FaBars /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <a href="/logout" className="nav-link text-danger">Logout</a>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
                <div className={ this.state.sidenavClass }>
                    <div className="sidenav-header">Dashboard</div>
                    <div className="sidenav-links">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/about-us" className="nav-link">About us</Link>
                        <Link to="/contact-with-us" className="nav-link">Contact us</Link>
                        <Link to="/our-projects" className="nav-link">Our projects</Link>
                        <Link to="/client-review" className="nav-link">Client Review</Link>
                        <Link to="/our-services" className="nav-link">Our Services</Link>
                    </div>
                </div>
                <div className={this.state.overlay} onClick={this.sidenavToggle}></div>
                { this.props.children }
            </>
        );
    }
}

export default Sitenavigation;
