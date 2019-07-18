import React, { Component } from 'react';
import Navbar from 'react-bulma-components/lib/components/navbar';
import Container from 'react-bulma-components/lib/components/container';

import logo from './assets/images/logo.svg';

class Header extends Component {
    constructor() {
        super();
        this.state = { open: false };
    }

    render() {
        return (
            <header>
                <Navbar className="header">
                    <Container>
                        <Navbar.Brand>
                            <Navbar.Item renderAs="a" href="/">
                                <img
                                    src={logo}
                                    className="header-logo"
                                    alt="whatstack, a tool for finding your next stack"
                                />
                            </Navbar.Item>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </header>
        );
    }
}

export default Header;