import React, {Component} from 'react';
import ProductsList from '../products-list/ProductsList';

class App extends Component {
    state = {
        products: [{
            id: 1,
            imageUrl: '',
            name: 'Product A',
            description: 'Product A description',
            price: '92 €',
            review: '5',
            isAvailable: true
        }, {
            id: 2,
            imageUrl: '',
            name: 'Product B',
            description: 'Product B description',
            price: '30 €',
            review: '4',
            isAvailable: true
        }, {
            id: 3,
            imageUrl: '',
            name: 'Product C',
            description: 'Product C description',
            price: '50 €',
            review: '4',
            isAvailable: false
        }, {
            id: 4,
            imageUrl: '',
            name: 'Product D',
            description: 'Product D description',
            price: '73 €',
            review: '2',
            isAvailable: true
        }, {
            id: 5,
            imageUrl: '',
            name: 'Product E',
            description: 'Product E description',
            price: '49 €',
            review: '3',
            isAvailable: false
        }]
    };

    render() {
        return (
            <main>
                <header>
                    <h1>Welcome to the store</h1>
                </header>
                <div>
                    <h2>Products list</h2>
                    <ProductsList products={this.state.products}/>
                </div>
            </main>
        );
    }
}

export default App;
