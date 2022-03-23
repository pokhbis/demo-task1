
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
<Home></Home>


         {/* <Router>

          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
              </Route>
          </Switch>
        
        </Router> */}
    </div>
  );
}

export default App;
