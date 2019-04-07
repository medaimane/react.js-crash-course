import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import ProductsList from '../products-list/ProductsList';
import AddProduct from "../product-item/AddProduct";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import ProductsService from "../../sevices/ProductsService";
import './App.css';

class App extends Component {
    state = {
        products: []
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

    addProduct = async ({name, description, price}) => {
        this.setState({
            products: [
                ...this.state.products,
                await ProductsService.addProduct({
                    name,
                    description,
                    price
                })
            ]
        })
    };

    /**
     * Another react
     * component lifecycle
     * method
     */
    async componentDidMount() {
        this.setState({
            products: await ProductsService.getProducts()
        });
    }

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
