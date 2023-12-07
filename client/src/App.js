import './App.css';
import { Route } from 'react-router-dom';
import { Landing, Home, About } from './views';

function App() {

  return (
    <div className="App">      
      <Route exact path="/home" render={() => <Home />} />      
      <Route exact path="/" render={() => <Landing />} />      
      <Route exact path="/about" render={() => <About />} />
    </div>
  );
}

export default App;