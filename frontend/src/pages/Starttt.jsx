import React from 'react'
import { useNavigate } from 'react-router-dom';

const Starttt = () => {
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
    <div className='bg-white'>

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

      <h1 className='xl:px-28 md:px-20 sm:px-14 px-8 mt-14 mb-3 font-bold text-5xl max-md:text-center max-md:mb-8 max-md:mt-24'>Start chatting with Iron Shield</h1>
      <h4 className='xl:px-28 md:px-20 sm:px-14 px-8 mb-2 font-medium text-xl text-stone-500 max-md:text-center '>Shield your messages with military-grade encryption, <br className='max-sm:hidden' /> making privacy your top priority.</h4>

{/*       <p className="text-stone-500 xl:px-28 md:px-20 sm:px-14 px-4 mt-80 max-md:mt-60 max-md:text-center py-5"><span className="italic border-b-2 border-stone-500 hover:text-black hover:border-black"><a href="https://yashmavani.tech" target="_blank">Yash Mavani</a></span> Production</p> */}

    </div>
  )
}

export default Starttt;
