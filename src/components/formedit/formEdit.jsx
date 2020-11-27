import FormInput from '../input/formInput/formInput';
import FileInput from '../input/fileInput/FileInput';
import GaleryThumb from '../../images/galery.png';
import './formEdit.css';

export default function FileEdit() {
  return (
    <div>
      <h4 className='editTitle'>Edit Channel</h4>
      <div className='row my-4'>
        <div className='col-md-8'>
          <FormInput
            type='text'
            className='form-control title'
            placeholder='Name Channel'
          />
        </div>
        <div className='col-md-4'>
          <FileInput label='Upload Cover' icon={GaleryThumb} />
        </div>
      </div>
      <div className='row'>
        <div className='col-md'>
          <textarea
            name=''
            className='form-control desc'
            id=''
            cols='30'
            rows='6'
            placeholder='Description'
          ></textarea>
        </div>
      </div>
      <div className='row my-4'>
        <div className='col-md'>
          <FileInput label='Upload Foto' icon={GaleryThumb} />
        </div>
      </div>
      <div className='row'>
        <div className='col-md'>
          <button className='btn btnEdit'>Save</button>
        </div>
      </div>
    </div>
  );
}
