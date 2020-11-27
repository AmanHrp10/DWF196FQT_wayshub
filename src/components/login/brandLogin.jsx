import './style.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function BrandLogin() {
  return (
    <div>
      <div className='imgLogin'>
        <img
          src='https://1.bp.blogspot.com/-1ec70FZ__Dw/X74uFh62mQI/AAAAAAAAHHE/l_0AB2XyaAELWWomITOKWetnMPxudlujACLcBGAsYHQ/s320/Group%2B1desLogin.png'
          alt=''
          width='387px'
          height='287px'
        />
        <Link to='/register'>
          <Button variant='warning' className='buttonLogin' size='sm'>
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
}
