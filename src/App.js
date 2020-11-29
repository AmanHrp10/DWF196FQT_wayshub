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
import { AppContextProvider } from './context/appContext';
import PrivateRoute from './components/privateRoute/PrivateRoute';

// Css

import './App.css';

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Switch>
          {/* <PrivateRoute exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path='/register' component={Register} />
          <PrivateRoute exact path='/add-video' component={AddVideo} />
          <PrivateRoute exact path='/channel/edit' component={EditChannel} />
          <PrivateRoute exact path='/channel/profile' component={MyChannel} />
          <PrivateRoute exact path='/subcription' component={Subscribed} />
          <PrivateRoute exact path='/detai-video/:id' component={DetailVideo} />
          <PrivateRoute
            exact
            path='/content-creator'
            component={ContentCreator}
          /> */}

          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/add-video' component={AddVideo} />
          <Route exact path='/channel/edit' component={EditChannel} />
          <Route exact path='/channel/profile' component={MyChannel} />
          <Route exact path='/subcription' component={Subscribed} />
          <Route exact path='/detail-video/:id' component={DetailVideo} />
          <PrivateRoute
            exact
            path='/content-creator'
            component={ContentCreator}
          />
        </Switch>
      </Router>
    </AppContextProvider>
  );
}

export default App;
