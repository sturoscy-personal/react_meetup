// Main Imports
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Additional components
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class App extends React.Component {
    render() {
        return(
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Philly ReactJS</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <li><Link to="/events">Events</Link></li>
                    </Nav>
                </Navbar>
                {this.props.children}
            </div>
        );
    }
}

export default App;
