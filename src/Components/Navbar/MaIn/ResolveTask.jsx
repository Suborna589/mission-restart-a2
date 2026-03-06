import React from 'react';

const ResolveTask = ({task}) => {
  
    const{title}=task;
    return (
             <div className="card card-border bg-base-200 w-70 h-20 text-center mb-4 mt-6">
  <div className="card-body ">
    <h2 className="text-xl">{title}</h2>
   
    
  </div>
</div>
    );
};

export default ResolveTask;