import './style.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className=''>
      <div className='row'>
        <div className='col-md-8'>
          <input type='text' className='form-control' placeholder='Search' />
        </div>

        <div className='col-md-4 nav-right'>
          <span className='ml-5'>
            <img
              src='https://1.bp.blogspot.com/-925zGfmn_cs/X77u8NPF0JI/AAAAAAAAHIY/IAib1bFdzMAogrHk1T7nL1W4w4YIr_IxQCLcBGAsYHQ/s25/video-camera%2B1camera.png'
              alt=''
            />
          </span>
          <Link to='/add-video'>
            <span className='ml-3 text-white'>Add Video</span>
          </Link>
          <span className='ml-5'>
            <img
              src='https://1.bp.blogspot.com/-Q3twslyYr7k/X76Gu50hzyI/AAAAAAAAHH4/G7EaplEHL9A-QRonbv7vIMdyMlM-Sp81wCLcBGAsYHQ/s320/Rectangle%2B11BBQ.png'
              alt=''
            />
          </span>
        </div>
      </div>
    </div>
  );
}
