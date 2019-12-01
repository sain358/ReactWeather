import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom'; // use HashRouter if hashHistory needed, otherwise BrowserRouter
import Main from 'Main';
import Weather from "./components/Weather";
import About from "./components/About";
import Examples from "./components/Examples";

ReactDOM.render(
    <Router>
        <div className="container">
            <Main/>
            <Route exact path="/" component={Weather}/>
            <Route path="/about" component={About}/>
            <Route path="/examples" component={Examples}/>
        </div>
    </Router>,
    document.getElementById('app')
);
