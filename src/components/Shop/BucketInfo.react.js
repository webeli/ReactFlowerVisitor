import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Well } from 'react-bootstrap';

class BucketInfo extends Component {

    render() {
        const floristLength = Object.keys(this.props.bucket).length;
        const productLength = this.props.products.length;

        return (
            <Col xs={12} md={12}>
                <center>
                    <Well className="nobg">
                        <h4>{this.props.location}</h4>
                        <p>{floristLength} florist(er) och {productLength} produkt(er) totalt</p>
                    </Well>
                </center>
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