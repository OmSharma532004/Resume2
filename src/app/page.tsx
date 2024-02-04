"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Navbar from "@/components/navbar"
import img from "@/components/i.jpeg"
import Image from 'next/image'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { AiOutlineUser } from "react-icons/ai";
import { LuMessageSquare } from "react-icons/lu";
import { FaGlasses } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from 'react';


interface CircularProgressProps {
  value: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ value }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + 1;
        return nextProgress <= value ? nextProgress : value;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [value]);

  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const fillPercentage = (progress / 100) * 100;

  return (
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="50"
        cy="50"
        r={radius}
        strokeWidth="8"
        fill={`rgba(255, 255, 255, ${fillPercentage / 100})`}
      />
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke="white"
        strokeWidth="8"
        fill="transparent"
      />
      <text x="50" y="50" fontSize="15"  textAnchor="middle" dy="8" fill="black">
        {`${progress}%`}
      </text>
    </svg>
  );
};







export default function Home() {
  return (
    <>
    <div className=" flex flex-col home justify-center w-screen min-h-screen items-center  text-white">
      <div className=" flex w-[80%] relative flex-row shadow-lg shadow-white bg-neutral-900 h-[80%]">

   
     <div className=" h-[100%] border-r-2 p-2  w-[7%] border-gray-600">
     <nav className="h-[100%] ">
      <div className=" flex-col flex  h-[100%]  justify-start items-center">
       <div >
       <h1 className=" text-3xl font-bold ml-2 mt-3" >OM</h1>
       </div>

       <div className=" flex  h-[80%] gap-[50px]  flex-col  justify-center items-center  ">
    
        <div >
        <AiOutlineUser style={{fontSize:"2rem"}} />
        
            
        </div>
        <div  className="">
        <LuMessageSquare style={{fontSize:"2rem"}} />
        </div>
        <div  className="">
        <FaGlasses style={{fontSize:"2rem"}} />
        </div>
       </div>
       <div>
       <IoCloudDownloadOutline style={{fontSize:"2rem"}} />
       </div>

      </div>
    </nav>
     </div>
     <div className="border-r-2 border-gray-600 bg-white text-black h-[100%]  flex flex-col items-center  justify-around  w-[35%]">
     <div className=" overflow-hidden   shadow-black w-[300px] border-2 shadow-lg  h-[300px] bg-white  rounded-full ">
      <Image
      src={img}
      alt=""/>
     </div>
     <div className=" flex-col flex justify-center gap-[20px] items-center" >
      <h1 className="text-3xl font-extrabold">OM SHARMA</h1>
      <h1 className="text-l  text-gray-500">WEB DEVELOPER</h1>
     </div>
    
     <div className=" flex flex-row justify-around w-[100%] items-center ">
     <CiLinkedin  style={{fontSize:"2rem"}} />
     <FaGithub style={{fontSize:"2rem"}} />
     <CiFacebook style={{fontSize:"2rem"}} />

     </div>
     </div>
     <div className=" flex flex-col  p-4  w-[58%]  min-h-[100%]  items-center overflow-scroll">
      <div className=" w-[80%] flex mt-3 flex-col justify-center items-center gap-[20px]  ">
        <h1 className="text-3xl font-bold  "> About Me</h1>
     
        <p>Experienced Web Developer adept in all stages of advanced web development. Knowledgeable in user interface, testing, and debugging racess ment of deit dies inauding misch. kilon. reinient
Stack and Microsoft SQL Server. Able to effectively self-manage during independent projects, as well as collaborate in a team setting.</p>
      </div>
      <div className="w-[90%] flex flex-col flex-wrap  justify-center items-center gap-[20px] " >
      <h1 className="text-2xl font-semibold "> Skills</h1>
<div className=" flex flex-row flex-wrap  justify-center items-center gap-[20px]">
<div className=" flex flex-row justify-center items-center"><div>React</div><CircularProgress value={100} /></div>
      <div className=" w-[160px] h-[100px] flex flex-row justify-center items-center"><div>Next</div><CircularProgress value={80} /></div>
      <div className="  w-[160px] h-[100px] flex flex-row justify-center items-center"><div>MongoDb</div><CircularProgress value={100} /></div>
      <div className="  w-[160px] h-[100px] flex flex-row justify-center items-center"><div>Express</div><CircularProgress value={100} /></div>
      <div className="  w-[160px] h-[100px] flex flex-row justify-center items-center"><div>Node</div><CircularProgress value={100} /></div>
      <div className="  w-[160px] h-[100px] flex flex-row justify-center items-center"><div>Tailwind</div><CircularProgress value={95} /></div>
      <div className="  w-[160px] h-[100px] flex flex-row justify-center items-center"><div>C++</div><CircularProgress value={80} /></div>
      <div className="  w-[160px] h-[100px] flex flex-row justify-center items-center"><div>SQL</div><CircularProgress value={90} /></div>
      <div className="  w-[160px] h-[100px] flex flex-row justify-center items-center"><div>AJAX</div><CircularProgress value={95} /></div>
      <div className="  w-[160px] h-[100px] flex flex-row justify-center items-center"><div>PHP</div><CircularProgress value={80} /></div>
      <div className="  w-[160px] h-[100px] flex flex-row justify-center items-center"><div>jQuery</div><CircularProgress value={90} /></div>
      <div className="  w-[160px] h-[100px] flex flex-row justify-center items-center"><div>Bootstrap</div><CircularProgress value={95} /></div>
      <div className="  w-[160px] h-[100px] flex flex-row justify-center items-center"><div>Python</div><CircularProgress value={80} /></div>
      <div className="  w-[160px] h-[100px] flex flex-row justify-center items-center"><div>Git</div><CircularProgress value={90} /></div>
      <div className="  w-[163px] h-[100px] flex flex-row justify-center items-center"><div>Javascript</div><CircularProgress value={90} /></div>


</div>
      </div>
     </div>
    
  
     
    

      </div>
    </div>

   
    </>
   

  );
}
