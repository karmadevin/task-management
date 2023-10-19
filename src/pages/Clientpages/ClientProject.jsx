import React from 'react'
import ClientProjectCard from './ClientProjectCard';
import CardData from './CardData';
import "./ClientProject";
import ClientUser from './ClientUser';

const ClientProject = () => {
  return (
    <div>
        <div className='Financial-project'>
        {CardData.map(data=>(
         
          <ClientProjectCard
          count={data.count}
          status={data.status}
          color={data.color}
          />
        ))}
    </div>
    <ClientUser/>
    </div>
  )
}

export default ClientProject