import { useState } from 'react'
import arrow_down from '../assets/arrow_down.png'
import '../index.scss'
import { RxEyeOpen } from "react-icons/rx";
import order_main from '../assets/order_main.png'
import AnalyticBar from '../Components/AnalyticBar';
import { FaRegEyeSlash } from "react-icons/fa";
import { useRef, useEffect } from 'react';
import OrderTable from '../Components/OrderTable';


const Order = () => {
    const [moreAction, setMoreAction] = useState(false)
    const [showAnalytic, setShowAnalytic] = useState(false)
    const dropdownRef = useRef<HTMLUListElement>(null);
    
    const openDropDown = () =>{
        setMoreAction(!moreAction)
    }
    const openAnalytic = () =>{
        setShowAnalytic(!showAnalytic)
        setMoreAction(false)
       
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setMoreAction(false); // Close dropdown
            setShowAnalytic(false)
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);


  return (
   <section className='p-10'>
    <div className='w-[100%] flex justify-around py-5'>
        <div className='mr-auto'>
            <p className='text-2xl font-bold text-[#303030]'>Orders</p>
        </div>
        <div className='w-[40%] '>
            <div className='flex flex-col justify-end items-end space-y-3'>
             <button onClick={openDropDown} className='flex bg-[#e3e3e3] hover:bg-[#d4d4d4] text-xs font-bold rounded-lg px-2 py-1 text-[#303030]'>More Action <img src={arrow_down} alt="" className='h-3 w-3 m-1'/> </button>
           
             {moreAction ? 
           ( <ul className='' ref={dropdownRef}>
                <li className='' >
                    <a className='flex text-sm bg-white rounded-lg px-2 py-2 text-[#303030]' href="" onClick={(e) => {e.preventDefault(); openAnalytic(); openDropDown()}} ><RxEyeOpen className='mx-3 text-xl'/>Show Analytic Bar</a>
                </li>
            </ul>
            
            )
           :("")
            }

            {showAnalytic ? 
            (<ul className=''>
                <li className='' >
                    <a className='flex text-sm bg-white roundelg px-2 py-2 text-[#303030]' href="" onClick={(e) => {e.preventDefault(); openAnalytic();}} ><FaRegEyeSlash className='mx-3 text-xl'/>Close Analytic Bar</a>
                </li>
            </ul>)
                :("")}
            </div>
        </div>
    </div>

   <div>
        {showAnalytic ? 
        ( 
        <div><AnalyticBar/> 
        <OrderTable/>
        </div> 
        )
        :("")}   
   </div>
    
    <div className="bg-white py-3 rounded-xl">
            <div>
                <img src={order_main} className="m-auto" />
            </div>
            <div className="text-center">
                <p className="text-base font-semibold">Your Order Will Shown Here</p>
                <p className="text-sm w-full md:w-1/3 m-auto py-4">To get orders and accept payments from customers, you need to select a plan. You’ll only be charged for your plan after your free trial ends.</p>
            </div>
        </div>
            

    
        
          
        
   </section>
  )
}

export default Order
