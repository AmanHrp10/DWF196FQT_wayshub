import './comment.css';

export default function Comment({ img, text }) {
  return (
    <div className='comment'>
      <img src={img} alt='' />
      <p>{text}</p>
    </div>
  );
}
