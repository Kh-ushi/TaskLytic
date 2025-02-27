
import "./SideBar.css";

import{LayoutDashboard,ListTodo,CalendarClock,ChartSpline,Settings,LogOut,ClipboardCheck} from "lucide-react";

const SideBar=()=>{

    const handleClick=(icon)=>{
        console.log(`${icon} has been pressed`);
    }
   
    return(
        <div className="SideBar">
          <div className="upperIcons">
          <ClipboardCheck size={30} color="#c6e9f5" strokeWidth={1.5} />
           <LayoutDashboard size={25} onClick={()=>handleClick("DashBoard")}></LayoutDashboard>
           <ListTodo size={25}></ListTodo>
           <CalendarClock size={25}></CalendarClock>
           <ChartSpline size={25}></ChartSpline>
          </div>

          <div className="lowerIcons">
           <Settings size={25}></Settings>
           <LogOut size={25}></LogOut>
          </div>
          
        </div>
    )
}

export default SideBar;