import React, { Component } from 'react';
import { Footer, Container, Content } from 'react-bulma-components/full';
import "./footer.scss";

class AppFooter extends Component {
    render() {
        return (
            <Footer renderAs="footer">
                <Container>
                    <Content>
                        <p>
                            <span className="has-text-weight-semibold">whatstack</span> by <a href="https://www.romansorin.com">romansorin</a> -
                            © 2019
                        </p>
                    </Content>
                </Container>
            </Footer>
        );
    }

}

export default AppFooter;