import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { resetPassword } = useAuth0();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword({
        email,
      });
      setMessage('Password reset email sent. Please check your inbox.');
    } catch (error) {
      setMessage('An error occurred while sending the reset email.');
      console.error('Error sending reset password email:', error);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h2 className='text-xl font-medium mb-5'>Forgot Password</h2>
      <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            className='bg-slate-300 p-2 w-full rounded-md outline-none'
            placeholder='enter email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button className='bg-slate-500 hover:bg-slate-700 p-2 text-white rounded-lg' type="submit">Reset Password</button>
        <Link to={'/login'} className='bg-slate-500 hover:bg-slate-700 mt-2 p-2 rounded-md text-center text-white font-semibold'>Go back</Link>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
