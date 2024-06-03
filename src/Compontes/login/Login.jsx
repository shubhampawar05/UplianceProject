import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { auth } from "../../fireBase/config";

import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = ({setIsLogin}) => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const navigate = useNavigate()

    const signInfun = async ()=>{
      if(loginEmail!=''&& loginPassword!==''){
        try {
          const userCredential = await signInWithEmailAndPassword (auth, loginEmail, loginPassword);
          const user = userCredential.user;

          console.log( 'form login page',user.email);
          localStorage.setItem('userEmail', user.email)
          toast.dismiss();
          toast.success(' Login successfully', {
            position: "top-right",
            autoClose: 300,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            setIsLogin(false)
            navigate('/')
       } catch (error) {
          console.log(error.message);
          toast.dismiss();
          toast.error(error.message, {
            position: "top-right",
            autoClose: 300,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            
       }

      }else{
        toast.dismiss();
        toast.error('All Fields are Requierd', {
          position: "top-right",
          autoClose: 300,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    }

    return (
        <div className="bg-white rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
          <h2 className="p-3 text-3xl font-bold text-pink-400">Upliance</h2>
          <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
          <h3 className="text-xl font-semibold text-blue-400 pt-2">Sign In!</h3>
          <div className="flex space-x-2 m-4 items-center justify-center">
          <div className="text-xl cursor-pointer border-white">
                  <FaFacebook className="text-white"/>
                  </div>
                  <div className="text-xl cursor-pointer border-white">
                  <FaGithub className="text-white"/>
                  </div>
                  <div className="text-xl cursor-pointer border-white">
                  <FaGoogle className="text-white"/>  
                  </div>
          </div>
          {/* Inputs */}
          <div className="flex flex-col items-center justify-center">
            <input
              type="email"
              value={loginEmail}
              onChange={(e)=>setLoginEmail(e.target.value)}
              className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
              placeholder="Email"
            />
            <input
              type="password"
              value={loginPassword}
              onChange={(e)=>setLoginPassword(e.target.value)}
              className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
              placeholder="Password"
            />
            <button className="rounded-2xl m-2 text-white bg-blue-400 w-2/5 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in" onClick={signInfun}>
              Sign In
            </button>
          </div>
          <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
          <p className="text-blue-400 mt-4 text-sm">Don't have an account?</p>
          <p
            className="text-blue-400 mb-4 text-sm font-medium cursor-pointer"
            onClick={() => setIsLogin(false)}
          >
            Create a New Account?
          </p>
        </div>
      );
}

export default Login