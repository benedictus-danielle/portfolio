// @flow
import * as React from 'react';
import {Nav, Navbar} from "react-bootstrap/cjs";
import {Link} from "react-router-dom";

type Props = {};
type State = {};

export class MyNavbar extends React.Component<Props, State> {
    render() {
        return (
            <header>
                <Navbar bg="light" style={{zIndex: 10}} expand="md" className="navbar-dark px-2">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" color="white"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/" className="nav-link text-dark">Home</Link>
                            <Link to="/about" className="nav-link text-dark">About</Link>
                            <Link to="/skills" className="nav-link text-dark">Skill</Link>
                            <Link to="/creations" className="nav-link text-dark">Creations</Link>
                        </Nav>
                        <Nav>
                            <Link to="/extras" className="nav-link text-dark">Extras</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </header>
        );
    };
};