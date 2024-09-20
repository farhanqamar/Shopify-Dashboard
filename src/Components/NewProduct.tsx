import React from 'react'
import Editor from './DescriptionInput'
import ProductCategory from './ProductCategory'
import TrackQuantity from './TrackQuantity'
import Shipping from './Shipping'
import Status from './Status'

const NewProduct = () => {
  return (
    <section className=' lg:space-y-4 flex lg:flex-row flex-col justify-center lg:space-x-3 py-6'>
       <div className='w-full md:w-1/2 lg:w-1/3 space-y-3 m-auto md:m-0'>
       <div className='bg-white shadow-lg rounded-lg p-3 space-y-3 border'>
          <div>
            <div>
                  <h1 className='text-lg font-bold p-2'>Add Product</h1>
              </div>

              <div className=' p-4 rounded-lg space-y-4 border'>
                  <div className='flex flex-col space-y-2 p-2'>
                      <label htmlFor="">Title</label>
                      <input type="text" className='p-2 border border-black rounded-lg'/>
                  </div>
                  <Editor />
              </div>
          </div>

          <div>
            <div className=' p-2 rounded-lg border'>
                  <h1 className='text-base font-semibold'>Media</h1>
                  <input type="file"  className='py-6 px-6'/>
            </div>

            <div>
                <label className='text-sm p-1' htmlFor="">Category</label>
                <div className="p-3 space-x-2 w-full">
                    <ProductCategory />
                </div>
                <p>Determines tax rates and adds metafields to improve search, filters, and cross-channel sales</p>
            </div>
          </div>
        </div>

        <div className='bg-white shadow-lg space-y-3 rounded-lg p-3 border'>
            <div className='border-b py-4'>
            <h1 className='font-bold text-base'>Pricing</h1>
           <div className='flex lg:flex-row flex-col lg:space-x-2 space-y-2'>
           <div className='flex flex-col'>
              <label htmlFor="">Price</label>
              <input type="text" placeholder='Rs 0.00' className='border border-black rounded-md p-1'/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">Compare-at price
              </label>
              <input type="text" placeholder='Rs 0.00' className='border border-black rounded-md p-1'/>
            </div>
           </div>
            <input type="checkbox" />
            <label htmlFor="">Charge tax on this product</label>
            </div>

            <div className='flex lg:flex-row flex-col lg:space-x-3 py-4 space-y-2'>
              <div className='flex flex-col'>
                <label htmlFor="">Cost Per Item</label>
                <input type="text" placeholder='Rs 0.00' className='border border-black rounded-md p-1'/>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="">Profit</label>
                <input type="text" placeholder='--' className='border border-black rounded-md p-1'/>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="">Margin</label>
                <input type="text" placeholder='--' className='border border-black rounded-md p-1'/>
              </div>
            </div>
        </div>

        <div>
            <div className='bg-white shadow-lg p-3 rounded-lg border'>
              
              <div>
                <TrackQuantity />
              </div>
              <div className='space-x-2 px-4'>
                <input type="checkbox" />
                <label htmlFor="">This product has a SKU or barcode</label>
              </div>
            </div>
        </div>

        <div className='bg-white shadow-lg p-3 rounded-lg border'>
          <div>
            <Shipping />
          </div>
        </div>

        <div className='space-y-4 bg-white shadow-lg p-3 rounded-lg border'>
                <div className='space-y-2'>
                    <h1>Search engine listing</h1>
                    <p>Add a title and description to see how this product might appear in a search engine listing</p>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="">Page Title</label>
                  <input type="text"  className='p-1 border border-black rounded-md'/>
                  <p>0-70 character used</p>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="">Meta Description</label>
                  <textarea rows={4}  className='p-1 border border-black rounded-md'/>
                  <p>0-320 character used</p>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="">URL Handle</label>
                  <input type="text"  className='p-1 border border-black rounded-md'/>
                </div>
        </div>
       </div>

       <div className='space-y-3 w-full md:w-1/2 lg:w-1/3 m-auto md:m-0'>
                <div className='bg-white shadow-lg :p-3 rounded-lg border'>
                  <Status/>
                </div>
                <div>
                          <div className='p-3 bg-white shadow-lg rounded-lg border' >
                            <h1>Publishing</h1>
                            <p>
                            Sales Channel
                            </p>
                              <li>Online Store</li>
                              <li>Point of Sale</li>
                                  Point of Sale has not been set up. Finish the remaining steps to start selling in person
                            <p>Market</p>
                            <li>International and Pakistan</li>
                          </div>
                </div>
                <div className='bg-white shadow-lg p-3 rounded-lg border'>
                  <h1>Product Organization</h1>
                  <div className='flex flex-col'>
                    <label htmlFor="">Product type</label>
                    <input type="text" className='border border-black p-1 rounded-md'/>
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor="">Vendor</label>
                    <input type="text" className='border border-black p-1 rounded-md'/>
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor="">Collection</label>
                    <input type="text" className='border border-black p-1 rounded-md'/>
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor="">Tag</label>
                    <input type="text" className='border border-black p-1 rounded-md'/>
                  </div>
                </div>
       </div>

    </section>
  )
}

export default NewProduct;