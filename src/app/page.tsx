"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Navbar from "@/components/navbar"
import img from "@/components/i.jpeg"
import p1 from "@/components/p1.png"
import p2 from "@/components/p2.png"
import Image from 'next/image'
import Fresco from "@/components/FrescoGuard.png"
import Razorpay from "@/components/razorpay.png"
import Form from "@/components/FormCrafter.png"
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
import { FaGraduationCap } from "react-icons/fa";
import Link from "next/link"
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import myLocalPdf from "../components/FinalResume3.1.jpeg"
import  toBuffer  from 'next/image';
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message:' '
  });
  

 
  const handleDownload = async () => {
    try {
      // Assuming myLocalPdf is a StaticImageData from Next.js
      const image = myLocalPdf;
  
      // Create a link element
      const link = document.createElement('a');
  
      // Set the download attribute and create a URL for the image
      link.download = 'my-image.jpg';
      link.href = image.src;
  
      // Append the link to the document
      document.body.appendChild(link);
  
      // Trigger a click on the link to start the download
      link.click();
  
      // Remove the link from the document
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error handling download:', error);
    }
  };
  
  
  
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Use your Email.js service details
  

    const serviceId = 'service_qxpozg8';
    const templateId = 'template_pj0z1jn';
    const userId = 'orUWiGgeMeTze51Qy'; 
    console.log(formData);
    const updatedFormData = {
      ...formData,
      user_email: formData.email,
      user_name: formData.name
    };

    // Send email using Email.js
    emailjs.send(serviceId, templateId, updatedFormData,userId)
      .then((response: EmailJSResponseStatus) => {
        console.log('Email sent successfully:', response);
        // You can perform further actions here, like displaying a success message to the user
        formData.email=" ";
        formData.name=" ";
        formData.message=" ";
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        // Handle errors, e.g., display an error message to the user
      });
     
  };

  const[Value,setValue]=useState(1);
  return (
    <>
    <div className=" flex flex-col home flex-wrap justify-center w-screen min-h-screen items-center  text-white">
      <div className=" flex w-[80%]  relative flex-row   shadow-lg shadow-white bg-neutral-900 h-[80%]">

   
     <div className=" h-[100%] border-r-2 p-2  min-w-[7%] border-gray-600">
     <nav className="h-[100%] ">
      <div className=" flex-col flex  h-[100%]  justify-start items-center">
       <div >
       <h1 onClick={()=>{
          setValue(1)
        }} className=" text-3xl font-bold ml-2 mt-3" >OM</h1>
       </div>

       <div className=" flex  h-[80%] gap-[50px]  flex-col  justify-center items-center  ">
    
        <div onClick={()=>{
          setValue(1)
        }} >
       <AiOutlineUser style={{fontSize:"2rem"}} />
        
            
        </div>
        <div  className="" onClick={()=>{
          setValue(2)
        }}>
       <LuMessageSquare style={{fontSize:"2rem"}} />
        </div>
        <div  className="" onClick={()=>{
          setValue(3)
        }}>
       <FaGlasses style={{fontSize:"2rem"}} />
        </div>
       </div>
       <div>
       <IoCloudDownloadOutline onClick={handleDownload} style={{fontSize:"2rem"}} />
       </div>

      </div>
    </nav>
     </div>
     <div className="border-r-2 border-gray-600 bg-white  text-black h-[100%]  flex flex-col items-center  justify-around  min-w-[35%]">
     <div className=" overflow-hidden   shadow-black max-w-[300px] border-2 shadow-lg  max-h-[300px] bg-white  rounded-full ">
      <Image
      src={img}
      alt=""/>
     </div>
     <div className=" flex-col flex justify-center gap-[20px] items-center" >
      <h1 className="text-3xl font-extrabold">OM SHARMA</h1>
      <h1 className="text-l  text-gray-500">WEB DEVELOPER</h1>
     </div>
    
     <div className=" flex flex-row justify-around w-[100%] items-center ">
     <Link href={"https://www.linkedin.com/in/om-sharma-a8a99527a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"}><CiLinkedin  style={{fontSize:"2rem"}} /></Link>
     <Link href={"https://github.com/OmSharma532004"}><FaGithub style={{fontSize:"2rem"}} /></Link>
     <Link href={"https://www.facebook.com/profile.php?id=100010600173223&mibextid=uzlsIk"}><CiFacebook style={{fontSize:"2rem"}} /></Link>

     </div>
     </div>

    <div className=" flex flex-col  p-4  min-w-[58%]  min-h-[100%]   items-center overflow-scroll">
    {
      Value==1?(<>
      <div className="mx-auto w-[80%]">
      <div className=" w-[100%] flex mt-3  flex-col justify-center items-center gap-[20px]  ">
        <h1 className="text-3xl font-bold  "> About Me</h1>
     
        <p>Experienced Web Developer adept in all stages of advanced web development. Knowledgeable in user interface, testing, and debugging racess ment of deit dies inauding misch. kilon. reinient
Stack and Microsoft SQL Server. Able to effectively self-manage during independent projects, as well as collaborate in a team setting.</p>
      </div>
      <div className="w-[100%]  flex flex-col flex-wrap  justify-center items-center gap-[10px] " >
      <h1 className="text-2xl font-semibold "> Skills</h1>
<div className=" flex text-lg font-semibold flex-row flex-wrap  justify-center items-center gap-[10px] ">
<div className=" w-[150px] bubble-btn  h-[100px] border-2 flex flex-row justify-center items-center"><div>React</div></div>
      <div className=" w-[150px] bubble-btn  h-[100px] border-2 flex flex-row justify-center items-center"><div>Next</div></div>
      <div className="  w-[150px] bubble-btn h-[100px] border-2 flex flex-row justify-center items-center"><div>MongoDb</div></div>
      <div className="  w-[150px] bubble-btn h-[100px] border-2 flex flex-row justify-center items-center"><div>Express</div></div>
      <div className="  w-[150px] bubble-btn h-[100px] border-2 flex flex-row justify-center items-center"><div>Node</div></div>
      <div className="  w-[150px] bubble-btn h-[100px] border-2 flex flex-row justify-center items-center"><div>Tailwind</div></div>
      <div className="  w-[150px] bubble-btn h-[100px] border-2 flex flex-row justify-center items-center"><div>C++</div></div>
      <div className="  w-[150px] bubble-btn h-[100px] border-2 flex flex-row justify-center items-center"><div>SQL</div></div>
      <div className="  w-[150px] bubble-btn h-[100px] border-2 flex flex-row justify-center items-center"><div>AJAX</div></div>
      <div className="  w-[150px] bubble-btn h-[100px] border-2 flex flex-row justify-center items-center"><div>PHP</div></div>
      <div className="  w-[150px] bubble-btn h-[100px] border-2 flex flex-row justify-center items-center"><div>jQuery</div></div>
      <div className="  w-[150px] bubble-btn h-[100px] border-2 flex flex-row justify-center items-center"><div>Bootstrap</div></div>
      <div className="  w-[150px] bubble-btn h-[100px] border-2 flex flex-row justify-center items-center"><div>Python</div></div>
      <div className="  w-[150px] bubble-btn h-[100px] border-2 flex flex-row justify-center items-center"><div>Git</div></div>
      <div className="  w-[150px] bubble-btn h-[100px] border-2 flex flex-row justify-center items-center"><div>Javascript</div></div>


</div>
      </div>
    
      <div className="w-[90%] flex flex-col flex-wrap  justify-center items-center mt-[50px] gap-[20px] ">
      <h1 className="text-2xl font-semibold flex justify-center items-center gap-2"> Education <FaGraduationCap /></h1>
      <div className=" flex-row flex flex-wrap justify-around items-center w-[100%]">
        <div className="w-[45%] border-2  p-2 border-gray-600 ">
          <h1 className="  font-bold">JAYPEE INSTITUTE OF INFORMATION TEACHNOLOGY</h1>
          <p>Btech-CSE</p>
          <p>2022-2026</p>
        </div>
        <div className="w-[45%] border-2  p-2 border-gray-600 ">
          <h1 className="  font-bold">AMITY INTERNATIONAL SCHOOL</h1>
          <p>CLASS-10 :- 92%<br></br>CLASS-12 :- 92%</p>
          <p>2007-2022</p>
        </div>
      </div>
      </div>
     </div>
      
      </>):(
      <>
      {
        Value==2?(<div className=" min-h-[100%] ">
          <div className=" flex min-h-[100%]  items-center justify-center">
          <form onSubmit={handleSubmit} className=" flex bg-white text-black flex-col items-center  shadow-lg  p-4 justify-around gap-[20px]  min-h-[100%]">
    <div className=" flex justify-center items-center gap-[20px]">
    <label htmlFor="name">Name:</label>
      <input className="text-black border-2 border-black " type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

    </div>
     <div className=" flex justify-center items-center gap-[20px]"> 
     <label htmlFor="email">Email:</label>
      <input  className="text-black border-2 border-black "  type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

     </div>
    <div className=" flex justify-center items-center gap-[20px]">
    <label htmlFor="message">Message:</label>
      <textarea  className="text-black border-2 border-black "  id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>

    </div>
      <button  className="border-2 p-2 rounded-lg border-black text-white bg-black" type="submit">Submit</button>
    </form>
          </div>
          
        </div>):(
          <><div className=" mx-auto w-[80%]">
             <div className=" w-[100%] flex mt-3 flex-col justify-center items-center gap-[20px]  ">
             <h1 className="text-3xl font-bold  "> My Projects</h1>
             <div className="flex flex-col mt-4 justify-center items-center gap-[100px]">
          {/* Replace the following with your actual project data */}
        <Link href={"https://study-six-delta.vercel.app"}>  <div className={`project-photo shadow-lg shadow-white `}>
          <Image
      src={p1}
      alt=""/>
        <div className={`project-description `}>
          <h1>Study</h1>
              <p> ED Tech (Education Technology) 

</p>
            </div>
          </div></Link>
          <Link href={"https://survey-form2-seven.vercel.app"}> <div className={`project-photo shadow-lg shadow-white `}>
          <Image
      src={Form}
      alt=""/>
       <div className={`project-description `}>
          <h1>Form Crafter</h1>
              <p> Type Form (Google Form)
</p>
            </div>
          </div></Link> <Link href={"#"}> <div className={`project-photo shadow-lg shadow-white `}>
          <Image
      src={Fresco}
      alt=""/>
       <div className={`project-description `}>
          <h1>Fresco Guard</h1>
              <p> Warehouse Management System Spoilage Detector(ML Based)
</p>
            </div>
          </div></Link>
         <Link href={"https://ds-fincorp.vercel.app/"}> <div className={`project-photo shadow-lg shadow-white `}>
          <Image
      src={p2}
      alt=""/>
       <div className={`project-description `}>
          <h1>DS Fincorp</h1>
              <p> Banking Website
</p>
            </div>
          </div></Link>
          <Link href={"https://razorpay-clone-tailwind-kappa.vercel.app"}> <div className={`project-photo shadow-lg shadow-white `}>
          <Image
      src={Razorpay}
      alt=""/>
       <div className={`project-description `}>
          <h1>Razorpay Clone</h1>
              <p> Clone of Razorpay using Tailwind CSS 
</p>
            </div>
          </div></Link>
         
        
        </div>

             </div>
            </div></>
        )
      }
      </>
      )
     }
    </div>
   


    
  
     
    

      </div>
    </div>

   
    </>
   

  );
}
