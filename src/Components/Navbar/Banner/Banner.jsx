import React from 'react';
import groupImg from "../../../assets/Group 2.png"
import vectorImg from "../../../assets/Vector.png"

const Banner = () => {
    return (
        <div> 

            <div className='flex '> 

                <div className=' w-80 h-48 rounded-xl bg-gradient-to-br from-indigo-600'>
                    <img src={groupImg} alt=""  />
                </div>
                <div className=' w-80 h-48 rounded-xl bg-gradient-to-bl from-indigo-600'>
                    <img src={vectorImg} alt="" />
                </div>


            </div> 



            <div>

            </div>




            
        </div>
    );
};

export default Banner;