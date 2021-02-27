import React, {Component} from 'react';
import './ProductList.css';
import ProductCard from './ProductCard';

export default class ProductList extends Component {
    render(){
        return(
            <div className="ProductList">

                {this.props.products.map((product) =>

                <ProductCard
                key={product.id}
                {...product}
                pull={product.id % 2 === 0}
                />
                )}

            </div>

        );

    }


}