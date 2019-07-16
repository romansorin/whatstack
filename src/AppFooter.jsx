import React, { Component } from 'react';
import { Footer, Container, Content } from 'react-bulma-extensions/full';

class AppFooter extends Component {
    render() {
        return (
            <Footer>
                <Container>
                    <Content style={{ textAlign: 'center' }}>
                        <p>
                            <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
              <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed{' '}
                            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
            </p>
                    </Content>
                </Container>
            </Footer>
        );
    }

}

export default Footer;