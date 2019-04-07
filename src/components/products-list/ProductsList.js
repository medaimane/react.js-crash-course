import React, {Component} from 'react';
import ProductItem from '../product-item/ProductItem';
import PropTypes from 'prop-types';

class ProductsList extends Component {
    render() {
        return this.props.products.map(
            (product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    addToCard={this.props.addToCard.bind(this)}
                    buyNow={this.props.buyNow.bind(this)}
                    removeProduct={this.props.removeProduct.bind(this)}
                />
            ));
    }
}

/**
 * Some of the best practices
 * to define a PropTypes of a
 * components
 */
ProductsList.propTypes = {
    products: PropTypes.array.isRequired
};

export default ProductsList;