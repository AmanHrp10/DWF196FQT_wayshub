import './style.css';
import Register from '../../pages/register/Register';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

export default function Brand() {
  return (
    <div>
      <div className='img'>
        <img
          src='https://1.bp.blogspot.com/-1ec70FZ__Dw/X74uFh62mQI/AAAAAAAAHHE/l_0AB2XyaAELWWomITOKWetnMPxudlujACLcBGAsYHQ/s320/Group%2B1desLogin.png'
          alt=''
        />
        <Router>
          <Link to='/register'>
            <Button variant='warning' className='button' size='sm'>
              Sign Up
            </Button>
          </Link>
          <Switch>
            <Route path='/register'>
              <Register />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}
