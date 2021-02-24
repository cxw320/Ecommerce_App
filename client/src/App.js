import logo from './logo.svg';
import './App.css';
import DynamicCounter from './components/DynamicCounter.js';

function App() {
   // state lifting, bringing the state from children to parent component
  

  return (
    <div className="App">
      <div className="App-header">
      <DynamicCounter value={'Apples'} increment={this.increment} decrement={this.decrement}/>
      <DynamicCounter value={'Oranges'} increment={this.increment} decrement={this.decrement}/>
      <DynamicCounter value={'Lemons'} increment={this.increment} decrement={this.decrement}/>
      </div>
    </div>
  );
}

export default App;
