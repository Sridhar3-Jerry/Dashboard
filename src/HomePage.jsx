import SideBar from "./components/SideBar"
import MainContent from './components/MainContent'
import Aside from "./components/Aside"
import { useState } from "react";

function HomePage(){
    const [visible,setVisible]=useState(false);

    return(
        <div className="flex">
             <SideBar/>
            <MainContent visible={visible} setVisible={setVisible}/>
            <Aside visible={visible} setVisible={setVisible}/>
        </div>
       
    )
}

export default HomePage