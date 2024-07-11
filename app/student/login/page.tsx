"use client"
import { useState,useEffect } from 'react';
import { useRouter } from "next/navigation";
import LoadingButton from '@mui/lab/LoadingButton'
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import studentLoginRequest, {LoginStudentParams} from "../../../callbacks/auth/student/login";
import '../../css/tailwind.css'
import useStore from "../../../store/store";
import { useForm } from "react-hook-form";
export default function Home(){
  const { setToken, setRole, setName, setRCName, setRcId, setUserID } =
  useStore();
  useEffect(() => {
  setToken("");
  setRole(0);
  setName("");
  setRCName("");
  setRcId(0);
  setUserID("");
}, [setToken, setRole, setName, setRCName, setRcId, setUserID]);
const router=useRouter();
  const [sevstatus,setsevstatus]=useState("success");
  const [OpenedSnack,SetOpen]=useState(false);
  const [user,setUser]=useState("");
  const [password,setPassword]=useState("");
  const [loadingstatus,setloadingstatus]=useState(false);
  const [message,setMessage]=useState("");
  const {
    register:registerUser,
    handleSubmit:handleSubmit,
    reset,
    formState: { errors }
  } = useForm<LoginStudentParams>();
  const sendUser = async (data: LoginStudentParams) => {
    data.user_id=user;
    data.password=password;
    data.remember_me=true;
    setloadingstatus(true);
    const response = await studentLoginRequest.post(data);
    if (response.token !== "") {
      console.log(response);
      setToken(response.token);
      setRole(response.role_id);
      reset({
        user_id: "",
        password: "",
    });
    router.push("/");
    }
    setsevstatus(response.token!==""?"success":"error")
    setMessage(response.token!=""?"Logged In":"Wrong credentials");
    SetOpen(true);
    setloadingstatus(false);
    console.log(response.token);
  };
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
        USERNAME
      </label>
      <input {...registerUser("user_id", {
              required: true,
              pattern: /^[^@]+@iitk\.ac\.in$/,
              setValueAs: (value) => value.trim().toLowerCase(),
            })} onChange={(event)=>{setUser(event.currentTarget.value)}} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="username" type="text" placeholder="" />
      {errors.user_id?<span className="text-red-600 text-xs italic">Invalid IITK Email ID</span>:<></>}
    </div>
    <div className="w-full  mt-3 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        PASSWORD
      </label>
      <input {...registerUser("password", {
              required: true
            })} onChange={(event)=>{setPassword(event.currentTarget.value)}} id="password" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" placeholder="******************" />
     {errors.password && (
          <p className="text-red-600 text-xs italic">Incorrect Password</p>
        )} 
    </div>
  </div>
    <div className="flex items-center justify-between">
      <LoadingButton onClick={handleSubmit(sendUser)} loading={loadingstatus} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </LoadingButton>
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
            <Snackbar
        open={OpenedSnack}
        autoHideDuration={3000}
        onClose={()=>{SetOpen(false)}}
      >
        <Alert
    onClose={()=>{SetOpen(false)}}
    severity={sevstatus}
    variant="filled"
    sx={{ width: '100%' }}
  >
   {message}
  </Alert>
      </Snackbar>
        </>
    )
}