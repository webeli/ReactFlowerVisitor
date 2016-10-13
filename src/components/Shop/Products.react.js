import React, { Component } from 'react';

import { Col, Thumbnail, Button } from 'react-bootstrap';

class Products extends Component {

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

        const mappedProducts = products.map( (product) => {
            return (
                <Col xs={6} md={3} key={product.title}>
                    <Thumbnail src={product.image} alt="242x200">
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

        return (
            <div>
                {mappedProducts}
            </div>
        );
    }
}

export default Products;