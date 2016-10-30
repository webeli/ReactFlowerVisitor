import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Col, Thumbnail, Button } from 'react-bootstrap';
import CircularProgress from 'material-ui/CircularProgress';

import { filterList, sortBy } from '../../lib/filter';

class Products extends Component {

    render() {

        let mappedProducts;

        if (this.props.products.length > 0) {
            // Run filterList on productArray
            const filteredProducts = filterList(this.props.products, this.props.filter);
            // Run sortList on filtered products array
            console.log(this.props.filter.sortBy);
            const products = filteredProducts.sort(sortBy(this.props.filter.sortBy, false, parseInt));

            mappedProducts = products.map( (prod, index) => {
                return (
                    <Col xs={12} sm={6} md={3} key={prod.productKey}>
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
    console.log(state);
    return {
        products: state.products,
        filter: state.filter
    };
}
export default connect(mapStateToProps)(Products);