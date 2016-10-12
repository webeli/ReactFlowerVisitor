import React, { Component } from 'react';

import { Navbar, Nav, NavItem, Col, Thumbnail, Button, Checkbox } from 'react-bootstrap';

class Shop extends Component {

    render() {
        const products = [
            {title: 'Blomma 1', image:'https://www.ftdimg.com/pics/products/7822_330x370.jpg', florist: 'Gulgatan Florist AB', deliverycost: '49kr' },
            {title: 'Blomma 2', image:'https://www.ftdimg.com/pics/products/7822_330x370.jpg', florist: 'Gulgatan Florist AB', deliverycost: '49kr' },
            {title: 'Blomma 3', image:'https://www.ftdimg.com/pics/products/7822_330x370.jpg', florist: 'Gulgatan Florist AB', deliverycost: '49kr' },
            {title: 'Blomma 4', image:'https://www.ftdimg.com/pics/products/7822_330x370.jpg', florist: 'Gulgatan Florist AB', deliverycost: '49kr' },
            {title: 'Blomma 5', image:'https://www.ftdimg.com/pics/products/7822_330x370.jpg', florist: 'Gulgatan Florist AB', deliverycost: '49kr' },
            {title: 'Blomma 6', image:'https://www.ftdimg.com/pics/products/7822_330x370.jpg', florist: 'Gulgatan Florist AB', deliverycost: '49kr' },
            {title: 'Blomma 7', image:'https://www.ftdimg.com/pics/products/7822_330x370.jpg', florist: 'Gulgatan Florist AB', deliverycost: '49kr' },
            {title: 'Blomma 8', image:'https://www.ftdimg.com/pics/products/7822_330x370.jpg', florist: 'Gulgatan Florist AB', deliverycost: '49kr' }
        ];
        const menus = [
            {title: 'Menu 1' },
            {title: 'Menu 2' },
            {title: 'Menu 3' },
            {title: 'Menu 4' },
            {title: 'Menu 5' },
            {title: 'Menu 6' },
            {title: 'Menu 7' },
            {title: 'Menu 8' }
        ];
        const mappedProducts = products.map( (product) => {
            return (
                <Col xs={6} md={3} key={product.title}>
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
        const mappedMenu = menus.map( (menu) => {
            return (
                <Checkbox key={menu.title}>
                    {menu.title}
                </Checkbox>
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
                <Col xs={12} md={2}>
                    {mappedMenu}
                </Col>
                <Col xs={12} md={8}>
                    <Col xs={12} md={12}>
                        <h4 className="center-text">Latitude {this.props.params.latitude}, Longitude {this.props.params.longitude}</h4>
                    </Col>
                    <Col xs={12} md={12}>
                        {mappedProducts}
                    </Col>
                </Col>
            </div>
        );
    }
}

export default Shop;