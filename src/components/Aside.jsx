import { Phone,Video,EllipsisVertical} from "lucide-react";
import Profile from "./Profile";
import { FiPaperclip,FiSmile,FiMic} from "react-icons/fi";
import { MdOpacity, MdOutlineCancel } from "react-icons/md";
import { useState } from "react";
import { IoMdChatbubbles } from "react-icons/io";
import { motion } from "framer-motion";

import { CircleArrowDown} from "lucide-react";


function Aside({visible,setVisible,theme}){
    if(!visible) return null;
    return(
        <motion.div 
        initial={{w:0, opacity:0}}
        animate={{w:"auto",opacity:1}}
        transition={{duration:1,ease:"easeInOut"}}
        className="w-1/3">
            <div className={`border-l ${theme=="light" ? "border-gray-300":"border-gray-600"} h-screen`}>
                <div className="p-3">
                    <div className="flex justify-end pb-2">
                        <button onClick={()=>setVisible(false)}>
                            <MdOutlineCancel size={36} className="bg-gray-400 rounded-full cursor-pointer text-white"/>
                        </button>
                        
                    </div>
                    <div className={`rounded-2xl flex flex-col items-center justify-center text-center bg-gray-200 p-16 ${theme=="light" ?"bg-gray-200 ":"bg-gradient-to-b from-gray-600 to-white"}`}>
                        <div>
                            <img src="https://clipart.info/images/ccovers/1516940931ironman-png-marvel.png" alt="" className="w-24 rounded-full border-2 border-white"/>
                            <h2 className="text-2xl">Iron Man</h2>
                            <p>@ironman</p>
                        </div>
                        <div className="flex justify-around w-2/3 p-2 pt-6">
                            <Phone size={38} className="text-black bg-white rounded-full p-1"/>
                            <Video size={38} className="text-black bg-white rounded-full p-1"/>
                            <EllipsisVertical size={38} className="text-black bg-white rounded-full p-1"/>
                        </div>
                    </div>
                    <div className="flex items-center p-10 gap-8">
                        <div className="flex-grow border-t border-gray-300"> 
                        </div>
                        <h3 className="text-lg font-medium">Activity</h3>
                        <div className="flex-grow border-t border-gray-300">
                        </div>
                    </div>
                    <div>
                        <Profile src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/626520bd-e559-423f-af44-1f7370a4f617/dcavlwc-c4d7e67c-be97-4984-8caf-8e37b3da2406.jpg/v1/fill/w_1024,h_1366,q_75,strp/colored_pencil_drawing_of_thor_by_jasminasusak_dcavlwc-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM2NiIsInBhdGgiOiJcL2ZcLzYyNjUyMGJkLWU1NTktNDIzZi1hZjQ0LTFmNzM3MGE0ZjYxN1wvZGNhdmx3Yy1jNGQ3ZTY3Yy1iZTk3LTQ5ODQtOGNhZi04ZTM3YjNkYTI0MDYuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.RYuDb6ZfKTBPBxetD5FbIahcK4NrbXI6WStJSPS2UHU" name="Thor Odin" comment="Commented on" link="Stark Project"/>
                        <div className=" flex justify-end p-3">
                                <div className={`w-1/2 ${theme=="light" ? "bg-blue-100":"bg-blue-400"} p-3 rounded-2xl`}> <p>Hi! Next week we'll start a new project. I'll tell you all the details later</p> </div>
                        </div>
                    </div>
                    <div>
                        <Profile src="https://www.shutterstock.com/image-vector/hulk-art-green-face-angry-600nw-2272942405.jpg" name="Hulk" comment="Commented on" link="7Heros Project"/>
                        <div className=" flex justify-end p-3">
                                <div className={`w-1/2 ${theme=="light" ? "bg-blue-100":"bg-blue-400"}  p-3 rounded-2xl flex gap-2 items-center justify-between`}> 
                                    <div className="flex gap-3">
                                        <img src="https://www.figma.com/community/resource/8f3b2e8c-0d3f-4409-ae0d-42449d61b841/thumbnail" alt="" className="w-10 rounded-full"/>
                                        <div>
                                            <p>Homepage.fig</p>
                                            <p className={`text-sm ${theme=="light" ? "text-gray-400 ":"text-black"}`}>13.4 Mb</p>
                                        </div>
                                    </div>
                                    <CircleArrowDown className="text-blue-600"></CircleArrowDown>
                                </div>
                        </div>
                    </div>
                    <div>
                        <Profile src="https://assets-prd.ignimgs.com/2021/03/23/black-widow-button-1616528351974.jpg" name="Black Widow" comment="Commented on" link="7Heros Project"/>
                    </div>

                    <div className="pt-10">
                        <div className={`flex items-center  w-full ${theme=="light" ? "bg-gray-100":"bg-gray-200"} rounded-xl justify-between px-12 p-1`}>
                            <div className="flex items-center gap-2">
                                <FiPaperclip size={24} className="text-gray-500 cursor-pointer"/>
                                <input type="text" placeholder="Write a message" className="p-3 text-xl text-black outline-none focus:outline-none focus:ring-0 border-none"/>
                            </div>
                            <div className="flex gap-4">
                                <FiSmile size={24} className="text-gray-500 cursor-pointer"/>
                                <FiMic size={24} className="text-gray-500 cursor-pointer"/>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </motion.div>
        // <div className="z-10 ">
        //     <IoMdChatbubbles></IoMdChatbubbles>
        // </div>
    )
}

export default Aside;