import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';

class BucketInfo extends Component {

    render() {
        const floristLength = Object.keys(this.props.bucket).length;
        const productLength = this.props.products.length;

        return (
            <Col xs={12} md={12}>
                <p>Hittade {floristLength} florist(er), {productLength} produkt(er) och 0 kategori(er) totalt</p>
            </Col>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products,
        bucket: state.bucket
    };
}
export default connect(mapStateToProps)(BucketInfo);