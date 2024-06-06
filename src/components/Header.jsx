import { useAuth0 } from '@auth0/auth0-react';
import useUserStore from '../store/userStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { user, logout: auth0Logout, isAuthenticated: isAuth0Authenticated } = useAuth0();
  const { currentUser, setCurrentUser, logout: storeLogout } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth0Authenticated && user) {
      setCurrentUser({
        username: user.name,
        email: user.email,
      });
    }
  }, [isAuth0Authenticated, user, setCurrentUser]);

  const handleLogout = () => {
    if (isAuth0Authenticated) {
      auth0Logout({ returnTo: window.location.origin });
    } else {
      storeLogout();
      navigate('/');
    }
  };

  return (
    <header className='flex border p-5 border-black items-stretch justify-between'>
      <div className='text-3xl flex-1 h-full flex items-center'>Logo</div>
      <div className='flex-1 h-full flex items-center justify-between'>
          username
      </div>
      <div className='text-2xl font-semibold flex-1 h-full flex items-center'>Amazone Inc.</div>
      <nav className='flex items-center gap-3 mx-5 flex-1'>
        <p>Notifications</p>
        <p>About</p>
        <p>Settings</p>
      </nav>
    </header>
  );
};

export default Header;
