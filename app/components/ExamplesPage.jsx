import React from 'react';
import {Link} from "react-router-dom";

export default function ExamplesPage() {
    return (
        <div>
            <h3>Examples</h3>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to='/?location=Riga'>Riga, Latvia</Link>
                </li>
                <li>
                    <Link to='/?location=Magadan'>Magadan, Russia</Link>
                </li>
                <li>
                    <Link to='/?location=Cape Town'>Cape Town, South Africa</Link>
                </li>
            </ol>
        </div>
    )
}
