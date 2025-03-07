import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
//import AuthImagePattern from "../components/AuthImagePattern";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, Shield } from "lucide-react";

import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleHomeClick = () => {
    navigate('/');
  }

  return (
    <>


      <div className='flex justify-between items-center py-8 xl:px-28 md:px-20 sm:px-14 px-8'>
        <div className='flex items-center gap-2'>
          <img src="/shield.svg" alt="" className='md:h-8 h-6' />
          <h1 onClick={handleHomeClick} className='text-stone-800 text-xl md:text-3xl font-bold cursor-pointer'>Iron Shield</h1>
          <div className='bg-neutral-200 px-2 md:py-0.5 mt-1 max-md:mt-0.5 font-semibold rounded-xl border border-neutral-800 md:text-base text-xs py-1'>
            <p>v1.2</p>
          </div>
        </div>
        <div className='flex justify-center items-center gap-2 md:gap-4'>
          <button onClick={handleLoginClick} className="btn btn-primary border-white rounded-2xl py-0 max-md:btn-sm max-md:rounded-xl">Login</button>
          <button onClick={handleSignUpClick} className="btn border-stone-800 rounded-2xl py-0 max-md:btn-sm max-md:rounded-xl">Sign Up</button>
        </div>
      </div>

      <div className="flex flex-col">
        {/* Left Side - Form */}
        <div className="flex flex-col justify-center items-center p-3 py-10 sm:py-2">
          <div className="w-full max-w-md space-y-8">
            {/* Logo */}
            <div className="text-center mb-0">
              <div className="flex flex-col items-center gap-2 group">
                <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
                {/* <a href="https://www.fontspace.com/category/crazy"><img src="https://see.fontimg.com/api/rf5/Go4D/YzE1ZWY3NTg2Mzc5NGExYjliM2Q2Mjc2N2RkZGM1MmQudHRm/TU9UT1I/motor.png?r=fs&h=103&w=1250&fg=000000&bg=FFFFFF&tb=1&s=82" alt="Crazy fonts"/></a> */}
                <p className="text-base-content/60">Log in to your account</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-base-content/40" />
                  </div>
                  <input
                    type="email"
                    className={`input input-bordered w-full pl-10`}
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-base-content/40" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    className={`input input-bordered w-full pl-10`}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-base-content/40" />
                    ) : (
                      <Eye className="h-5 w-5 text-base-content/40" />
                    )}
                  </button>
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-full" disabled={isLoggingIn}>
                {isLoggingIn ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Loading...
                  </>
                ) : (
                  "Log in"
                )}
              </button>
            </form>

            <div className="text-center">
              <p className="text-base-content/60">
                Don&apos;t have an account?{" "}
                <Link to="/signup" className="link link-primary">
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </div>
        
      </div>

      {/* <p className="text-stone-500 xl:px-28 md:px-20 sm:px-14 px-4 mt-10"><span className="italic border-b-2 border-stone-500 hover:text-black hover:border-black"><a href="https://yashmavani.framer.website/" target="_blank">Yash Mavani</a></span> Production</p> */}

    </>
  );
};
export default LoginPage;

