import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Col, Thumbnail, Button } from 'react-bootstrap';

class Products extends Component {

    render() {

        console.log('products', this.props.products, 'filter', this.props.filter);
        // Compares ["a", "b", "c"] with ["c", "d", "e"]
        function compareArrays(flower, filter) {
            for	(var i=0;i<filter.length;i++) {
                if ((flower[filter[i]]))
                    return true;
            }
            return false;
        }

        // Returns a sorted list
        function sortList(list, filter){
            var sortedList = [];
            list.map(function(flower){
                if (filterFlower(flower, filter)) {
                    sortedList.push(flower);
                }
                return true;
            });
            return sortedList;
        }

        // Compares filter with attributes
        function filterFlower(flower, filter) {
            var shouldReturn = true;
            for (var group in flower.attributes) {
                if(filter[group].length > 0) {
                    var found = compareArrays(flower.attributes[group], filter[group]);
                    if (!found) {
                        shouldReturn = false
                    }
                }
            }
            return shouldReturn;
        }

        const filteredProducts = sortList(this.props.products, this.props.filter);
        console.log('filteredProducts', filteredProducts);

        let mappedProducts;

        if (this.props.products.length === 0) {
            mappedProducts = (
                <img src="http://interestingengineering.com/loading.gif" style={{height:'250px',marginLeft:'-125px',paddingLeft:'50%'}} alt=""/>
            );
        } else {
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