import React, { use } from 'react';
import Customer from '../Customer/Customer';

import TaskStatus from './TaskStatus';
import ResolveTask from './ResolveTask';


const Main = ({customerPromise,setcustomerStatus,customerStatus,resolveTask,resolved}) => {
    const customerData =use(customerPromise);
 
    return (
        <div className='mt-22 max-w-[1300px] mx-auto mb-12' > 
           <div className='md:flex justify-evenly items-center' > 

             <div>
                <h1 className='text-2xl font-semibold   '>Customer Tickets</h1>
             <div className='grid  gap-5  md:grid-cols-2'>

                {
                    customerData.map(customers => <Customer customers={customers} 
                     
                       customerStatus={customerStatus}
                        setcustomerStatus={setcustomerStatus}

                        key={customers.id}></Customer>)

                }
             </div>
             </div>

        <div>
            <h1 className='mr-8 text-2xl font-semibold'>Task Status</h1>
           
            {
                customerStatus.map(customers=><TaskStatus customers={customers} 
                    resolveTask={resolveTask}
                  
                   
               
                    key={customers.id}></TaskStatus>)


            } 

             
         <h1 className='mr-1 text-xl font-medium mt-12' > Resolved Task</h1>
         {
            resolved.map(task=><ResolveTask task={task} key={task.id}></ResolveTask>)
         }

        
        </div>

        </div>

   
           </div>
            
       
    );
};

export default Main;