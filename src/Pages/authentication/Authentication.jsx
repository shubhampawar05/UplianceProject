import React, { useState } from "react";
import Login from "../../Compontes/login/Login";
import Signup from "../../Compontes/signup/Signup";


const Authentication = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen md:py-2">
      <main className="flex items-center w-full px-2 md:px-20">
        <div className="hidden md:inline-flex flex-col flex-1 space-y-1">
          <p className="text-6xl text-blue-500 font-bold">upliance</p>
          <p className="font-medium text-lg leading-1 text-pink-400">
          Your Key to Insights: Log in First to View the Counter Page
          </p>
        </div>
        {isLogin ? <Login setIsLogin={setIsLogin}/> : <Signup setIsLogin={setIsLogin}/>}
      </main>
    </div>
  );
};

export default Authentication;
