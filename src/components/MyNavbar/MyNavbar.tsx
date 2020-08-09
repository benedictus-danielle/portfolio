// @flow
import * as React from 'react';
import {Nav, Navbar} from "react-bootstrap/cjs";
import {Link} from "react-router-dom";

type Props = {
    
};
type State = {
    
};

export class MyNavbar extends React.Component<Props, State> {
    render() {
        return (
            <header>

                <Navbar bg="light">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/skills" className="nav-link">Skill</Link>
                    </Nav>
                    <Nav>
                        <Link to="/extras" className="nav-link">Extras</Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </header>
        );
    };
};