
import "./MainApp.css";

import SideBar from './Sidebar';
import MainNav from './MainNav';
import DashBoard from "./DashBoard";
import Projects from "./Projects";

const MainApp=()=>{
    
    return (
        <div className='MainApp'>
         <MainNav></MainNav>
         <SideBar></SideBar>
         <div className="container">
            {/* <DashBoard></DashBoard> */}
            <Projects></Projects>
         </div>
        </div>
    )

}

export default MainApp;

