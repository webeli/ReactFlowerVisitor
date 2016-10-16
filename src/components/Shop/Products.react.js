import React, { Component } from 'react';

import { Col, Thumbnail, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import * as productsActions from '../../actions/productsActions';

class Products extends Component {

    render() {

        const florists = this.props.products;

        const mappedFloristsProducts = Object.keys(florists).map( (florist) => {
            return Object.keys(florists[florist].products).map( (product) => {
                let prod = florists[florist].products[product];
                return (
                    <Col xs={6} md={3} key={prod.name}>
                        <Thumbnail src={prod.image} alt="242x200">
                            <h3>{prod.title}</h3>
                            <p>
                                <Button bsStyle="default">Läs mer</Button>&nbsp;
                                <Button bsStyle="default">Köp</Button>
                            </p>
                            <hr />
                            <p>{prod.name}</p>
                            <p>Leveransavgift: {prod.price} kr</p>
                        </Thumbnail>
                    </Col>
                );
            });
        });

        return (
            <div>
                {mappedFloristsProducts}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getProducts: (lat, long) => dispatch(productsActions.getProducts(lat, long))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);