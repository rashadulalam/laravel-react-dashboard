import React, {Component} from 'react';
import Home from "../Pages/Home";
import {Switch, Route} from "react-router-dom";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Projects from "../Pages/Projects";
import Logout from "../Pages/Logout";

class AppRouts extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about-us" component={About} />
                    <Route exact path="/contact-with-us" component={Contacts} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/logout" component={Logout} />
                </Switch>
            </>
        );
    }
}

export default AppRouts;
