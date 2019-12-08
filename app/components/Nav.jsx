import React from 'react';
import {Link} from "react-router-dom";

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <span className="navbar-brand">weather358</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Get Weather</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/examples" className="nav-link">Examples</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
