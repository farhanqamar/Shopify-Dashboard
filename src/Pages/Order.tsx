import { useState } from 'react'
import arrow_down from '../assets/arrow_down.png'
import '../index.scss'
import { RxEyeOpen } from "react-icons/rx";
import order_main from '../assets/order_main.png'
import AnalyticBar from '../Components/AnalyticBar';
import { FaRegEyeSlash } from "react-icons/fa";
import { useRef, useEffect } from 'react';
import OrderTable from '../Components/OrderTable';


// Dummy Data
const columnData = [
    "Column 1", "Column 2", "Column 3", "Column 4", "Column 5", "Column 6", "Column 7", "Column 8", "Column 9", "Column 10", "Column 11", "Column 12", "Column 13", "Column 14",
    "Column 15", "Column 16", "Column 17", "Column 18", "Column 19", "Column 20", "Column 21", "Column 22"
  ];

  const dataRow = [
    ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5", "Data 6", "Data 7", "Data 8", "Data 9", "Data 10", "Data 11", "Data 12",
      "Data 13", "Data 14", "Data 15", "Data 16", "Data 17", "Data 18", "Data 19", "Data 20", "Data 21", "Data 22"
    ],
    // Add more rows as needed
  ];

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
        ( <div><AnalyticBar/> 
        <OrderTable
        columnsData={columnData} // put here First heading row data
        dataRows={dataRow}      // put here all rows data
        /></div> )
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
