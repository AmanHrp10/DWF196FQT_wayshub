import './style.css';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='wrap'>
        <div className='logo'>
          <img
            src='https://1.bp.blogspot.com/-ZNaBvpDMZSg/X752CxhluaI/AAAAAAAAHHQ/KLisRLh7wiUOvQusbmiULOLf1Fqo3JS4gCLcBGAsYHQ/s320/Icon.png'
            alt=''
          />
        </div>

        <ul>
          <NavLink activeClassName='' to='/'>
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
          <NavLink activeClassName='active' to='/subcription'>
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
          <NavLink activeClassName='active' to='/channel/sab'>
            <li className='listChannel'>
              <span>
                <img
                  src='https://1.bp.blogspot.com/-yNByuqGHAro/X76GeRgrB7I/AAAAAAAAHHw/0aD3oiOqxkUaCgPZ1CLczirkjpcOR7b6ACLcBGAsYHQ/s320/Rectangle%2B10Sab.png'
                  alt=''
                  width='38px'
                  height='38px'
                />
              </span>
              Sab
            </li>
          </NavLink>
          <NavLink activeClassName='active' to='/channel/bbq-montain-boys'>
            <li className='listChannel'>
              <span>
                <img
                  src='https://1.bp.blogspot.com/-Q3twslyYr7k/X76Gu50hzyI/AAAAAAAAHH4/G7EaplEHL9A-QRonbv7vIMdyMlM-Sp81wCLcBGAsYHQ/s320/Rectangle%2B11BBQ.png'
                  alt=''
                />
              </span>
              BBQ Montain Boys
            </li>
          </NavLink>
          <NavLink activeClassName='active' to='/channel/egi-joy'>
            <li className='listChannel'>
              <span>
                <img
                  src='https://1.bp.blogspot.com/-MuRHkt33SOs/X76IG-ECKBI/AAAAAAAAHIE/0G-lPiZYF0kL1Odc2LEmD8memkwDo29dQCLcBGAsYHQ/s38/Rectangle%2B11Egi.png'
                  alt=''
                />
              </span>
              Egi Joy
            </li>
          </NavLink>
          <NavLink activeClassName='active' to='/channel/tahu-coding'>
            <li className='listChannel'>
              <span>
                <img
                  src='https://1.bp.blogspot.com/-MuRHkt33SOs/X76IG-ECKBI/AAAAAAAAHIE/0G-lPiZYF0kL1Odc2LEmD8memkwDo29dQCLcBGAsYHQ/s38/Rectangle%2B11Egi.png'
                  alt=''
                />
              </span>
              Tahu Coding
            </li>
          </NavLink>
          <NavLink to='/channel'>
            <li className='moreChannel'>Show More</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
