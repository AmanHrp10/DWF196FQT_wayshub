import './textArea.css';

const TextArea = ({ height, ...rest }) => {
  return (
    <div>
      <textarea
        {...rest}
        className='text'
        style={{ height: height }}
      ></textarea>
    </div>
  );
};

export default TextArea;
