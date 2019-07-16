import React, { Component } from 'react';
import { Section, Container, Heading, Hero, Columns } from 'react-bulma-components/full';

class LandingPage extends Component {
    render() {
        return (
            <Section>
                <Hero>
                    <Hero.Body className="has-text-centered">
                        <Container>
                            <Columns mobile>
                                <Columns.Column size="half" offset="one-quarter">
                                    <Heading id="landing-page-heading"><span id="landing-page-heading-accented">what</span>stack</Heading>
                                    <Heading subtitle size={3} className="has-text-weight-light">
                                        Input your needs, Output your stack.<br />
                                        Starting projects has<br />
                                        never been simpler.
                                    </Heading>
                                </Columns.Column>
                            </Columns>

                        </Container>
                    </Hero.Body>
                </Hero>
            </Section >
        );
    }
}


export default LandingPage;