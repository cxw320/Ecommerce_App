import React, {Component} from 'react';
import './ProductList.css';
import ProductCard from './ProductCard';

export default class ProductList extends Component {
    render(){
        return(
            <div className="ProductList">

                {this.props.products.map((product, index) =>

                <ProductCard
                key={product.getId()}
                name={product.getName()}
                images={product.getImages()}
                price={product.getFormattedPrice()}
                
                pull={index % 2 === 0}
                />
                )}

            </div>

        );

    }


}