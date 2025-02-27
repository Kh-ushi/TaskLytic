
import "./MainApp.css";

import SideBar from './Sidebar';
import MainNav from './MainNav';
import DashBoard from "./DashBoard";

const MainApp=()=>{
    
    return (
        <div className='MainApp'>
         <MainNav></MainNav>
         <SideBar></SideBar>
         <div className="container">
            <DashBoard></DashBoard>
         </div>
        </div>
    )

}

export default MainApp;

