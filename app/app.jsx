import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom';
import Nav from 'Nav';
import WeatherPage from "./components/WeatherPage";
import AboutPage from "./components/AboutPage";
import ExamplesPage from "./components/ExamplesPage";

ReactDOM.render(
    <div className="container">
        <Router>
            <Nav/>
            <div className="row justify-content-center">
                <div className="mt-4 col-md-8">
                    <Route exact path="/" component={WeatherPage}/>
                    <Route path="/about" component={AboutPage}/>
                    <Route path="/examples" component={ExamplesPage}/>
                </div>
            </div>
        </Router>
    </div>
    ,
    document.getElementById('app')
);
