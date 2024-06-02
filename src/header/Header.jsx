import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";



const Header = () => {

  const {pathname} = useLocation();
  console.log(pathname);

  return (
    <div className=" sticky top-0 left-0 right-0 z-10 w-screen flex justify-between items-center bg-transparent backdrop-blur-3xl shadow-lg py-4 px-12 ">
     <Link to={'/'}> <div className=" cursor-pointer text-black text-xl font-semibold"> LoGo </div></Link>

      <div className="flex gap-12">
        <div className="flex gap-6 font-semibold text-xl ">
          <Link to={"/"}>
            <button className={`${pathname==='/' ? "border-b-2 border-red-600 rounded-md px-1"  : ''} `} >Counter </button>
          </Link>
          <Link to={"/UserData"}>
            <button className={`${pathname==='/UserData' ? "border-b-2 border-red-600 rounded-md px-1"  : ''} `}>UserData</button>
          </Link>
          <Link to={"/Editors"}>
            {" "}
            <button className={`${pathname==='/Editors' ? "border-b-2 border-red-600 rounded-md px-1"  : ''} `} >Editors</button>
          </Link>
        </div>
        <button className=" border text-white px-4 py-1 font-semibold  bg-black">LOGIN</button>{" "}
      </div>
    </div>
  );
};

export default Header;
