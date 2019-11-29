import React from 'react';
import {Link} from "react-router-dom";

export default function Nav() {
    return (
        <div>
            <h2>Nav Component</h2>
            <Link to="/">Get Weather</Link><br/>
            <Link to="/about">About</Link><br/>
            <Link to="/examples">Examples</Link><br/>
        </div>
    )
}
