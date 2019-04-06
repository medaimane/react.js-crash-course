import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ProductItem extends Component {

    /**
     * Using dynamic styling.
     */
    getAvailableStyle(isAvailable) {
        return {
            color:isAvailable ? 'green' : 'red'
        };
    }

    render() {
        const product = this.props.product;
        return (
            /**
             * Add Some inline Styling
             */
            <div style={{
                border: '2px solid gray',
                margin: '5px',
                padding: '5px'
            }}>
                <h3 style={{
                    padding: '3px',
                    fontFamily: 'sans-serif',
                    fontSize: '20px',
                    textDecoration: 'none',
                    textAlign: 'center',
                    backgroundImage: product.imageUrl
                }}>{this.props.product.name}</h3>
                <p style={styles.description}>{product.description}</p>
                <div style={styles.details}>
                    <p>Price: {product.price}</p>
                    <p>Review: {product.review}</p>
                    <p style={this.getAvailableStyle(product.isAvailable)}>{product.isAvailable ? 'Available' : 'Not Available'}</p>
                </div>
                <div style={{
                    margin: '4px'
                }}>
                    <button style={{
                        backgroundColor: 'blue',
                        color: 'white',
                        margin: '2px'
                    }}>Add to Card</button>
                    <button style={{
                        backgroundColor: 'orange',
                        color: 'blue',
                        margin: '2px'
                    }}>Buy Now</button>
                </div>
            </div>
        )
    }
}

ProductItem.propTypes = {
    product: PropTypes.object.isRequired
};

/**
 * Add variable for styling
 */
const styles = {
    description: {
        color: 'gray',
        padding: '3px',
    },
    details: {
        margin: '5px'
    }
};

export default ProductItem;