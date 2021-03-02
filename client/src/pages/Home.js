import React, {Component} from 'react';
import products from '../data/products';
import ProductList from '../components/product/ProductList';
import { getProducts } from '../api/Products';
import LoadingIndicator from '../components/LoadingIndicator';


export default class Home extends Component {

    state = { products: [] };

    componentDidMount = async () =>{
        const products = await getProducts() || [];
        this.setState({ products, loading: false });
    };

    render(){
        return(
            this.state.loading ?
            <LoadingIndicator /> :
            <ProductList products={this.state.products}/>
        );
    }

}