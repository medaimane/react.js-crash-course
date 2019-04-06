import React, {Component} from 'react';

class ProductsItem extends Component {
    render() {
        const product = this.props.product;
        return (
            <div key={product.id} className="ProductCard">
                <h3 className="ProductName">{this.props.product.name}</h3>
                <p>{product.description}</p>
                <div>
                    <p>Price: {product.price}</p>
                    <p>Review: {product.review}</p>
                    <p>{product.isAvailable ? 'Available' : 'Not Available'}</p>
                </div>
            </div>
        )
    }
}

export default ProductsItem;