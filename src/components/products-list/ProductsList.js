import React, {Component} from 'react';
import ProductsItem from '../product-item/ProductItem';

class ProductsList extends Component {
    render() {
        return this.props.products.map(
            (product) => (
                <ProductsItem product={product} />
            ));
    }
}

export default ProductsList;