import React, { Component } from 'react';
import { Level, Heading, Section, Container, Image } from 'react-bulma-components/full';
import logo from './logo.svg';
import './header.scss';

class Header extends Component {
    render() {
        return (
            <Section renderAs="header">
                <Container fluid>
                    <Level renderAs="nav">
                        <Level.Side align="left">
                            <Level.Item>
                                <Image src={logo} />
                            </Level.Item>
                        </Level.Side>
                        <Level.Side align="right">
                            <Level.Item>
                                <a href="https://www.romansorin.com" className="header-links">FAQ</a>
                            </Level.Item>
                        </Level.Side>
                    </Level>
                </Container>
            </Section>

        );
    }
}

export default Header;