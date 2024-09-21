import React from 'react'
import Editor from './DescriptionInput'
import ProductCategory from './ProductCategory'
import TrackQuantity from './TrackQuantity'
import Shipping from './Shipping'
import Status from './Status'
import { MdArrowBack } from 'react-icons/md'; 

const NewProduct = () => {
  return (
<<<<<<< HEAD
    <section className='flex justify-center lg:space-y-4 lg:space-x-3 py-6 md:px-6'>

      <div className='flex flex-col lg:flex-row justify-center gap-2 lg:justify-center'>
        <div className='w-full lg:w-2/3 xl:w-1/2 space-y-3 m-auto md:m-0'>
          <div className='bg-white shadow-lg md:md:rounded-lg p-3 space-y-3 border'>
            <div>
              <div>
                <h1 className='text-lg font-bold p-2'>Add Product</h1>
              </div>

              <div className=' p-4 md:rounded-lg space-y-4 border'>
                <div className='flex flex-col space-y-2 p-2'>
                  <label htmlFor="">Title</label>
                  <input type="text" className='p-2 border border-black md:rounded-lg' />
                </div>
                <Editor />
              </div>
=======
    <section className='lg:space-y-6 flex lg:flex-row flex-col justify-center lg:space-x-6 py-6 px-4'>
      <div className='w-full md:w-4/5 lg:w-1/2 space-y-6 m-auto md:m-0'>
      <h1 style={{ fontSize: '20px' }} className='text-lg font-bold py-2 flex items-center mr-4'>
        <MdArrowBack />
        <span className='mr-2 px-2'>Add Product</span> 
      </h1>
        <div className='bg-white shadow-lg rounded-lg p-6 space-y-4 border'>
          <div>
            <div className='p-4 rounded-lg space-y-4 border'>
              <div className='flex flex-col space-y-2'>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" className='p-2 border border-black rounded-lg' />
              </div>
              <Editor />
            </div>
          </div>

          <div className='p-4 rounded-lg space-y-4 border'>
            <h1 className='text-base font-semibold'>Media</h1>
            <div className='flex flex-col items-center'>
              <input
                type="file"
                className='py-12 px-24 w-full max-w-md border-dotted border-2 border-gray-300'
              />
              <p className='text-sm text-gray-500 mt-2'>Upload your media files here.</p>
>>>>>>> b162b276c0f61d6f19ee9f4966f502c13960733d
            </div>
          </div>

<<<<<<< HEAD
            <div>
              <div className=' p-2 md:rounded-lg border'>
                <h1 className='text-base font-semibold'>Media</h1>
                <input type="file" className='py-6 px-6' />
              </div>

              <div>
                <label className='text-sm p-1' htmlFor="">Category</label>
                <div className="p-3 space-x-2 w-full">
                  <ProductCategory />
                </div>
                <p>Determines tax rates and adds metafields to improve search, filters, and cross-channel sales</p>
              </div>
=======
          <div className='rounded-lg border'>
            <h1 className='font-bold text-base py-4 px-4'>Category</h1>
            <div className="border-t p-3 w-full">
              <ProductCategory />
            </div>
            <p className="p-4">Determines tax rates and adds metafields to improve search, filters, and cross-channel sales</p>
          </div>
        </div>

        <div className='bg-white shadow-lg rounded-lg p-6 space-y-4 border'>
          <h1 className='font-bold text-base'>Pricing</h1>
          <div className='flex lg:flex-row flex-col lg:space-x-4'>
            <div className='flex flex-col w-full lg:w-1/2'>
              <label htmlFor="price">Price</label>
              <input
                type="text"
                id="price"
                placeholder='Rs 0.00'
                className='border border-black rounded-md p-3 w-full mt-1'
              />
            </div>
            <div className='flex flex-col w-full lg:w-1/2'>
              <label htmlFor="compare-price">Compare-at price</label>
              <input
                type="text"
                id="compare-price"
                placeholder='Rs 0.00'
                className='border border-black rounded-md p-3 w-full mt-1'
              />
            </div>
          </div>
          <div className='space-x-2 px-4 pt-4'>
            <input type="checkbox" id="charge-tax" />
            <label htmlFor="charge-tax">Charge tax on this product</label>
          </div>

          <div className='flex lg:flex-row flex-col px-4 space-x-4'>
            <div className='flex flex-col w-full lg:w-1/3'>
              <label htmlFor="cost-per-item">Cost Per Item</label>
              <input
                type="text"
                id="cost-per-item"
                placeholder='Rs 0.00'
                className='border border-black rounded-md p-3 w-full mt-1'
              />
            </div>
            <div className='flex flex-col w-full lg:w-1/3'>
              <label htmlFor="profit">Profit</label>
              <input
                type="text"
                id="profit"
                placeholder='--'
                className='border border-black rounded-md p-3 w-full mt-1'
              />
            </div>
            <div className='flex flex-col w-full lg:w-1/3'>
              <label htmlFor="margin">Margin</label>
              <input
                type="text"
                id="margin"
                placeholder='--'
                className='border border-black rounded-md p-3 w-full mt-1'
              />
>>>>>>> b162b276c0f61d6f19ee9f4966f502c13960733d
            </div>
          </div>

<<<<<<< HEAD
          <div className='bg-white shadow-lg space-y-3 md:md:rounded-lg p-3 border'>
            <div className='border-b py-4'>
              <h1 className='font-bold text-base'>Pricing</h1>
              <div className='flex lg:flex-row flex-col lg:space-x-2 space-y-2'>
                <div className='flex flex-col'>
                  <label htmlFor="">Price</label>
                  <input type="text" placeholder='Rs 0.00' className='border border-black md:rounded-md p-1' />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="">Compare-at price
                  </label>
                  <input type="text" placeholder='Rs 0.00' className='border border-black md:rounded-md p-1' />
                </div>
              </div>
              <input type="checkbox" />
              <label htmlFor="">Charge tax on this product</label>
            </div>

            <div className='flex flex-col xl:flex-row gap-2'>
              <div className='flex gap-2'>
              <div className=''>
                <label htmlFor="">Cost Per Item</label>
                <input type="text" placeholder='Rs 0.00' className='border border-black md:rounded-md p-1' />
              </div>
              <div className=''>
                <label htmlFor="">Profit</label>
                <input type="text" placeholder='--' className='border border-black md:rounded-md p-1' />
              </div>
              </div>

              <div className=''>
                <label htmlFor="">Margin</label>
                <input type="text" placeholder='--' className='border border-black md:rounded-md p-1' />
              </div>
            </div>
          </div>

          <div>
            <div className='bg-white shadow-lg p-3 md:rounded-lg border'>

              <div>
                <TrackQuantity />
              </div>
              <div className='space-x-2 px-4'>
                <input type="checkbox" />
                <label htmlFor="">This product has a SKU or barcode</label>
              </div>
            </div>
          </div>

          <div className='bg-white shadow-lg p-3 md:rounded-lg border'>
            <div>
              <Shipping />
            </div>
          </div>

          <div className='space-y-4 bg-white shadow-lg p-3 md:rounded-lg border'>
            <div className='space-y-2'>
              <h1>Search engine listing</h1>
              <p>Add a title and description to see how this product might appear in a search engine listing</p>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">Page Title</label>
              <input type="text" className='p-1 border border-black md:rounded-md' />
              <p>0-70 character used</p>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">Meta Description</label>
              <textarea rows={4} className='p-1 border border-black md:rounded-md' />
              <p>0-320 character used</p>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">URL Handle</label>
              <input type="text" className='p-1 border border-black md:rounded-md' />
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/2 xl:w-1/3 space-y-3 m-auto md:m-0'>
          <div className='bg-white shadow-lg :p-3 md:rounded-lg border'>
            <Status />
          </div>
          <div>
            <div className='p-3 bg-white shadow-lg md:rounded-lg border' >
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
          <div className='bg-white shadow-lg p-3 md:rounded-lg border'>
            <h1>Product Organization</h1>
            <div className='flex flex-col'>
              <label htmlFor="">Product type</label>
              <input type="text" className='border border-black p-1 md:rounded-md' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">Vendor</label>
              <input type="text" className='border border-black p-1 md:rounded-md' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">Collection</label>
              <input type="text" className='border border-black p-1 md:rounded-md' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">Tag</label>
              <input type="text" className='border border-black p-1 md:rounded-md' />
            </div>
          </div>
        </div>
=======
        <div className='bg-white shadow-lg rounded-lg p-6 border'>
          <div>
            <TrackQuantity />
          </div>
          <div className='space-x-2 px-4 pt-4'>
            <input type="checkbox" id="sku-barcode" />
            <label htmlFor="sku-barcode">This product has a SKU or barcode</label>
          </div>
        </div>

        <div className='bg-white shadow-lg rounded-lg p-6 border'>
          <Shipping />
        </div>

        <div className='space-y-4 bg-white shadow-lg rounded-lg p-6 border'>
          <div className='space-y-2'>
            <h1 className='font-bold text-base'>Search Engine Listing</h1>
            <p>Add a title and description to see how this product might appear in a search engine listing</p>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="page-title">Page Title</label>
            <input
              type="text"
              id="page-title"
              placeholder='Enter page title'
              className='p-3 border border-black rounded-md mt-1'
            />
            <p>0-70 characters used</p>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="meta-description">Meta Description</label>
            <textarea
              id="meta-description"
              rows={4}
              placeholder='Enter meta description'
              className='p-3 border border-black rounded-md mt-1'
            />
            <p>0-320 characters used</p>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="url-handle">URL Handle</label>
            <input
              type="text"
              id="url-handle"
              placeholder='Enter URL handle'
              className='p-3 border border-black rounded-md mt-1'
            />
          </div>
        </div>
      </div>

      <div className='space-y-6 w-full md:w-1/2 lg:w-1/3 mx-0 my-0'>
        <div className='bg-white shadow-lg rounded-lg p-6 border' style={{ marginTop: '9%' }}>
          <Status />
        </div>
        <div className='bg-white shadow-lg rounded-lg p-4 border space-y-4'>
          <h1 className='text-base font-semibold'>Product Organization</h1>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="product-type" className='text-sm'>Product Type</label>
            <input type="text" id="product-type" className='border border-black rounded-md p-2' />
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="vendor" className='text-sm'>Vendor</label>
            <input type="text" id="vendor" className='border border-black rounded-md p-2' />
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="collection" className='text-sm'>Collection</label>
            <input type="text" id="collection" className='border border-black rounded-md p-2' />
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="tag" className='text-sm'>Tag</label>
            <input type="text" id="tag" className='border border-black rounded-md p-2' />
          </div>
        </div>
>>>>>>> b162b276c0f61d6f19ee9f4966f502c13960733d
      </div>
    </section>
  )
}

export default NewProduct