import { render, screen } from '@testing-library/react';

import React, {Component} from 'react';
import ProductCard from './components/ProductCard';
import products from './data/products.js';
import ProductList from './components/ProductList';
import './App.css';
import BaseInput from './components/inputs/BaseInput.js';
import TextInput from './components/inputs/TextInput';
import PasswordInput from './components/inputs/PasswordInput';
import CheckboxInput from './components/inputs/CheckboxInputs';

class App extends Component {
   // state lifting, bringing the state from children to parent component
   //input controls: onChange , target = the dom element

   state = { firstName: '',
             lastName: '', 
             password: '',
             sendEmail: true,
    };

   handleChange = e => {
     this.setState({ [e.target.name]: e.target.value});
   };

  render(){

    //need a key prop, a unique value that is consistent across re-renders
      return (
        <div className="App">

          <TextInput 
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleChange} 
            />

          <TextInput 
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleChange} 
            />

          <TextInput 
            value={this.state.password}
            name="password"
            onChange={this.handleChange} 
            />
          
          <CheckboxInput
            value={this.state.sendEmail}
            name="sendEmail"
            onChange={this.handleChange}
          />

          {/*<ProductList products={products}/>*/}

        </div>
      );
  }
}

export default App;
