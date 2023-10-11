import React from 'react';
import "./Leftcon.css";

const Leftcon = () => {
  return (
    <div className='left'>
        <p className='bella'>Bella Bags</p>
        <hr/>
        <div className='bella1'>
        <div className='bellahead'>Client Name</div>
        <p className='bellahead1'>Bella Shoes & Bags</p>

        <div className='bellahead'>Telephone</div>
        <p className='bellahead1'>1234567890</p>

        <div className='bellahead'>Account Owner</div>
        <p>Judith Grant</p>
        
        <div className='bellahead'>Category</div>
        <p className='default'>Default</p>

        <div className='bellahead'>Account Status</div>
        <p className='Active'>Active</p>

        <div className='bellahead'>Tags</div>
        <p className='Design'>UX/UI Design</p>
        </div>
        <hr/>
        <div className='bella2'>
            <div className='fle'>
                <p className='p11'>Invoices</p>
                <p className='p1'>$0.00</p>
            </div>
            <div className='fle'>
                <p className='p11'>Invoices</p>
                <p className='p2'>$0.00</p>
            </div>
            <div className='fle'>
                <p className='p11'>Completed Projects</p>
                <p className='p3'>0</p>
            </div>
            <div className='fle'>
                <p className='p11'>Open Projects</p>
                <p className='p4'>0</p>
            </div>
        </div>
        <hr/>
<div className='bella3'>
<div className='bellahead'>Address</div>
<p className='bellahead1'>10 Septa Drive Rochester</p>
</div>
        
    </div>
  )
}

export default Leftcon