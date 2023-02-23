import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar/Navbar.js";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Sidebar /> */}
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="App-h2">
          Coming soon!
        </h2>
        <p className="App-text">
          A place to find all of the best group comp for some of the most competitive games!
        </p>
      </header>
    </div>
    </div>
  );
}

export default App;
