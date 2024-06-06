import { Link, useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import { useEffect, useState } from "react";
import {useAuth0} from '@auth0/auth0-react'
const Register = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const {loginWithRedirect, isAuthenticated} = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/profile');
    }
  }, [isAuthenticated, navigate]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate('/login');
  }
  const handleOnChange = (e) => {
      setFormData({
        ...formData,
        [e.target.id]:e.target.value
      });
  }
  return (
    <section className="max-w-lg mx-auto p-7 mt-36">
      <h1 className="text-center mb-5 text-3xl">Register here</h1>
      <form className="flex flex-col gap-4 rounded-lg" onSubmit={handleFormSubmit}>
        <input onChange={handleOnChange} id="username" className="bg-slate-300 p-3 font-medium text-black outline-none rounded-xl" type="text" placeholder="Enter your name" />
        <input onChange={handleOnChange} id="email" className="bg-slate-300 p-3 font-medium text-black outline-none rounded-xl" type="email" placeholder="Enter your email" />
        <input onChange={handleOnChange} id="password" className="bg-slate-300 p-3 font-medium text-black outline-none rounded-xl" type="password" placeholder="Enter your password" />
        <button type="submit" className="bg-slate-700 text-white font-bold text-lg hover:bg-slate-900 p-3 rounded-lg">Register</button>
      </form>
      <button onClick={() => loginWithRedirect()} className="bg-white border-sky-200 border mt-2 w-full text-black  text-lg hover:bg-slate-50 p-3 rounded-lg flex justify-center items-center gap-1">Sign up using <FcGoogle className="text-xl"/></button>
      <div className="flex mt-2 items-center">
        <p className="text-md mx-2 text-slate-700">already have an account?</p>
        <Link to={'/login'} className="text-md text-blue-600">login</Link>
      </div>
    </section>
  )
}

export default Register