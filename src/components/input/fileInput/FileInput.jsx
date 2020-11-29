import React, { useState } from 'react';
import './FileInput.css';

export default function FileInput({ label, icon, width, addClass }) {
  const hiddenFileThumbnail = React.useRef(null);
  const handleThumbnailClick = () => {
    hiddenFileThumbnail.current.click();
  };

  const handleChangeThumbnail = (e) => {
    label = e.target.files[0];
    console.log(label);
  };
  return (
    <div className='input-wrap form-control'>
      <div className='input-file' onClick={handleThumbnailClick}>
        <label htmlFor=''>{label}</label>
        <input
          type='file'
          className='input'
          onChange={handleChangeThumbnail}
          ref={hiddenFileThumbnail}
          style={{ width: `${width}` }}
        />
        <img src={icon} alt='' className={addClass} />
      </div>
    </div>
  );
}
