import React, {Component, Fragment} from 'react';
import ProductItem from '../product-item/ProductItem';
import PropTypes from 'prop-types';

class ProductsList extends Component {
    render() {
        return this.props.products.map(
            (product) => (
                <Fragment>
                    <h2 style={style}>Products list</h2>
                    <ProductItem
                        key={product.id}
                        product={product}
                        addToCard={this.props.addToCard}
                        buyNow={this.props.buyNow}
                        removeProduct={this.props.removeProduct}
                    />
                </Fragment>
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

const style = {
    margin: '5px',
    padding: '5px'
};

export default ProductsList;