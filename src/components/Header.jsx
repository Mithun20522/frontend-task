import {useAuth0} from '@auth0/auth0-react'
const Header = () => {
    const {user, logout, isAuthenticated, isLoading} = useAuth0();
  return (
    <header className="flex w-full justify-between p-3 items-center sm:p-5 border-b-2 border-black">
        <div className="hidden sm:block text-2xl font-bold text-purple-700">SecondMainTASK</div>
        <div className="flex items-center gap-3">
            <p className='hidden sm:block'>Welcome back !</p>
            <span className="text-xl font-medium uppercase text-green-600">{isLoading ? '...' : isAuthenticated && user.name}</span>
        </div>
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="text-white bg-slate-500 hover:bg-slate-700 px-3 py-1 rounded-md text-sm">Log out</button>
    </header>
  )
}

export default Header