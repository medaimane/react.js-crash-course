import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import ProductsList from '../products-list/ProductsList';
import AddProduct from "../product-item/AddProduct";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import uuid from 'uuid';
import './App.css';
import About from "../Pages/About";
import Contact from "../Pages/Contact";

class App extends Component {
    state = {
        products: [{
            id: uuid.v4(),
            imageUrl: '',
            name: 'Product A',
            description: 'Product A description',
            price: '92',
            review: '5',
            isAvailable: true,
            isAddedToCard: false,
            isBrought: false
        }, {
            id: uuid.v4(),
            imageUrl: '',
            name: 'Product B',
            description: 'Product B description',
            price: '30',
            review: '4',
            isAvailable: true,
            isAddedToCard: false,
            isBrought: false
        }, {
            id: uuid.v4(),
            imageUrl: '',
            name: 'Product C',
            description: 'Product C description',
            price: '50',
            review: '4',
            isAvailable: false,
            isAddedToCard: false,
            isBrought: false
        }, {
            id: uuid.v4(),
            imageUrl: '',
            name: 'Product D',
            description: 'Product D description',
            price: '73',
            review: '2',
            isAvailable: true,
            isAddedToCard: false,
            isBrought: false
        }, {
            id: uuid.v4(),
            imageUrl: '',
            name: 'Product E',
            description: 'Product E description',
            price: '49',
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
            products: [...this.state.products.filter(
                product =>  product.id !== id
            )]
        });
    };

    addProduct = ({name, description, price}) => {
        this.setState({
            products: [
                ...this.state.products, {
                    name,
                    description,
                    price,
                    id: uuid.v4(),
                    review: '0',
                    isAvailable: true,
                    isAddedToCard: false,
                    isBrought: false,
                    imageUrl: '',
                }
            ]
        })
    };

    /**
     * The only required
     * react component
     * lifecycle
     */
    render() {
        return (
            <Router>
                <Fragment>
                    <Header />
                    <Route exact path="/" render={props => (
                        <Fragment>
                            <AddProduct addProduct={this.addProduct}/>
                            <h2 className="products-title">Products list</h2>
                            <ProductsList
                                products={this.state.products}
                                addToCard={this.addToCard}
                                buyNow={this.buyNow}
                                removeProduct={this.removeProduct}
                            />
                        </Fragment>
                    )}>
                    </Route>
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Footer />
                </Fragment>
            </Router>
        );
    }
}

export default App;
