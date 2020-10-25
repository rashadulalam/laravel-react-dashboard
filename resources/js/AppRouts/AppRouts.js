import React, {Component} from 'react';
import Home from "../Pages/Home";
import {Switch, Route} from "react-router-dom";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Projects from "../Pages/Projects";
import Services from "../Pages/Services";
import Logout from "../Pages/Logout";
import Review from "../Pages/Review";

class AppRouts extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about-us" component={About} />
                    <Route exact path="/contact-with-us" component={Contacts} />
                    <Route exact path="/our-projects" component={Projects} />
                    <Route exact path="/our-services" component={Services} />
                    <Route exact path="/client-review" component={Review} />
                    <Route exact path="/logout" component={Logout} />
                </Switch>
            </>
        );
    }
}

export default AppRouts;
