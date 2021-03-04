import { render, screen } from '@testing-library/react';
import React, {Component} from 'react';
import ProductCard from './components/product/ProductCard';
import products from './data/products.js';
import ProductList from './components/product/ProductList';
import './App.css';
import BaseInput from './components/inputs/BaseInput.js';
import TextInput from './components/inputs/TextInput';
import PasswordInput from './components/inputs/PasswordInput';
import CheckboxInput from './components/inputs/CheckboxInput';
import Form from './components/Form.js';
import {PrimaryButton, SecondaryButton} from './components/Button.js';
import{
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import FormDemo from './pages/FormDemo';
import NotFound from './pages/NotFound';

class App extends Component {
  render(){
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/forms" exact component={FormDemo} />
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        </div>
    )

}
}
export default App;
