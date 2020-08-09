// @flow
import * as React from 'react';
import {Nav, Navbar} from "react-bootstrap/cjs";

type Props = {
    
};
type State = {
    
};

export class MyNavbar extends React.Component<Props, State> {
    render() {
        return (
            <Navbar bg="light">
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    };
};