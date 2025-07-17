import SideBar from "./components/SideBar"
import MainContent from './components/MainContent'
import Aside from "./components/Aside"
import { useState } from "react";

function HomePage(){
    const [visible,setVisible]=useState(false);
    const [theme,setTheme] = useState("light");

    return(
        <div className={`flex ${theme=="light" ? "text-black bg-white":"text-white bg-black"}`}>
             <SideBar theme={theme} setTheme={setTheme}/>
            <MainContent visible={visible} setVisible={setVisible} theme={theme} setTheme={setTheme}/>
            <Aside visible={visible} setVisible={setVisible} theme={theme} setTheme={setTheme}/>
        </div>
       
    )
}

export default HomePage