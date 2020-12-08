import Button from '../../components/atoms/button';
import { useState } from 'react';
import Register from '../../components/molecules/register';
import Login from '../../components/molecules/login';
import './landing.css';

export default function BrandRegister() {
  let [isRegistered, setIsRegistered] = useState(true);

  const handleClick = () => {
    setIsRegistered((isRegistered = !isRegistered));
  };

  const Registered = () => {
    setIsRegistered((isRegistered = true));
  };
  return (
    <div>
      <div className='imgRegister'>
        <img
          src='https://1.bp.blogspot.com/-1ec70FZ__Dw/X74uFh62mQI/AAAAAAAAHHE/l_0AB2XyaAELWWomITOKWetnMPxudlujACLcBGAsYHQ/s320/Group%2B1desLogin.png'
          alt=''
          width='387px'
          height='287px'
        />

        <Button
          title={isRegistered ? 'Sign Up' : 'Sign In'}
          customClass='landingButtonSignIn'
          onClick={handleClick}
        />
      </div>
      <div className='form'>
        {isRegistered ? <Login /> : <Register isRegister={Registered} />}
      </div>
    </div>
  );
}
