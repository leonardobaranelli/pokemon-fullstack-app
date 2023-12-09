import './App.css';
import { Landing, Home, Details, Form, About } from './views';
import NavBar from './components/NavBar/NavBar';
import { Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}   
      <Route exact path="/home" render={() => <Home />} />
      <Route exact path="/create" render={() => <Form />} />
      <Route exact path="/" render={() => <Landing />} />
      <Route exact path="/details/:id" render={() => <Details />} />
      <Route exact path="/about" render={() => <About />} />
    </div>
  );
}

export default App;