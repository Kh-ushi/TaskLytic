import './PartTwo.css';

import DashBoardImg from "../assetsTemporary/DashBoard.svg";

const PartTwo=()=>{
  
    return(
        <div className='PartTwo'>
    
          <p>Streamline your tasks, track your progress, and stay ahead effortlessly.</p>
          <p>Simplify your workflow through Tasklytic</p>

          <div className='main-context'>
              <img src={DashBoardImg}></img>
          </div>

        </div>

    )

}

export default PartTwo;