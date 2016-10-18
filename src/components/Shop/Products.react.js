import React, { Component } from 'react';

import { Col, Thumbnail, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import * as productsActions from '../../actions/productsActions';

class Products extends Component {

    render() {

        const products = this.props.products.sort();

        const mappedProducts = products.map( (prod) => {
            return (
                <Col xs={6} md={3} key={prod.name}>
                    <Thumbnail src={prod.image} alt="242x200">
                        <h3>{prod.name}</h3>
                        <h3>{prod.price} kr</h3>
                        <p>
                            <Button bsStyle="default">Läs mer</Button>&nbsp;
                            <Button bsStyle="default">Köp</Button>
                        </p>
                        <hr />
                        <p>{prod.floristName}</p>
                        <p>Leveransavgift: {prod.deliveryfee} kr</p>
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
function mapDispatchToProps(dispatch) {
    return {
        getProducts: (lat, long) => dispatch(productsActions.getProducts(lat, long))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);