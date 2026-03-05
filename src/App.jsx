
import { Suspense } from 'react';
import './App.css'
import Banner from './Components/Navbar/Banner/Banner'
import Main from './Components/Navbar/MaIn/Main'
import Navbar from './Components/Navbar/Navbar'


const customerPromise = fetch("customer.json")
                        .then(res=>res.json());
                        console.log(customerPromise);

function App() {


  return (
    <> 
    <Navbar></Navbar>
    <Banner></Banner>
   <Suspense fallback={<h1 className='text-2xl font-bold'>Loaing Customer......</h1>}>
     <Main customerPromise={customerPromise}></Main>
   </Suspense>

    </>
  )
}

export default App
