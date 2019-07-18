import React, { Component } from 'react';
import Footer from 'react-bulma-components/lib/components/footer';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';

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