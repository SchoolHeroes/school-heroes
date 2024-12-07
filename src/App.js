import logo from './logo.svg';
import './App.css';
// import Home from './pages/Home';

function App() {
  return (
   
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Додаток в процесі розробки.
        </p>
        <a
          className="App-link"
          href="https://sites.google.com/view/shkolageroev/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          Школа Героїв
        </a>
      </header>
    </div>
  );
}

export default App;
