import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import { FaCircle } from 'react-icons/fa6';

const Customer = ({customers}) => {
    console.log(customers)
    const {id,title,status,description,priority,customer,createdAt} = customers;
    return (
        <div>

    <div className="card bg-base-100 w-[460px] shadow-sm ">
  <div className="card-body">
   <div className='flex justify-between'>
     <h2 className="card-title text-lg font-medium">{title}</h2>
     <span className='flex items-center  bg-green-300 rounded-2xl p-2 gap-1'> <FaCircle className='text-[#02a53b]' />{status}</span>
   </div>
    <p className='text-[#627382] text-base'>{description}</p>
    <div className="card-actions flex justify-between ">
      <div className='flex gap-2 items-center'>
        <h1 className='text-[#627382] text-sm'>#{id}</h1>
        <span className='font-medium text-sm' >{priority}</span>

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