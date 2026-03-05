import React, { use } from 'react';
import Customer from '../Customer/Customer';

const Main = ({customerPromise}) => {
    const customerData =use(customerPromise);
    console.log(customerData);
    return (
        <div className='mt-24 max-w-[1250px] mx-auto' > 
           <div className='flex justify-between'> 

             <div>
                <h1 className='text-2xl font-semibold'>Customer Tickets</h1>
             <div className='grid grid-cols-1 gap-5  md:grid-cols-2'>

                {
                    customerData.map(customers => <Customer customers={customers} 
                        key={customers.id}></Customer>)

                }
             </div>
             </div>
      
      



        <div>
            <h1 className='mr-14 text-2xl font-semibold'>Task Status</h1>
        </div>
           </div>
            
        </div>
    );
};

export default Main;