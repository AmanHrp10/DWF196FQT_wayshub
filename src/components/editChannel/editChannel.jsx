import Navbar from '../home/searchNav/navbar';
import FormEdit from '../formedit/formEdit';
import './editChannel.css';

export default function EditChannel() {
  return (
    <div className='itemNavAdd '>
      <Navbar className='navbarAdd' customClassAddVideo='edit-addVideo' />
      <FormEdit className='' />
    </div>
  );
}
