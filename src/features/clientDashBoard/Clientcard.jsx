import "./Clientcard.css"
import taskicon from "../../assets/taskicon.svg"

import proicon from '../../assets/proicon.svg'

function Clientcard() {
  return (
  

    <div className='mainbox'>
    <div className='containerbox'>
      <div className='child1'>
        <img src={proicon} alt="Karmadev.in" className='project'/>
      </div>
      <div className='child2'>
        <p className='child2text'>
          Total Projects
        </p >
        <h5 className='child2text'>
          499
        </h5>
      </div>
    </div>
    <div className='containerbox'>
      <div className='child1'>
        <img src={taskicon} alt="Karmaev.in" className='task'/>
      </div>
      <div className='child2'>
        <p className='child2text'>
          Total Tasaks
        </p >
        <h5 className='child2text'>
          499
        </h5>
      </div>
    </div>
  </div>
  )
}

export default Clientcard;