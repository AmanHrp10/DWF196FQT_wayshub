import { useRef } from 'react';
import './fileInput.css';

export default function FileInput({ title, icon, customClass }) {
  const hiddenFileInput = useRef(null);
  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded);
  };
  return (
    <div className='input-file-wrapper'>
      <div className='input-file'>
        <label htmlFor='' onClick={handleClick}>
          {title}
        </label>
        <input
          type='file'
          className={`input ${customClass}`}
          ref={hiddenFileInput}
          onChange={handleChange}
        />
        <img src={icon} alt='' />
      </div>
    </div>
  );
}
