import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class AddProduct extends Component {
    state = {
        name: '',
        description: '',
        price: '',
    };

    /**
     * Handle onChange event
     * for each input.
     */
    // onNameChange = (e) => {
    //     this.setState({
    //         name: e.target.value,
    //         description: this.state.description,
    //         price: this.state.price
    //     });
    // };
    // onDescriptionChange = (e) => {
    //     this.setState({
    //         name: this.state.name,
    //         description: e.target.value,
    //         price: this.state.price
    //     });
    // };
    // onPriceChange = (e) => {
    //     this.setState({
    //         name: this.state.name,
    //         description: this.state.description,
    //         price: e.target.value
    //     });
    // };

    /**
     * Use one onChange function
     * to handle changing events
     * for all inputs.
     * But the same naming is
     * require for the state
     * proprieties and name field
     * of the inputs
     */
    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addProduct({...this.state});
        this.setState({
            name: '',
            description: '',
            price: '',
        });
    };

    render() {
        return (
            <Fragment>
                <h3 style={style.title}>Add New Product</h3>
                <form style={style.form} onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Product Name"
                        required
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                    />
                    <input
                        type="text"
                        placeholder="Product Description (Optional)"
                        name="description"
                        value={this.state.description}
                        onChange={this.onChange}
                    />
                    <input
                        type="number"
                        min="0"
                        placeholder="Product Price €"
                        required
                        name="price"
                        value={this.state.price}
                        onChange={this.onChange}
                    />
                    <button
                        style={style.button}
                        type="submit"
                    >Add Product</button>
                </form>
            </Fragment>
        );
    }
}

AddProduct.propTypes = {
    addProduct: PropTypes.func.isRequired
};


const style = {
    title: {
        margin: '5px',
        padding: '5px'
    },
    form: {
        margin: '20px',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column'
    },
    button: {
        margin: '10px',
        padding: '2px',
        backgroundColor: '#7f0'
    }
};

export default AddProduct;