import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Geosuggest from 'react-geosuggest';
import '../../styles/geosuggest.css';
import '../../styles/Start.css';

import { Navbar, Nav, NavItem, Col, Well, FormGroup, ControlLabel, Button, FormControl } from 'react-bootstrap';

class Start extends Component {

    onSuggestSelect(suggest) {
        browserHistory.push(`/shop/${suggest.location.lat}/${suggest.location.lng}`);
    }

    render() {
        const fixtures = [
            {label: 'Helsingborg', location: {lat: 56.0464674, lng: 12.694512099999997}},
            {label: 'Malmö', location: {lat: 55.604981, lng: 13.003822000000014}},
            {label: 'Stockholm', location: {lat: 59.32932349999999, lng: 18.068580800000063}}
        ];

        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">BLOOMDO</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">Kontakta oss</NavItem>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={2} href="#">Nyheter</NavItem>
                            <NavItem eventKey={2} href="#">Vanliga frågor</NavItem>
                            <NavItem eventKey={1} href="#">Logga in (Florister)</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Col xs={12} md={4} mdOffset={3}>
                    <h2 className="center-text">Kreativa florister i närheten</h2>
                    <Well>
                        <h3 className="center-text">Ange leveransadress</h3>
                        <Geosuggest
                            placeholder="Leveransadress"
                            fixtures={fixtures}
                            country="se"
                            onSuggestSelect={this.onSuggestSelect}/>
                    </Well>
                </Col>
                <Col xs={12} md={2}>
                    <h2 className="center-text">Florist? Gå med!</h2>
                    <Well>
                        <form>
                            <FormGroup controlId="formValidationSuccess1">
                                <ControlLabel>Bolagsnamn</ControlLabel>
                                <FormControl type="text" />
                            </FormGroup>
                            <FormGroup controlId="formValidationSuccess1">
                                <ControlLabel>Telefonnummer</ControlLabel>
                                <FormControl type="text" />
                            </FormGroup>

                            <Button type="submit">
                                Gå med
                            </Button>
                        </form>
                    </Well>
                </Col>

            </div>
        );
    }
}

export default Start;