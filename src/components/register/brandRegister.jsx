import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

export default function BrandRegister() {
  return (
    <div>
      <div className='imgRegister'>
        <img
          src='https://1.bp.blogspot.com/-1ec70FZ__Dw/X74uFh62mQI/AAAAAAAAHHE/l_0AB2XyaAELWWomITOKWetnMPxudlujACLcBGAsYHQ/s320/Group%2B1desLogin.png'
          alt=''
          width='387px'
          height='287px'
        />
        <Link to='/'>
          <Button variant='warning' className='buttonRegister' size='sm'>
            Sign In
          </Button>
        </Link>
      </div>
    </div>
  );
}
