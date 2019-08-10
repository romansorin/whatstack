import React, { Component } from 'react';
import Navbar from 'react-bulma-components/lib/components/navbar';
import Container from 'react-bulma-components/lib/components/container';
import Button from 'react-bulma-components/lib/components/button';

import logo from './assets/images/logo.svg';

class Header extends Component {
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
                        <Navbar.Container className="is-hidden-touch" position="end">
                            <Navbar.Item renderAs="a" href="mailto:roman@romansorin.com">
                                <Button>Contact</Button>
                            </Navbar.Item>
                        </Navbar.Container>
                    </Container>
                </Navbar>
            </header>
        );
    }
}

export default Header;