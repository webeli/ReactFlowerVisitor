import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Col, Thumbnail, Button } from 'react-bootstrap';

class Products extends Component {

    render() {

        console.log("products",this.props.products);
        let mappedProducts;

        if (this.props.products.length === 0) {
            mappedProducts = (
                <img src="http://interestingengineering.com/loading.gif" style={{height:'250px',marginLeft:'-125px',paddingLeft:'50%'}} alt=""/>
            );
        } else {
            const products = this.props.products.sort();
            const productsLimited = products.slice(0,5);

            mappedProducts = productsLimited.map( (prod, index) => {
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
        products: state.products
    };
}
export default connect(mapStateToProps)(Products);