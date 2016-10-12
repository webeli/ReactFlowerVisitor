import React, { Component } from 'react';

class Shop extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h2>Shop</h2>
                <p>Latitude {this.props.params.latitude}, Longitude {this.props.params.longitude}</p>
            </div>
        );
    }
}

export default Shop;