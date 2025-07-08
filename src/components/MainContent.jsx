import { FaCalendarAlt } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { BiSolidDownArrow,BiSolidUpArrow} from "react-icons/bi";
import { RiTimerLine } from "react-icons/ri";
import { BsGraphUp } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import { span, title } from "framer-motion/client";
import { useState } from "react";
import Chart from '../components/Chart'
import { LuChevronDown,LuSquareActivity} from "react-icons/lu";
import { TfiMoreAlt } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";
import { PiTerminalWindow } from "react-icons/pi";
import { Clock3,Dot,ThumbsUp} from "lucide-react";
import { IoMdChatbubbles } from "react-icons/io";

function MainContent({setVisible,visible}){
    const details =[
        {
            icon:<ThumbsUp size={28}/>,
            title: "Finished",
            number:"18",
            UpOrDown:<BiSolidDownArrow/>,
            span:"+8 tasks"
        },
        {
            icon:<RiTimerLine size={28}/>,
            title: "Tracked",
            number:"31h",
            UpOrDown:<BiSolidUpArrow/>,
            span:"+8 tasks"
        },
        {
            icon:<BsGraphUp size={28}/>,
            title: "Efficiency",
            number:"93%",
            UpOrDown:<BiSolidDownArrow/>,
            span:"+8 tasks"
        }
    ];

    const tasks = [
        {
          title: "Product Review for UI8 Market",
          status: "In progress",
          statusColor: "text-orange-500",
          time: "4h",
          icon: <LuSquareActivity size={30}/>,
          iconBg:"bg-blue-100"
        },
        {
          title: "UX Research for Product",
          status: "On hold",
          statusColor: "text-blue-500",
          time: "8h",
          icon: <CiSearch size={30}/>,
          iconBg:"bg-orange-100"
        },
        {
          title: "App design and development",
          status: "Done",
          statusColor: "text-green-500",
          time: "32h",
          icon: <PiTerminalWindow size={30}/>,
          iconBg:"bg-gray-100"
        }
      ];      
 
    
    
    return(
        <div className="w-full p-5 flex flex-col gap-10">
            {/* Header */}
            <div className="flex justify-between items-center px-10 ">
                <div className="">
                    <h1 className="text-6xl font-semibold">Hello, Iron Man</h1>
                    <p className="text-gray-400 text-xl font-light">Track team progress here. You almost reach a goal!</p>
                </div>
                <div className="flex gap-2 items-center">
                    <p>16 May, 2023</p>
                    <p className="bg-gray-300 p-2 rounded-full"><FaCalendarAlt className="" size={24}/></p>
                </div>
            </div>
            <div className="flex w-full border-t border-b border-gray-300 p-5">
                    {details.map((detail,index)=>{
                        return(
                            <div key={index} className={`flex gap-4 w-1/2  items-center px-10 ${detail.title=="Tracked" ? "justify-center border-r border-l border-gray-300":detail.title=="Finished"?"justify-start":"justify-end"}`}>
                                <div>
                                    <p className="bg-gray-300 p-2  rounded-full">
                                        {detail.icon}
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-lg">{detail.title}</p>
                                    <div className="flex items-center gap-2">
                                            <h2 className="text-lg">{detail.number}</h2>
                                            <p className={`text-sm ${detail.title!=="Tracked" ?"text-green-500":"text-red-500"}`}>{detail.UpOrDown}</p>
                                            <span className={`text-sm ${detail.title!=="Tracked" ?"text-green-500":"text-red-500"}`}>{detail.span}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>

                {/* Shart section  */}
            <div className="">
                <div className="flex justify-between px-10">
                    <h2 className="text-2xl">Performance</h2>
                    <div className="flex items-center bg-gray-200 rounded-full p-2 cursor-pointer">
                        <p className="">01-07 May</p>
                        <span><RiArrowDownSLine size={24} className=""/></span>
                    </div>
                </div>
                    <br />
                    <br />
                <div className="bg-white pr-10">
                        <Chart/>
                </div>
            </div>

            {/*  */}
            <div className="flex justify-between px-10">
                <div className="flex gap-2">
                    <h2 className="border-r border-gray-300 px-2 text-2xl">Current Tasks</h2>
                    <span className="text-md">Done 30%</span>
                </div>
                <div className="border border-gray-400 rounded-full flex items-center">
                    <p className="text- p-2">Week</p>
                    <p> <LuChevronDown size={24}/></p>
                </div>
            </div> 
        
            {/* Tasks */}
            <div className="flex flex-col gap-6">
                {tasks.map((task,index)=>{
                    return(
                        <div key={index} className="flex justify-between px-12 gap-10">
                            <div className="flex gap-2 w-1/3 items-center">
                                <p className={`${task.iconBg} rounded-full p-4`}>{task.icon}</p>
                                <h2>{task.title}</h2>
                            </div>
                            <div className="flex text-center items-center w-1/3">
                                <Dot className={`${task.statusColor}`} size={50}/>
                                <p className="">{task.status}</p>
                            </div>
                            <div className="flex w-1/5 gap-3">
                                <Clock3 className="bg-gray-300 rounded-full text-white"/>
                                <p className="">{task.time}</p>
                            </div>
                            <p><TfiMoreAlt/></p>
                        </div>
                    )
                })}

            </div>
            {!visible && <div className="flex justify-end pr-10 ">
                <div className="drop-shadow-lg bg-amber-200 rounded-full shadow-xl">
                        <button onClick={()=>setVisible(true)}>
                            <IoMdChatbubbles className="cursor-pointer  text-gray-400 p-1" size={48}></IoMdChatbubbles>
                        </button>
                </div>
            </div>
            }
            
            
        </div>
    )
}
export default MainContent;