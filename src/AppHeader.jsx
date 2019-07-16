import React, { Component } from 'react';
import { Navbar, Container } from 'react-bulma-components/full';
import logo from './logo.svg';
import './header.scss';

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
                                    alt="Bulma: a modern CSS framework based on Flexbox"
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