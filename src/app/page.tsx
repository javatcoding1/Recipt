'use client'
import Image from 'next/image'
import taxservices from '../../assests/taxservices.webp'
// import Hero from '@/components/Hero'
import { useEffect, useState } from 'react'
import logo from '../../assests/Recipto Logo.jpg'
import all from '../../assests/Filter Icons - All.png'
import data from '@/components/data'
import Data from '@/components/data'
export default function Home() {
   const [selectOffer,setSelectOffer]=useState(true);
   const [selectCoupon,setSelectCoupon]=useState(false);

   const handleOffer=()=>{
    setSelectOffer(true);
    setSelectCoupon(false);
   }
   const handleCoupon=()=>{
    setSelectOffer(false);  
    setSelectCoupon(true);
   }
  return (
    <>
    {/* <Hero /> */}
    <div className='flex flex-col items-center justify-center mt-4'>
     <div className='display relative items-center justify-center mt-4'>
      <Image src={logo} alt="Example Image" className='h-45px w-auto rounded-full' width={100} height={100} />
     </div>
       <h1 className='text-3xl text-center font-bold mb-5'>Recipt.to</h1>
      {/* this is slider section */}
        <div className='bg-white w-50 h-100px rounded-2xl flex items-center justify-center mx-auto mt-5 overflow-hidden'>
      <button className={selectOffer?'bg-purple-500 rounded-2xl text-white p-3 overflow-hidden' : 'bg-white text-black p-3'} onClick={handleOffer} >offers</button>
      <button className={selectCoupon?'bg-purple-500 rounded-2xl text-white p-3 overflow-hidden':'bg-white text-black p-3'} onClick={handleCoupon}>My coupons</button>
      </div>

      {/* card section */}
      {selectOffer ? <>
        <div className='bg-white h-[300px] max-w-[500px] sm:h-[350px]  text-black m-4 rounded-2xl  items-center justify-center'>
          <Image src={taxservices} alt="tax services" className='h-100px w-100px p-4 rounded-2xl ' width={500} height={500} />
          <h2 className='text-2xl font-bold p-1'>Tax Services</h2>
          <p className=' p-1'>14 offers</p>
        </div>
      </> :
      <>
      <div className='mt-4'>coupons section comming soon</div>
      </>}

        <div className='flex flxe-col items-center justify-center gap-2 mt-4 overflow-x-auto px-2 w-full '>
          <div className='flxe items-center justify-center min-w-[80px] bg-white px-2 py-2 rounded-2xl  text-center text-black m-1'>
            <Image src={all} alt='all' className='w-10 h-10' />
            <p>All</p>
            </div>
          <div className='bg-white px-4 py-1 rounded-2xl w-auto text-center text-wrap text-black m-1'>for salaried professional</div>
          <div className='bg-white px-4 py-1 rounded-2xl w-auto text-center text-black m-1'>for business</div>
        </div>
      </div>

       <div className='flex flex-col items-center p-4'>
        <h1 className='text-2xl font-bold mb-4'>Recip.to</h1>
      
       </div>

        <Data/>
     
    </>
  )
}