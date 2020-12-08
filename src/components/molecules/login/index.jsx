import FormInput from '../../atoms/formInput';
import Button from '../../atoms/button';
import { Fragment, useContext } from 'react';
import './login.css';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../../context/appContext';

export default function Login() {
  const [state, dispatch] = useContext(AppContext);
  const router = useHistory();

  const handleLogin = () => {
    router.push('/');
    dispatch({
      type: 'LOGIN',
    });
  };
  return (
    <Fragment>
      <div className='wrapper'>
        <div className='wrapper-form'>
          <h3 className='text-white'>Sign In</h3>
          <FormInput type='text' title='Email' customClass='inputLogin' />
          <FormInput
            type='password'
            title='Password'
            customClass='inputLogin'
          />
          <Button
            title='Sign In'
            customClass='inputLogin btn-register mt-3'
            onClick={handleLogin}
          />
        </div>
      </div>
    </Fragment>
  );
}
