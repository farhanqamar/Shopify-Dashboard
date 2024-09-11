import React, { useState } from 'react'

const CreateDiscount = () => {
    const [selectedButton, setSelectedButton] = useState('discountCode');
   
  return (
    <section className='flex justify-center space-x-4 py-6'>
        <div className='w-1/3 space-y-3'>
            <div className=''>
                <h1 className='text-xl font-bold'>Create Product Discount</h1>
            </div>
            <div className='bg-white space-y-4 p-4 rounded-lg'>
                <div className='flex justify-between'>
                    <h1 className='text-base font-semibold'>Amount off products</h1>
                    <h1 className='text-base font-normal text-[#616161]'>Product discount</h1>
                </div>

                <div className='space-y-2 font-bold'>
                    <p>Method</p>
                    <button  onClick={() => setSelectedButton('discountCode')} className={`border ease-in rounded-s-lg p-2 text-black/80 font-semibold ${
                     selectedButton === 'discountCode' ? 'bg-[#cccccc]' : 'bg-white'}`}>Discount Code</button>
                    <button  onClick={() => setSelectedButton('automaticDiscount')} className={`border rounded-e-lg p-2 text-black/80 font-semibold ${
                    selectedButton === 'automaticDiscount' ? 'bg-[#cccccc]' : 'bg-white'}`}>Automatic Discount</button>
                </div>

                <div >
                    <div className='flex flex-col space-y-2 font-bold'>
                        <label htmlFor="">Title</label>
                        <input type="text" className='p-2 border border-black rounded-lg'/>
                    </div>
                    <p>Customers will see this in their cart and at checkout.</p>
                </div>

            </div>
            
            <div className='bg-white rounded-lg space-y-4 p-4 font-bold'>
                <h1 className='text-base font-semibold'>Discount Code</h1>
                <div className='flex flex-col space-y-2'>
                     <label htmlFor="">Code</label>
                    <input type="text" className='p-2 border border-black rounded-lg'/>
                </div>
                
                <div className='flex flex-col space-y-2'>
                     <label htmlFor="">Amount</label>
                    <input type="text" className='p-2 border border-black rounded-lg'/>
                </div>
                    
                <div className='flex flex-col space-y-2'>
                     <label htmlFor="">Expiry Date</label>
                    <input type="text" className='p-2 border border-black rounded-lg'/>
                </div>
                
                <div className='flex flex-col space-y-2'>
                     <label htmlFor="">Usage Count</label>
                    <input type="text" className='p-2 border border-black rounded-lg'/>
                </div>
            </div>
               
            <div className='bg-white rounded-lg space-y-4 p-4 font-bold'>
                <h1 className='text-base font-semibold'>Discount</h1>
                <div className='flex flex-col space-y-2'>
                     <label htmlFor="">Code</label>
                    <input type="text" className='p-2 border border-black rounded-lg'/>
                </div>

                <div className='flex flex-col space-y-2'>
                     <label htmlFor="">Amount</label>
                    <input type="text" className='p-2 border border-black rounded-lg'/>
                </div>
                
                <div className='flex flex-col space-y-2'>
                     <label htmlFor="">Discount Type</label>
                    <input type="text" className='p-2 border border-black rounded-lg'/>
                </div>

                <div className='flex flex-col space-y-2'>
                     <label htmlFor="">Start Date</label>
                    <input type="text" className='p-2 border border-black rounded-lg'/>
                </div>
                    
                <div className='flex flex-col space-y-2'>
                     <label htmlFor="">End Date</label>
                    <input type="text" className='p-2 border border-black rounded-lg'/>
                </div>
                
                <div className='flex flex-col space-y-2'>
                     <label htmlFor="">Applicable Product</label>
                    <input type="text" className='p-2 border border-black rounded-lg'/>
                </div>

                <div className='flex flex-col space-y-2'>
                     <label htmlFor="">Description</label>
                    <textarea rows={4} className='p-2 border border-black rounded-lg'/>
                </div>
            </div>

        </div>
        <div className='space-y-3 md:mt-10'>
            <div className='bg-white rounded-lg p-4 space-y-4 '>
                <h1 className='font-bold text-base'>Summary</h1>
                <div>
                    <h1 className='font-bold text-sm'>Types and Methods</h1>
                    <li>Amount Off Products</li>
                    <li>Code</li>
                </div>
                <div>
                    <h1 className='font-bold text-sm'>Details</h1>
                    <li>Can’t combine with other discounts</li>
                </div>
            </div>
            <div className='bg-white rounded-lg p-4 space-y-4 items-center'>
                <div className='flex justify-between'>
                    <h1 className='font-bold text-sm'>Sale Channel</h1>
                    <h1>0 of 1 selected</h1>
                </div>
                <input type="checkbox" className='mx-2'/>
                <label htmlFor="">Point of sale</label>
            </div>
        </div>
    </section>
  )
}

export default CreateDiscount
