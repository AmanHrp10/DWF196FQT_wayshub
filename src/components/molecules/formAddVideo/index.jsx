import FormInput from '../../atoms/formInput';
import FileInput from '../../atoms/fileInput';
import Textarea from '../../atoms/textarea';
import Button from '../../atoms/button';
import './formAddVideo.css';

import { Fragment } from 'react';

export default function FormAdd() {
  return (
    <Fragment>
      <h5 className='mb-4 text-white'>Add Video</h5>
      <div className='row mb-3'>
        <div className='col-md-8'>
          <FormInput
            title='Nama'
            type='text'
            customClass='custom-form-control'
          />
        </div>
        <div className='col-md-4'>
          <FileInput title='Attach Thumbnail' type='file' />
        </div>
      </div>
      <Textarea title='Description' customClass='custom-form-control mb-3' />
      <FileInput title='Upload Video' type='file' customClass='mb-5' />
      <Button
        title='Add'
        customClass='btn btn-orange custom-form-control mt-4'
      />
    </Fragment>
  );
}
