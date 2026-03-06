import React from 'react';

const TaskStatus = ({customers,resolveTask,}) => {
  
    const{title}=customers; 
    const handleResolved =()=>{
        resolveTask(customers);
       

    } 

    return (
        <div>
            <div className="card card-border bg-base-300 w-70 h-26 text-center mb-4 mt-6">
  <div className="card-body ">
    <h2 className="">{title}</h2>
   
    <div  className="card-actions">
      <button onClick={handleResolved}  className="btn bg-green-600 text-white w-56">Complete Button</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default TaskStatus;