import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import AddVideo from './pages/addVideo/addVideo';
import EditChannel from './pages/editchannel/editChannel';

// Css

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register' component={Register} />
        <Route path='/add-video' component={AddVideo} />
        <Route path='/channel/edit' component={EditChannel} />
      </Switch>
    </Router>
  );
}

export default App;
