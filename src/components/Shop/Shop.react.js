import React, { Component } from 'react';

import { Navbar, Nav, NavItem, Col, Thumbnail, Button } from 'react-bootstrap';

import products from '../../../mockup/mockup';

class Shop extends Component {
    render() {

        const mappedProducts = products.map( (product) => {
            return (
                <Col xs={6} md={3}>
                    <Thumbnail src={product.image} alt="242x200" height="42">
                        <h3>{product.title}</h3>
                        <p>Description</p>
                        <p>
                            <Button bsStyle="default">Läs mer</Button>&nbsp;
                            <Button bsStyle="default">Köp</Button>
                        </p>
                        <hr />
                        <p>{product.florist}</p>
                        <p>Leveransavgift: {product.deliverycost}</p>
                    </Thumbnail>
                </Col>
            )
        });

        console.log(this.props);
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
                <Col xs={12} md={8} mdOffset={2}>
                    <h4 className="center-text">Latitude {this.props.params.latitude}, Longitude {this.props.params.longitude}</h4>
                </Col>
                <Col xs={12} md={8} mdOffset={2}>
                {mappedProducts}
                </Col>
            </div>
        );
    }
}

export default Shop;