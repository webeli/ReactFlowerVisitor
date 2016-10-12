import React, { Component } from 'react';

class Products extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h2>Products</h2>
                <p>Latitude {this.props.params.latitude}, Longitude {this.props.params.longitude}</p>
            </div>
        );
    }
}

export default Products;