import './style.css';
import { NavLink, Link } from 'react-router-dom';
import Channels from '../../../API/channel';

export default function Sidebar({ isHome, isSubscribe }) {
  console.log(Channels);
  return (
    <div className='sidebar'>
      <div className='wrap'>
        <Link to='/'>
          <div className='logo'>
            <img
              src='https://1.bp.blogspot.com/-ZNaBvpDMZSg/X752CxhluaI/AAAAAAAAHHQ/KLisRLh7wiUOvQusbmiULOLf1Fqo3JS4gCLcBGAsYHQ/s320/Icon.png'
              alt=''
            />
          </div>
        </Link>

        <ul>
          <NavLink activeClassName={isHome ? 'active' : ''} to='/'>
            <li>
              <span className='icon'>
                <img
                  src='https://1.bp.blogspot.com/-jEd6qdOXWb0/X7_HqNJABpI/AAAAAAAAHIw/JFqCj8nRr6Ep0b3YhJ6jYAEDQUWEoPe_wCLcBGAsYHQ/s25/Vector.png'
                  alt=''
                  to='/'
                />
              </span>
              Home
            </li>
          </NavLink>
          <NavLink
            activeClassName={isSubscribe ? 'active' : ''}
            to='/subcription'
          >
            <li>
              <span className='icon'>
                <img
                  src='https://1.bp.blogspot.com/-q3WhGGfkCtQ/X757romIEeI/AAAAAAAAHHk/CGLVc0Q_z5gdKqsbyVV_QqxqvFrTqDyEQCLcBGAsYHQ/s320/GroupSub.png'
                  alt=''
                />
              </span>
              Subscription
            </li>
          </NavLink>
          <li>
            <h5 style={{ marginTop: '10px', color: '#FF7A00' }}>Channel</h5>
          </li>
          {Channels.map((channel) => (
            <NavLink activeClassName='' to='/content-creator'>
              <li
                className='listChannel'
                key={channel.id}
                style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
              >
                <span>
                  <img src={channel.image} alt='' width='38px' height='38px' />
                </span>
                {channel.name}
              </li>
            </NavLink>
          ))}
          <NavLink to='/channel'>
            <li className='moreChannel'>Show More</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
