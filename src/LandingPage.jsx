import React, { Component } from 'react';
import { Section, Container, Heading, Hero, Columns, Button } from 'react-bulma-components/src/index';

class LandingPage extends Component {
    render() {
        return (
            <Section>
                <Hero>
                    <Hero.Body className="has-text-centered landing-page">
                        <Container>
                            <Columns multiline>
                                <Columns.Column size="half" offset="one-quarter">
                                    <Heading className="is-size-2-mobile"><span id="landing-page-heading-accented">what</span>stack</Heading>
                                    <Heading subtitle className="has-text-weight-light is-size-2 is-size-3-mobile">
                                        Input your needs, Output your stack.<br />
                                        Starting projects has<br />
                                        never been simpler.
                                    </Heading>
                                </Columns.Column>
                                <Columns.Column size="half" offset="one-quarter">
                                    <Button className="coming-soon-btn has-text-weight-semibold" isStatic={true} rounded={false}>
                                        Coming Soon
                                    </Button>
                                </Columns.Column>
                            </Columns>
                        </Container>
                    </Hero.Body>
                </Hero>
            </Section>
        );
    }
}


export default LandingPage;