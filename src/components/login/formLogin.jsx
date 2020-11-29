import './style.css';
import { useContext } from 'react';
import { AppContext } from '../../context/appContext';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function FormLogin() {
  const [state, dispatch] = useContext(AppContext);
  const router = useHistory();

  const handleLogin = () => {
    router.push('/');
    dispatch({
      type: 'LOGIN',
    });
  };

  return (
    <div className='card-login'>
      <div className='signIn'>
        <div className='container'>
          <h2>Sign In</h2>
          <input
            type='text'
            className='form-control login'
            placeholder='Email'
          />
          <input
            type='password'
            className='form-control login'
            placeholder='Password'
          />

          <button onClick={handleLogin} className='btn1 btn btn-warning'>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
