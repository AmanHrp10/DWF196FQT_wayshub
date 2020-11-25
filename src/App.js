import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/login/Login';
import Register from './pages/register/Register';

// Css

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route path='/register' component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
