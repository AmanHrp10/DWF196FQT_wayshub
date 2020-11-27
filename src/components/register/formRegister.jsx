import './style.css';

export default function FormRegister() {
  return (
    <div className='card-register'>
      <div className='signUp'>
        <div className='container'>
          <h2>Sign Up</h2>
          <input
            type='text'
            className='form-control register'
            placeholder='Email'
          />
          <input
            type='password'
            className='form-control register'
            placeholder='Password'
          />
          <input
            type='text'
            className='form-control register'
            placeholder='Channel name'
          />
          <textarea
            name=''
            placeholder='Channel description'
            id=''
            cols='3'
            rows='3'
            className='form-control register'
          ></textarea>
          <button type='submit' className='btnSignUp btn btn-warning'>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
