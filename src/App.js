import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//import componentes
import MiComponente from './components/MiComponente';

function App() {
  let nombre = "Michel Charnay";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {'Bienvenido ' + nombre}
        </p>
        <section className="componentes">
        <MiComponente/>
      </section>
      </header>
    </div>
  );
}

export default App;
