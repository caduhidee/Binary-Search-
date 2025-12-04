import logo from './logo.svg';
import john from './images.jpeg';
import derrick from './images (1).jpeg';

import './styles/App.css';
import TreeBuilder from './components/TreeBuilder';

function App() {
  return (
    <div className="app-container">
       <div className = "vstack">
      <TreeBuilder/>
      <div className = "hstack">
        <div className= "vstack">
          <img src ={john}/>
          <h3>John Mauchly (1946)</h3>
        </div>
        <div className= "vstack">
          <img src ={derrick}/>
          <h3>Derrick Henry Lehmer (1960)</h3>
        </div>

      </div>

     {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </div>
    </div>
  );
}

export default App;
