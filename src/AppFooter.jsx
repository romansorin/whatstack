import React, { Component } from 'react';
import { Footer, Container, Content } from 'react-bulma-components/full';

class AppFooter extends Component {
    render() {
        return (
            <Footer>
                <Container>
                    <Content style={{ textAlign: 'center' }}>
                        <p>
                            <strong>whatstack</strong> by <a href="https://www.romansorin.com">romansorin</a> - 
                            © 2019 whatstack
                        </p>
                    </Content>
                </Container>
            </Footer>
        );
    }

}

export default AppFooter;