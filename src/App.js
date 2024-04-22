import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <SearchBar/>
        <Header/>
        </div>
     
      </div>
    </div>
  );
}

export default App;
