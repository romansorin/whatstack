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
                        <Navbar.Burger
                            active={this.state.open}
                            onClick={() => {
                                this.setState(state => ({
                                    open: !state.open
                                }))
                            }
                            }
                        />
                    </Navbar.Brand>
                    <Navbar.Menu active={this.state.open}>
                        <Navbar.Container position="end">
                            <Navbar.Item className="header-links" href="#">FAQ</Navbar.Item>
                        </Navbar.Container>
                    </Navbar.Menu>
                </Container>
            </Navbar>
        );
    }
}

export default Header;