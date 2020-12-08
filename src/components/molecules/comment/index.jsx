import './comment.css';

export default function Comment({ img, text }) {
  return (
    <div className='comments'>
      <img src={img} alt='' />
      <p>{text}</p>
    </div>
  );
}
