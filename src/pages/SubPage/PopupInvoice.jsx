import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./PopupInvoice.css";
import { Switch } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import AttachmentIcon from '@mui/icons-material/Attachment';

function PopupForm({onClose}) {
  return (
    <div className='inv-fix' style={{ padding: '0px 30px',width:"700px" }}>
      <div className='inv-headclose'>
      <h2>Create a New Invoice</h2>
      <CloseIcon onClick={onClose}></CloseIcon>
      </div>
      <form>
        <div className='inv-segone'>
        <label className='inv-label'>Invoice Date*</label>
        <TextField  className='inv-textfield' size="small"/></div>

        <div className='inv-segone'>
        <label className='inv-label'>Due Date*</label>
        <TextField   className='inv-textfield' size="small"/></div>

        <div className='inv-segonelast'>
        <label className='inv-label'>Category*</label>
        <TextField label="Default" className='inv-textfield' size="small"/></div>

        <div className='segtwo'>
        <label className='label'>Additional Information</label>
        <Switch/>
       </div>

       <div className='inv-segthree'>
        <label className='inv-labelthree'>Tags</label>
        <TextField className='inv-textfieldthree' size="small"/></div>

        <div className='inv-segthree'>
        <label className='inv-labelthree'>Notes</label>
        <TextareaAutosize
        className='inv-textarea'
        minRows={10} // Adjust as needed
        aria-label="textarea"
      />
        </div>
        <div className='logoss'>
          <FolderOpenIcon/>
          <div>Attachment</div>
          <ControlPointIcon/>
          <AttachmentIcon/>
        </div>
        <div className='inv-segthree'>
        <label className='inv-labelthree1'>Terms and Conditions</label>
        <TextareaAutosize
        className='inv-textarea'
        minRows={10} // Adjust as needed
        aria-label="textarea"
      />
        </div>
        <div className='logoss'>
          <FolderOpenIcon/>
          <div>Attachment</div>
          <ControlPointIcon/>
          <AttachmentIcon/>
        </div>
        <div className='btns'>
          <button className='btn1'>Close</button>
          <button className='btn2'>Submit</button>
        </div>
        
        
      </form>
    </div>
  );
}

export default PopupForm;
