import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import { FaCircle } from 'react-icons/fa6';
import { toast } from 'react-toastify';

const Customer = ({customers,setcustomerStatus,customerStatus}) => {
    
   

 
const customerTicketAdd =(customers)=>{

  const exists = customerStatus.find((item)=> item.id === customers.id);

  if(!exists){


   setcustomerStatus([...customerStatus,customers])
   toast("Task Added")
   return;
 }
  
   
}



    const {id,title,status,description,priority,customer,createdAt} = customers;
    return (
        <div>

    <div  onClick={()=>{customerTicketAdd(customers)}}  className="card bg-base-100 w-[430px] shadow-sm ">
  <div className="card-body">
   <div className='flex justify-between'>
     <h2 className="card-title text-lg font-medium">{title}</h2>

    
      <span className={`'flex items-center ${ status == 'In-Progress' ?  " bg-yellow-200 rounded-2xl flex items-center p-2 gap-1" : " bg-green-300 rounded-2xl flex items-center p-2 gap-1"} p-2 gap-1'`}> <FaCircle className={`${ status == 'In-Progress' ? "text-yellow-400" : "text-[#02a53b]" }`} />{status}</span>

   </div>
    <p className='text-[#627382] text-base'>{description}</p>
    <div className="card-actions flex justify-between ">
      <div className='flex gap-2 items-center'>
        <h1 className='text-[#627382] text-sm'>#{id}</h1>
        <span className={`"font-medium text-sm" ${ priority == "HIGH" ? " text-red-600 " : priority == "MEDIUM" ? "text-yellow-400": "text-green-400"}`} >{priority}</span>

      </div> 

      <div className='flex gap-3'>
        <p className='text-[#627382] text-sm'>{customer}</p>
        <span className='flex items-center gap-1 text-[#627382] text-sm'><FaCalendar/>{createdAt}</span>

      </div>
     
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Customer;