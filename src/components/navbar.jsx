import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { LuMessageSquare } from "react-icons/lu";
import { FaGlasses } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";
const Navbar=()=>{
    
    return(
        <>
        
    <nav className="h-[100%]">
      <div className=" flex-col flex mt-3 h-[100%]  justify-start items-center">
       <div >
       <h1 className=" text-3xl font-bold ml-2 mt-3" >OM</h1>
       </div>

       <div className=" flex  mt-[200px] h-[80%] gap-[20px]  flex-col  justify-center items-center  ">
    
        <div >
        <AiOutlineUser style={{fontSize:"2rem"}} />
        
            
        </div>
        <div  className="mt-5">
        <LuMessageSquare style={{fontSize:"2rem"}} />
        </div>
        <div  className="mt-4">
        <FaGlasses style={{fontSize:"2rem"}} />
        </div>
       </div>
       <div>
       <IoCloudDownloadOutline style={{fontSize:"2rem"}} />
       </div>

      </div>
    </nav>

        </>
    )
}

export default Navbar;