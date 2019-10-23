import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';

class NavbarHeader extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Navbar class="" bg="dark" variant="dark">
                    <a class="navbar-brand" href="/">Facil Work</a>
                    <div class="">
                        <ul>
                            <li>

                            </li>
                        </ul>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default NavbarHeader;