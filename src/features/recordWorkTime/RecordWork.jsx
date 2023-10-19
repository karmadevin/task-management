import React from 'react'
import Xicon from '../../assets/Xicon.svg'
import './RecordWork.css'
function RecordWork() {
  return (
    <div className='RecordWork-divbox'>
      <div className='RecordWork-nav'>
      <h3>Record your work time</h3><img src={Xicon} alt="X" className='RecordWork-Xsvg' />
      </div>
      <div className='RecordWork-div1'>
      <p>My Projects</p>
      <input type="RecordWork-text" />
      </div>
      <div className='RecordWork-div1'>
      <p>My Tasks</p>
      <input type="RecordWork-text" />
      </div>
      <div className='RecordWork-div1'>
      <p>Date</p>
      <input type="RecordWork-text" />
      </div>
      <div className='RecordWork-datebox'>
      <div><p className='RecordWork-date1'>Date</p>
      <div className='RecordWork-dinput'>
      <input type="RecordWork-text" className='inputA' placeholder='Hrs' />
      <input type="RecordWork-text" className='inputB' placeholder='Mins' /></div></div>
      </div>
      <div className='RecordWork-filterend'><button className='RecordWork-restartbtn'>Close</button>
        <h5 className='RecordWork-filterendp'>Submit</h5>
      </div>
    </div>
  )
}

export default RecordWork