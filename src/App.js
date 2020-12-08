import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import AddVideo from './pages/addVideo';
import EditChannel from './pages/editchannel';
import MyChannel from './pages/myChannel';
import Subscribed from './pages/subscription';
import DetailVideo from './pages/detailVideo';
import Landing from './pages/landing/index.jsx';
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
          <PrivateRoute exact path='/' component={Home} />
          <Route exact path='/landing' component={Landing} />
          <PrivateRoute exact path='/add-video' component={AddVideo} />
          <PrivateRoute exact path='/channel/edit' component={EditChannel} />
          <PrivateRoute exact path='/channel/profile' component={MyChannel} />
          <PrivateRoute exact path='/subcription' component={Subscribed} />
          <PrivateRoute
            exact
            path='/detail-video/:id'
            component={DetailVideo}
          />
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
