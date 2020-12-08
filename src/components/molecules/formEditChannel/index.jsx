import { Fragment } from 'react';
import FileInput from '../../atoms/fileInput';
import FormInput from '../../atoms/formInput';
import TextArea from '../../atoms/textarea';
import Button from '../../atoms/button';
import './formEditChannel.css';

export default function FormEditChannel() {
  return (
    <Fragment>
      {/* <div className='row newEditChannel'>
        <div className='col-mg-8'>
          <FormInput />
        </div>
        <div className='col-md-4'>
          <FileInput />
        </div>
      </div>
      <div className='row'>
        <TextArea />
      </div>
      <div className='row'>
        <FileInput />
      </div> */}
      <div className='line1 my-4'>
        <FormInput customClass='inputClass' title='Name Channel' />
        <FileInput title='Upload Cover' />
      </div>
      <TextArea title='Description' customClass='areaClass mb-4' />
      <FileInput title='Upload Photo' />
      <Button title='Save' customClass='buttonEditChannel mt-4' />
    </Fragment>
  );
}
