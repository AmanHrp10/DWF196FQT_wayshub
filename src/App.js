import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import AddVideo from './pages/addVideo/addVideo';
import EditChannel from './pages/editchannel/editChannel';
import MyChannel from './pages/myChannel/myChannel';
import Subscribed from './components/subscribed/subscribe';
import DetailVideo from './components/detailVideo/detailVideo';
import ContentCreator from './pages/contentCreator/contentCreatorPage';

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
        <Route path='/channel/profile' component={MyChannel} />
        <Route path='/subcription' component={Subscribed} />
        <Route path='/detail-video' component={DetailVideo} />
        <Route path='/content-creator' component={ContentCreator} />
      </Switch>
    </Router>
  );
}

export default App;
