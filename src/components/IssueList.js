import React from 'react'
import { BrowserRouter, Link, Router } from 'react-router-dom'

function IssueList() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/issue">Issue</Link>
                    </li>
                </ul>
            </div>
        </Router>
    )
}

function Issue() {
    return (
        <div>
            <h2>Issue</h2>
        </div>
    );
}

export default IssueList

