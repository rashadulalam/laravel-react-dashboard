import React from 'react';
import ReactDom from 'react-dom';
import Main from "./Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

ReactDom.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>,
document.getElementById('root')
);
