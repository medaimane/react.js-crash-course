import React, {Component} from 'react';
import './Products.css';

class Products extends Component {
    render() {
        return this.props.products.map(
            (product) => (
                <div key={product.id} className="ProductCard">
                    <h3 className="ProductName">{product.name}</h3>
                    <p>{product.description}</p>
                    <div>
                        <p>Price: {product.price}</p>
                        <p>Review: {product.review}</p>
                        <p>{product.isAvailable ? 'Available' : 'Not Available'}</p>
                    </div>
                </div>
            ));
    }
}

export default Products;