import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouts from "./AppRouts/AppRouts";
import 'bootstrap/dist/css/bootstrap.min.css';


class Main extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <AppRouts />
                </BrowserRouter>
            </>
        );
    }
}

export default Main;
