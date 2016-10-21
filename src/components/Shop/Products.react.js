import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Col, Thumbnail, Button } from 'react-bootstrap';

class Products extends Component {

    render() {

        const products = this.props.products.sort();
        const productsLimited = products.slice(0,5);

        const mappedProducts = productsLimited.map( (prod, index) => {
            return (
                <Col xs={6} md={3} key={index}>
                    <Thumbnail src={prod.image} alt="242x200">
                        <h4>{prod.name}</h4>
                        <p>{prod.price} kr</p>
                        <p>
                            <Button bsSize="small">Läs mer</Button>&nbsp;
                            <Button bsSize="small">Köp</Button>
                        </p>
                        <hr />
                        <p style={{fontSize:'10px'}}>{prod.floristName || 'Din Florist AB'}</p>
                        <p style={{fontSize:'10px'}}>{prod.adress || 'Florist Gatan 9, Helsingborg'}</p>
                        <p style={{fontSize:'10px'}}>Leveransavgift: {prod.deliveryfee || '99'}kr</p>
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

function mapStateToProps(state) {
    return {
        products: state.products
    };
}
export default connect(mapStateToProps)(Products);