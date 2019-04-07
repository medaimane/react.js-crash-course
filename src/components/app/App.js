import React, {Component, Fragment} from 'react';
import ProductsList from '../products-list/ProductsList';
import Header from "../layouts/Header";
import './App.css';

class App extends Component {
    state = {
        products: [{
            id: 1,
            imageUrl: '',
            name: 'Product A',
            description: 'Product A description',
            price: '92 €',
            review: '5',
            isAvailable: true,
            isAddedToCard: false,
            isBrought: false
        }, {
            id: 2,
            imageUrl: '',
            name: 'Product B',
            description: 'Product B description',
            price: '30 €',
            review: '4',
            isAvailable: true,
            isAddedToCard: false,
            isBrought: false
        }, {
            id: 3,
            imageUrl: '',
            name: 'Product C',
            description: 'Product C description',
            price: '50 €',
            review: '4',
            isAvailable: false,
            isAddedToCard: false,
            isBrought: false
        }, {
            id: 4,
            imageUrl: '',
            name: 'Product D',
            description: 'Product D description',
            price: '73 €',
            review: '2',
            isAvailable: true,
            isAddedToCard: false,
            isBrought: false
        }, {
            id: 5,
            imageUrl: '',
            name: 'Product E',
            description: 'Product E description',
            price: '49 €',
            review: '3',
            isAvailable: false,
            isAddedToCard: false,
            isBrought: false
        }]
    };

    addToCard = (id) => {
        this.setState({
            products: this.state.products.map(
                product =>  {
                    if (product.id === id) {
                        product.isAddedToCard = !product.isAddedToCard;
                    }
                    return product;
                }
            )
        });
    };

    buyNow = (id) => {
        this.setState({
            products: this.state.products.map(
                product =>  {
                    if (product.id === id) {
                        product.isBrought = !product.isBrought;
                    }
                    return product;
                }
            )
        });
    };

    removeProduct = (id) => {
        this.setState({
            products: this.state.products.filter(
                product =>  product.id !== id
            )
        });
    };

    /**
     * The only required
     * react component
     * lifecycle
     */
    render() {
        return (
            <Fragment>
                <Header />
                <Fragment>
                    <ProductsList
                        products={this.state.products}
                        addToCard={this.addToCard}
                        buyNow={this.buyNow}
                        removeProduct={this.removeProduct}
                    />
                </Fragment>
            </Fragment>
        );
    }
}

export default App;
