import React from 'react'
import Image1 from '../../assets/LoginPageImage/SMS.jpg'
import Image2 from '../../assets/LoginPageImage/SMS2.jpg'
const Login = () => {
  return (
    <div className="flex w-screen flex-wrap text-slate-800">
      <div className="relative hidden h-screen select-none flex-col justify-center bg-blue-600 text-center md:flex md:w-1/2">
        <div className="mx-auto py-16 px-8 text-white xl:w-[40rem]">
          <span className="rounded-full bg-white px-3 py-1 font-medium text-blue-600">New Feature</span>
          <p className="my-6 text-3xl font-semibold leading-10">
            Create animations with <span className="mx-auto block w-56 whitespace-nowrap rounded-lg bg-orange-400 py-2 text-white">drag and drop</span>
          </p>
          <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt necessitatibus nostrum repellendus ab totam.</p>
          <a href="#" className="font-semibold tracking-wide text-white underline underline-offset-4">Learn More</a>
        </div>
        <img className="mx-auto w-11/12 max-w-lg rounded-lg object-cover" src="/images/SoOmmtD2P6rjV76JvJTc6.png" />
      </div>
      <div className="flex w-full flex-col md:w-1/2">
      <div className="flex items-center justify-center pt-12 md:justify-start md:pl-12">
    <img src="https://beta.acetek.edu.sg/wp-content/themes/acetek/assets/images/favicon.png" className='w-10 h-auto' alt="ACETEK Logo" />
    <a href="#" className="text-2xl font-bold text-blue-600 ml-4">ACETEK</a>
</div>

        <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
          <p className="text-center text-3xl font-bold md:text-left md:leading-tight">Login to your account</p>
          <form className="flex flex-col items-stretch pt-8">
            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input type="email" id="login-email" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email" />
              </div>
            </div>
            <div className="mb-4 flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input type="password" id="login-password" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password (minimum 8 characters)" />
              </div>
            </div>
            
            <button type="submit" className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
