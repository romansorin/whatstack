import React, { Component } from 'react';
import { Section, Container, Heading } from 'react-bulma-components/full';

class LandingPage extends Component {
    render() {
        return (
            <Section>
                <Container>
                    <Heading>Section</Heading>
                    <Heading subtitle>
                        A simple container to divide your page into <strong>sections</strong>, like the one you are currently
                        reading
          </Heading>
                </Container>
            </Section>
        );
    }
}


export default LandingPage;