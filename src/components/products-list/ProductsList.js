import React, {Component} from 'react';
import ProductItem from '../product-item/ProductItem';
import PropTypes from 'prop-types';

class ProductsList extends Component {
    render() {
        if (this.props.products.length === 0) {
            return <div style={{
                border: '2px solid gray',
                margin: '5px',
                padding: '5px'
            }}>
                <p style={{
                    textAlign: 'center'
                }}>Products Not Found</p>
            </div>
        }
        return this.props.products.map(
            (product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    addToCard={this.props.addToCard}
                    buyNow={this.props.buyNow}
                    removeProduct={this.props.removeProduct}
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
    products: PropTypes.array.isRequired,
    addToCard: PropTypes.func.isRequired,
    buyNow: PropTypes.func.isRequired,
    removeProduct: PropTypes.func.isRequired
};

export default ProductsList;