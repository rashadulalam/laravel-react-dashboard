import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouts from "./AppRouts/AppRouts";



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
