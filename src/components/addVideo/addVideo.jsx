import { NavLink } from 'react-bootstrap';
import Navbar from '../home/searchNav/navbar';
import FormAdd from '../formAddVideo/formVideo';
import './styleAdd.css';

export default function AddVideo() {
  return (
    <div className='itemNavAdd '>
      <Navbar className='navbarAdd' customClassAddVideo='add-addVideo' />
      <FormAdd />
    </div>
  );
}
