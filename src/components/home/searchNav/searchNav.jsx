import { Link } from 'react-router-dom';
import './style.css';

export default function SearchNav() {
  return (
    <div className='container'>
      <div className='navbar'>
        <div className='item'>
          <div className='search'>
            <input type='text' className='form-control' placeholder='Search' />
          </div>
        </div>
        <div className='item'>
          <div className='camera'>
            <img
              src='https://1.bp.blogspot.com/-925zGfmn_cs/X77u8NPF0JI/AAAAAAAAHIY/IAib1bFdzMAogrHk1T7nL1W4w4YIr_IxQCLcBGAsYHQ/s25/video-camera%2B1camera.png'
              alt=''
            />
          </div>
          <div className='addVideo'>
            <Link to='/add-video'>
              <span>Add Video</span>
            </Link>
          </div>
        </div>
        <div className='item'>
          <div className='logoChannel'>
            <img
              src='https://1.bp.blogspot.com/-Q3twslyYr7k/X76Gu50hzyI/AAAAAAAAHH4/G7EaplEHL9A-QRonbv7vIMdyMlM-Sp81wCLcBGAsYHQ/s320/Rectangle%2B11BBQ.png'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
}
