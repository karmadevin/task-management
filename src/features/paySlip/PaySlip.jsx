import './Payslip.css'
function PaySlip() {
  return (
    <div className='payslip-form'>
      <div id='payslip-longinput'>
        <p>Username</p>
        <input placeholder='Username'className='payslip-longinput'/>
      </div>

      <div className='payslip-Subdiv'>
        <div className='payslip-Coloumn1'>
          <p>Payslip mont</p>
          <input placeholder='Payslip month'/>
          <p>Loss Of Pay Days</p>
          <input placeholder='Loss Of Pay Days'/>
          <p>Basic Salary</p>
          <input placeholder='Basic Salary'/>
          <p>Over Time Hours</p>
          <input placeholder='Over Time Hours'/>
          <p>Over Time Payment</p>
          <input placeholder='Over Time Payment'/>
          <p>Incentives</p>
          <input placeholder='Incentives'/>
        </div>

        <div className='payslip-Coloumn2'>
          <p>Working Days</p>
          <input placeholder='Working Days'></input>
          <p>Paid Days</p>
          <input placeholder='0'/>
          <p>Leave Deduction</p>
          <input placeholder='0'/>
          <p>Over Time Rate</p>
          <input placeholder='0'/>
          <p>Bonust</p>
          <input placeholder='0'/>
          <p>Payment Date</p>
          <input placeholder='Payment Date'/>
          <div className='payslip-bottom-btn'><button className='payslip-bottom-button'>Submit</button></div>
        </div>

      </div>
    </div>
  )
}

export default PaySlip