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
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-center font-sans w-full">Rest Your Password</h1>
                </div>
                <center>
                <div className="md:w-full lg:w-6/12">
                <div>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        UserName
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="xyz" />
    </div>
   </div>
  <div className="flex items-center justify-between mt-6">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Reset Password
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/student/login">
        Sign In
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