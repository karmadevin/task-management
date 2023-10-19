import "./ClientDashBoard.css";
import Bars1 from './Bars1';
import Bars2 from './Bars2';
import Tabs from './Tabs';
import Clientcard from "./Clientcard";



const ClientDashboard = () => {
  return (
    <div className='dashboardcontent'>
    <div className='superadmindashboard-card'>
  <Clientcard/>
        </div>
        <div className='bars'>
         
            <Bars2/>  
             <Bars1/>
        </div>
        <Tabs/>
        </div>
  )
}

export default ClientDashboard