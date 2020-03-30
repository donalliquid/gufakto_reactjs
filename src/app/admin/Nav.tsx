import * as React from 'react'
import "../../styles.css";
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to="/admin">
                    <li>Home</li>
                </Link>
                <Link to="/admin/profile">
                    <li>Profile</li>
                </Link>
                <Link to="/">
                    <li>Logout</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;