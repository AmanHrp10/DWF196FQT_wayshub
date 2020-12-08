import FormInput from '../../atoms/formInput';
import Textarea from '../../atoms/textarea';
import Button from '../../atoms/button';
import { Fragment } from 'react';
import './register.css';

export default function Reqister({ isRegister }) {
  return (
    <Fragment>
      <div className='wrapper'>
        <div className='wrapper-form'>
          <h3 className='text-white'>Sign Up</h3>
          <FormInput type='text' title='Email' customClass='inputRegister' />
          <FormInput
            type='password'
            title='Password'
            customClass='inputRegister'
          />
          <FormInput
            type='text'
            title='Name Channel'
            customClass='inputRegister'
          />
          <Textarea title='Description' customClass='inputRegister' rows='4' />
          <Button
            title='Sign Up'
            customClass='inputRegister btn-register'
            onClick={isRegister}
          />
        </div>
      </div>
    </Fragment>
  );
}
