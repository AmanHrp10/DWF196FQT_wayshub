import './style.css';

export default function FormLogin() {
  return (
    <div className='card-login'>
      <div className='signIn'>
        <div className='container'>
          <h2>Sign In</h2>
          <input type='text' className='form-control' placeholder='Email' />
          <input
            type='password'
            className='form-control'
            placeholder='Password'
          />
          <button type='submit' className='btn1 btn btn-warning'>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
