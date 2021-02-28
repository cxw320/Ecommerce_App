import React, {Component} from 'react';
import products from '../data/products';
import ProductList from '../components/product/ProductList';
import { getProducts } from '../api/Products';


export default class Home extends Component {

    state = { products: [] };

    componentDidMount = async () =>{
        const products = await getProducts();
        this.setState({products});
    };

    render(){
        return(
            <ProductList products={this.state.products}/>
        );
    }

}