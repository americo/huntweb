import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class addProduct extends Component {
    state = {
        product: {},
    };

    async submitData () {

        const data = {

            title: this.state.title, 
            description: this.state.description,
            url: this.state.url
        }

        const response = await api.post('/products', data);
        console.log(response);
        this.setState({ product: response.data});
    };

    render() {
        return (
            <div className="product-info">
                <h1>Adicionar Producto</h1>
                <form id="add-product" method="POST" onSubmit={this.submitData}>
                    <label>Título:</label><br/>
                    <input id="product-input" placeholder="Ex. iPhone" name="title"></input><br/><br/>
                    <label>Descrição:</label><br/>
                    <input id="product-input" placeholder="Ex. Most popular mobile phone" name="description"></input><br/><br/>
                    <label>URL:</label><br/>
                    <input id="product-input" placeholder="Ex. https://example.com" name="url"></input><br/><br/>
                    <button>Adicionar</button>
                </form>
            </div>
        );
    }
}