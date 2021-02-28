import React, {Component} from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products.js';
import ProductList from '../components/ProductList';
import BaseInput from '../components/inputs/BaseInput.js';
import TextInput from '../components/inputs/TextInput';
import PasswordInput from '../components/inputs/PasswordInput';
import CheckboxInput from '../components/inputs/CheckboxInput';
import Form from '../components/Form.js';
import {PrimaryButton, SecondaryButton} from '../components/Button.js';

export default class FormDemo extends Component {
   // state lifting, bringing the state from children to parent component
   //input controls: onChange , target = the dom element

   state = { firstName: '',
             lastName: '', 
             password: '',
             sendEmail: true,
    };

   handleTextChange = e => {
     this.setState({ [e.target.name]: e.target.value});
   };

   handleBooleanChange = e => {
    this.setState({ [e.target.name]: e.target.checked});
  };

  handleSubmit = e =>{
    e.preventDefault();
    console.log(this.state);
  }

  render(){

    //need a key prop, a unique value that is consistent across re-renders
      return (
        <div className="App">
        <Form>
          <TextInput 
            label="First Name"
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleTextChange} 
            />

          <TextInput 
            label="Last Name"
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleTextChange} 
            />

          <TextInput 
            label="Password"
            value={this.state.password}
            name="password"
            onChange={this.handleTextChange} 
            />
          
          <CheckboxInput
            label="Can we send you promo email?"
            checked={this.state.sendEmail}
            name="sendEmail"
            onChange={this.handleBooleanChange}
          />

      
          <PrimaryButton>
            Submit
          </PrimaryButton>
          </Form>

        </div>
      
      );
  }
}
