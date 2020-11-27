import FileInput from '../input/fileInput/FileInput';
import AttIcon from '../../images/thumbnail.png';
import AddVideo from '../../images/addvideo.png';
import FormInput from '../input/formInput/formInput';
import './style.css';

export default function FormAdd() {
  return (
    <div>
      <h4 className='addTitle'>Add Video</h4>
      <div className='row my-4'>
        <div className='col-md-8'>
          <FormInput
            type='text'
            name=''
            className='form-control title'
            placeholder='Title'
          />
        </div>
        <div className='col-md-4'>
          <FileInput label='Attach Thumbnail' icon={AttIcon} />
        </div>
      </div>
      <div className='row'>
        <div className='col-md'>
          <textarea
            name=''
            cols='20'
            rows='4'
            className='form-control desc'
            placeholder='Description'
          ></textarea>
        </div>
      </div>
      <div className='row my-4'>
        <div className='col-md-4'>
          <FileInput label='Upload Video' icon={AddVideo} />
        </div>
      </div>
      <div className='row'>
        <div className='col-md'>
          <button className='btn btnAdd'> Add</button>
        </div>
      </div>
    </div>
  );
}
