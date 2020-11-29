import './style.css';
import { Link, useHistory } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { FaRegUser } from 'react-icons/fa';
import { BsFolderSymlink } from 'react-icons/bs';

export default function Navbar({ customClass, customClassAddVideo }) {
  // const [state] = useContext(AppContext);

  const router = useHistory();

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <div className={customClass}>
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
            <span className={customClassAddVideo}>Add Video</span>
          </Link>

          {/* Logo Profile */}

          <Dropdown className='profile'>
            <Dropdown.Toggle className=' logo-profile'>
              <img
                src='https://1.bp.blogspot.com/-Q3twslyYr7k/X76Gu50hzyI/AAAAAAAAHH4/G7EaplEHL9A-QRonbv7vIMdyMlM-Sp81wCLcBGAsYHQ/s320/Rectangle%2B11BBQ.png'
                alt=''
              />
            </Dropdown.Toggle>
            <Dropdown.Menu
              className='menu'
              style={{ position: 'absolute', zIndex: 0 }}
            >
              <Dropdown.Item
                className='text-white'
                onClick={() => router.push('/channel/profile')}
              >
                <span style={{ paddingRight: '15px' }}>
                  <FaRegUser />
                </span>{' '}
                My Profile
              </Dropdown.Item>
              <Dropdown.Item className='text-white' onClick={handleLogout}>
                <span style={{ paddingRight: '15px' }}>
                  <BsFolderSymlink />{' '}
                </span>{' '}
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
