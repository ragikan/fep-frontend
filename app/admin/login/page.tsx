"use client"
import '../../css/tailwind.css'
export default function Home(){
    return (
        <>
            <div style={{backgroundColor:'rgb(249, 250, 251)'}} className="w-full p-2">
               <div className="w-full">
                <center><img className='h-auto max-w-full' src="../images/logo.png" /></center>
                </div>
                <div className="w-full m-2">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-center font-sans w-full">Sign In To Your Account</h1>
                </div>
                <center>
                <div className="md:w-full lg:w-6/12">
                <div>
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        ADMIN USERNAME
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
    </div>
    <div className="w-full  px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        PASSWORD
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="******************" />
    </div>
  </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/auth/signup">
        Sign Up
      </a>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/auth/forgot-password">
        Forgot Password?
      </a>
    </div>
  </form>
</div>
                </div>
                </center>
            </div>
        </>
    )
}