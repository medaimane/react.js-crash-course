import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ProductItem extends Component {

    /**
     * Using dynamic styling.
     */
    getAvailableStyle = (isAvailable) => {
        return {
            color: isAvailable ? 'green' : 'red'
        };
    };

    render() {
        /**
         * Object destruction
         * to simplify access
         * to all product proprieties
         */
        const {
            id,
            imageUrl,
            name,
            description,
            price,
            review,
            isAvailable,
            isAddedToCard,
            isBrought
        } = this.props.product;

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
                    backgroundImage: imageUrl
                }}>{name}</h3>
                <p style={styles.description}>{description}</p>
                <div style={styles.details}>
                    <p>Price: {price}</p>
                    <p>Review: {review}</p>
                    <p style={this.getAvailableStyle(isAvailable)}>
                        {isAvailable ? 'Available' : 'Not Available'}
                    </p>
                    <p hidden={!isAvailable}>
                        {isAddedToCard ? 'Added' : 'Not Added'}
                    </p>
                    <p hidden={!isAvailable}>
                        {isBrought ? 'Brought' : 'Not Brought'}
                    </p>
                </div>
                <div style={{
                    margin: '4px'
                }}>
                    {/**
                     * Add Some button
                     * with a click event
                     */
                     }
                    <button
                        style={{
                            backgroundColor: 'blue',
                            color: 'white',
                            margin: '2px'
                        }}
                        hidden={!isAvailable}
                        onClick={this.props.addToCard.bind(this, id)}
                    >{isAddedToCard ? 'Remove From Card' : 'Add to Card'}</button>

                    <button
                        style={{
                            backgroundColor: 'orange',
                            color: 'blue',
                            margin: '2px'
                        }}
                        hidden={!isAvailable}
                        onClick={this.props.buyNow.bind(this, id)}
                    >{isBrought ? 'Item Brought' : 'Buy Now'}</button>
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