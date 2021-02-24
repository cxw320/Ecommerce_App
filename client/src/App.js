import { render, screen } from '@testing-library/react';

import React, {Component} from 'react';
import ProductCard from './components/ProductCard';

const images = [
  'https://cdn.shopify.com/s/files/1/0204/7208/products/IMG_2111_c1fe0803-f19c-4971-919d-62eeb71ed3bf_620x.jpg?v=1574787075',
  'https://cdn.shopify.com/s/files/1/0204/7208/products/IMG_2125_e3da5891-98e2-461a-9d94-788dcac1b7c8.jpg?v=1574787075'
      
];

class App extends Component {
   // state lifting, bringing the state from children to parent component
  render(){

      return (
        <div className="App">

          <ProductCard 
            images={images}
            name="Product XYZ"
            price="49.99"/>

        </div>
      );
  }
}

export default App;
