import React from 'react';
import groupImg from "../../../assets/Group 2.png"
import vectorImg from "../../../assets/Vector.png"

const Banner = () => {
    return (
        <div className=' items-center space-y-2  flex gap-12 max-w-[1250px] mt-12 mx-auto '> 

 
                 <div className=''>
                <div className='flex items-center  '>
    
                <div className=' w-72 h-48  rounded-r-2xl bg-linear-to-r from-[#632ee3] to-[#9f62f2] -rotate-180'>
                    <img src={groupImg} alt=""  />
                </div>
                <div className=' w-72 h-48 rounded-l-2xl bg-linear-to-l from-[#632ee3] to-[#9f62f2] -rotate-180'>
                    <img src={vectorImg} alt=""  />
                </div>  
            </div>    

           <div className='relative  -mt-30 text-center text-white space-y-3'>
             <h1 className='text-lg'>In-Progress</h1>
            <span className='text-2xl font-bold'>0</span>
           </div>
            
            </div> 
            

            
             



            <div className='mb-3'>
                    <div className='flex items-center '> 

                <div className=' w-72 h-48  rounded-r-2xl bg-linear-to-r from-[#02a53b] to-[#0b5e06] -rotate-180'>
                    <img src={groupImg} alt=""  />
                </div>
                <div className=' w-72 h-48 rounded-l-2xl bg-linear-to-l from-[#02a53b] to-[#0b5e06] -rotate-180'>
                    <img src={vectorImg} alt=""  />
                </div> 

            </div>  

              <div className='relative  -mt-30 text-center text-white space-y-3  '>
             <h1 className='text-lg'>Resolved</h1>
            <span className='text-2xl font-bold'>0</span>
           </div>

            </div>




            
        </div>
    );
};

export default Banner;