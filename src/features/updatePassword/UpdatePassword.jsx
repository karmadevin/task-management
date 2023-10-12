import React from 'react'
import PaswordEdit from'../../assets/PaswordEdit.svg'
import Xicon from'../../assets/Xicon.svg'
import './UpdatePassword.css'
function UpdatePassword() {
  return (
    <><div>
      <div className='password-nav'>
        <div >
          <h3>Update Password</h3>
        </div>
        <div>
       <img src={Xicon} alt="X" className='password-x' />
        </div>
      </div>
<img src={PaswordEdit} alt="PaswordEdit" className='Passwordedit' />
<p className='password-bottomp'>Change Your password. Minimum of 6 characters</p>
<div className='password-inputbox'>
  <input type="text" placeholder='Password' className='password-inputa'/>
  <input type="text" placeholder='Confirm Password'className='password-inputb'/>
</div>
<div className='password-csbutton'>
<button className='password-bt1'>Close</button>
<button className='password-bt2'>Submit</button>
</div>
    </div></>
  )
}

export default UpdatePassword