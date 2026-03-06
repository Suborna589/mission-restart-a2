
import { Suspense } from 'react';
import './App.css'
import Banner from './Components/Navbar/Banner/Banner'
import Main from './Components/Navbar/MaIn/Main'
import Navbar from './Components/Navbar/Navbar'
import { useState } from 'react';
import Footer from './Components/Navbar/Footer/Footer';
 import { ToastContainer} from 'react-toastify';


const customerPromise = fetch("customer.json").
                          then(res=>res.json());
                        

function App() { 
 

  const[customerStatus,setcustomerStatus]=useState([]);
  const[resolved,setResolved]=useState([]);


 


  const resolveTask = (task)=>{
    setcustomerStatus((prev)=>
    prev.filter((resol)=> resol.id !== resol.id)
  ); 
 
  setResolved((prev)=>[...prev,task]);

  
  };





   
   
  
  


  return (
    <> 
    <Navbar ></Navbar>
    <Banner  customerStatus={customerStatus}  resolved={resolved}></Banner>
   <Suspense fallback={<h1 className='text-2xl font-bold'>Loaing Customer......</h1>}>
     <Main customerPromise={customerPromise} 
 
    customerStatus={customerStatus}
     setcustomerStatus={setcustomerStatus}
     resolveTask={resolveTask}
     resolved={resolved}
     setResolved={setResolved}
    
     ></Main>
   </Suspense>

   <Footer></Footer>
   <ToastContainer></ToastContainer>

    </>
  )
}

export default App
