import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Col, Thumbnail, Button } from 'react-bootstrap';
import CircularProgress from 'material-ui/CircularProgress';

import { sortList } from '../../lib/filter';

class Products extends Component {

    render() {

        let mappedProducts;

        if (this.props.products.length > 0) {
            // Run sortList on products
            const filteredProducts = sortList(this.props.products, this.props.filter);
            const products = filteredProducts.sort();
            //const productsLimited = products.slice(0,5);

            mappedProducts = products.map( (prod, index) => {
                return (
                    <Col xs={6} md={3} key={prod.productKey}>
                        <Thumbnail src={prod.image} bsClass="thumbnail product" alt="flower">
                            <h4>{prod.name}</h4>
                            <p>{prod.price} kr</p>
                            <p>
                                <Button bsSize="small">Lägg i kundvagn</Button>
                            </p>
                            <hr />
                            <p style={{fontSize:'10px'}}>{prod.floristName || 'Hitta inget bolagsnamn'}</p>
                            <p style={{fontSize:'10px'}}>{prod.floristAdress || 'Hitta ingen adress'}</p>
                            <p style={{fontSize:'10px'}}>Leveransavgift: {prod.floristFee || '0'}kr</p>
                        </Thumbnail>
                    </Col>
                )
            });
        } else {
            mappedProducts = (
                <CircularProgress size={80} thickness={5} style={{marginLeft:'-40px',paddingLeft:'50%'}} />
            );
        }

        return (
            <div>
                {mappedProducts}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products,
        filter: state.filter
    };
}
export default connect(mapStateToProps)(Products);