import { Link } from 'react-router-dom';

export default function Card({ id, title, channel, image, views, date }) {
  return (
    <div className='card'>
      <Link to={`/detail-video/${id}`}>
        <img src={image} alt={title} className='img-fluid' />
      </Link>
      <div className='card-footer'>
        <p className='card-title text-break'>{title}</p>
        <p>{channel}</p>
        <div className='d-flex detail'>
          <span className=''>
            <img
              src='https://1.bp.blogspot.com/-5R6yDH1CVIc/X7_JkVvviUI/AAAAAAAAHI8/YiuSQ72WD7E-ZG1Gnv7TLl14x8D6Q8_fACLcBGAsYHQ/s12/view%2B1.png'
              alt=''
            />
            {views}
          </span>
          <span className='ml-3'>
            <img
              src='https://1.bp.blogspot.com/-CY8gymKURdE/X7_Kdw8lLqI/AAAAAAAAHJE/R75wZ4DE-hsIoUKfafbyMCsFI7jZbjNVgCLcBGAsYHQ/s12/refresh%2B1.png'
              alt=''
            />
            {date}
          </span>
        </div>
      </div>
    </div>
  );
}
