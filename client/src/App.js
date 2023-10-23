import './App.css';
import { Route } from 'react-router-dom';
import { Landing, Home } from './views';

function App() {

  return (
    <div className="App">      
      <Route exact path="/home" render={() => <Home />} />      
      <Route exact path="/" render={() => <Landing />} />      
    </div>
  );
}

export default App;