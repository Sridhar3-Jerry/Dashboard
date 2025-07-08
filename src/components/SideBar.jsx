import React, { useState } from "react";
import { motion } from "framer-motion";
import logip from "../assets/logip.png"


import {
    Home,
    LayoutGrid,
    ListFilter,
    MoreHorizontal,
    Settings,
    Plus,
    Info,
    Minus,
    ChevronLeft,
    ChevronRight,
    Scale
  } from "lucide-react";

  import { PiArrowFatLineUpFill } from "react-icons/pi";

function SideBar(){
    const [collapsed, setCollapsed] = useState(false);
    const menus = [
        { icon: <Home size={24} />, name: "Home" },
        { icon: <LayoutGrid size={24} />, name: "Projects",icon1:<Plus size={20}/> },
        { icon: <ListFilter size={24} />, name: "Tasks",icon1:<Plus size={20}/>},
        { icon: <MoreHorizontal size={24} />, name: "Team" },
        { icon: <Settings size={24} />, name: "Settings" },
      ];
    return(
        <div className={`h-screen flex flex-col justify-between p-5 border-r border-gray-300 transition-all duration-300 ${collapsed ? 'w-32' : 'w-72'}`}>
            <div className="flex items-center w-full justify-between">
                <div className="flex items-center cursor-pointer">
                    <img src={logip} alt="" className={`transition-all duration-300 ${collapsed ? 'w-10' : 'w-12'}`}/>
                    {!collapsed && <p className="text-3xl font-semibold ml-2">logip</p>}
                </div>
                <motion.button whileHover={{scale:1.2}}
                whileTap={{scale:0.80}}
                 onClick={() => setCollapsed(c => !c)} className="ml-2 p-1 bg-gray-300 rounded-lg cursor-pointer">
                    {collapsed ? <ChevronRight size={20}/> : <ChevronLeft size={20}/>} 
                </motion.button>
            </div>

            {/* Menu Section */}
            <div className="mt-4 ">
                {menus.map((menu,index)=>{
                    return(
                        <div key={index} className="flex items-center ">
                            <div className="flex w-full p-4">
                                <div className="flex  text-gray-600 hover:rounded-lg cursor-pointer p-2 gap-4 items-center hover:bg-gray-200">
                                    <span>{menu.icon}</span>
                                    {!collapsed && <p className="">{menu.name}</p>}
                                </div>
                            </div>
                            {menu.icon1 && !collapsed && (
                                <div className="bg-gray-100 rounded-full">
                                    <span className="cursor-pointer ">{menu.icon1}</span>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>

            {/* upgrade box */}
            {collapsed && <div className="flex justify-center bg-gradient-to-b from-gray-400 to-white rounded-3xl  py-4">
                <p className={`${collapsed ? "block":'hidden'} text-gray-600 `}>
                <PiArrowFatLineUpFill size={40} className=""/></p>
            </div>}
            
            
            { !collapsed && (
                <div className="bg-gradient-to-b from-gray-200 to-white rounded-xl w-60 text-center p-3 ">
                    <h1 className="text-xl font-semibold pt-4">Upgrade to Pro</h1> 
                    <div className="p-5">
                        <p className="text-black/50">Get 1 month free</p>
                        <p className="text-black/50">and unlock</p>
                    </div>
                    <div className="p-5">
                        <button className="bg-blue-300 rounded-full px-6 py-3 cursor-pointer">Upgrade</button>
                    </div> 
                </div>
            )}
            <div className={`flex flex-col gap-3 p-2 ${collapsed ? "pl-5":"pl-5"}`}>
                <div className="flex gap-2 items-center">
                    <Info className="text-gray-400 " size={20}/>
                    {!collapsed && <p>Help & information</p>}
                </div>
                <div className="flex gap-2 items-center">
                    <Minus className="border rounded-full text-gray-400" size={18}/>
                    {!collapsed && <p className="">Log out</p>}
                </div>
            </div>
        </div>
    )
}

export default SideBar;
