import { useState } from 'react';
import Editor from '../Components/DescriptionInput';
import ProductCategory from '../Components/ProductCategory';
import TrackQuantity from '../Components/TrackQuantity';
import Shipping from '../Components/Shipping';
import Status from '../Components/Status';
import Country from '../Components/Country'
import { LuPlusCircle } from "react-icons/lu";
import { MdArrowBack } from "react-icons/md";
import { Link } from 'react-router-dom';


const NewProduct = () => {
  const [shipping, setShipping] = useState(false)
  return (
    <section className="sm:px-5 pb-24">
      
      {/* Left Section */}
      <div className='flex justify-center py-5'>
        <div className='flex items-center w-3/4'>
          <Link to={'/product'}><MdArrowBack className='text-xl' /></Link>
          <h1 className="text-lg font-bold p-2">Add Order</h1>
        </div>
      </div>

      <div className='flex flex-col xl:flex-row justify-center gap-4'>

        <div className="w-full xl:w-2/5 space-y-4 m-auto md:m-0">
          <div className="bg-white shadow-lg sm:rounded-lg px-2 py-4 border">
            <div>
              <div className="p-4 rounded-lg space-y-4">
                <div className="flex flex-col space-y-2">
                  <label className='font-semibold' htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="p-2 border border-black rounded-lg"
                  />
                </div>
                <div>
                  <Editor />
                </div>
              </div>
            </div>
            <div className='px-4 '>
              <h1 className="text-base font-semibold py-1">Media</h1>
              <div className="py-2 px-0 rounded-lg border border-dashed border-black text-center">
                <input type="file" className="py-6 px-5" />
              </div>
              <div className='py-3'>
                <label className="font-semibold py-1" htmlFor="category">
                  Category
                </label>
                <div className=" space-x-2 w-full">
                  <ProductCategory />
                </div>
                <p>
                  Determines tax rates and adds metafields to improve search,
                  filters, and cross-channel sales.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-white shadow-lg space-y-3 lg:space-y-0 sm:rounded-lg px-4 py-2 border">
            <div className="border-b py-2">
              <h1 className="font-bold text-base pb-2">Pricing</h1>

              <div className="flex xl:flex-row flex-col gap-2 overflow-x-hidden">
                <div className="flex flex-col">
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    placeholder="Rs 0.00"
                    className="border border-black rounded-md p-1 w-auto"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="comparePrice">Compare-at price</label>
                  <input
                    type="text"
                    placeholder="Rs 0.00"
                    className="border border-black rounded-md p-1 w-auto"
                  />
                </div>
              </div>

              <div className="flex items-center mt-4">
                <input type="checkbox" id="chargeTax" />
                <label htmlFor="chargeTax" className="ml-2">
                  Charge tax on this product
                </label>
              </div>
            </div>

            <div className="flex 2xl:flex-row flex-col gap-4 py-4 overflow-x-hidden">
              <div className="flex flex-col">
                <label htmlFor="cost">Cost Per Item</label>
                <input
                  type="text"
                  placeholder="Rs 0.00"
                  className="border border-black rounded-md p-1 w-auto"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="profit">Profit</label>
                <input
                  type="text"
                  placeholder="--"
                  className="border border-black rounded-md p-1 w-auto"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="margin">Margin</label>
                <input
                  type="text"
                  placeholder="--"
                  className="border border-black rounded-md p-1 w-auto"
                />
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg py-4 sm:rounded-lg border">
            <TrackQuantity />

          </div>

          <div className="bg-white shadow-lg p-3 sm:rounded-lg border">
            <Shipping />

            <div className='border-t flex text-center py-4 space-x-2'>
              <LuPlusCircle onClick={() => setShipping(!shipping)} className='my-0.5 font-bold' />
              <p className='font-semibold text-sm'>Add Customs information</p>

            </div>

            {shipping && (<Country />)}
          </div>

          <div className="space-y-4 bg-white shadow-lg p-3 sm:rounded-lg border">
            <h1 className='font-bold'>Search engine listing</h1>
            <p>
              Add a title and description to see how this product might appear in
              a search engine listing.
            </p>

            <div className="flex flex-col space-y-2">
              <label htmlFor="pageTitle">Page Title</label>
              <input
                type="text"
                className="p-1 border border-black rounded-md"
              />
              <p>0-70 characters used</p>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="metaDescription">Meta Description</label>
              <textarea
                rows={4}
                className="p-1 border border-black rounded-md"
              />
              <p>0-320 characters used</p>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="urlHandle">URL Handle</label>
              <input
                type="text"
                className="p-1 border border-black rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full xl:w-1/3 space-y-4 m-auto md:m-0">
          <div className="bg-white shadow-lg p-3 sm:rounded-lg">
            <Status />
          </div>

          {/* Product Organization Section */}
          <div className="bg-white shadow-lg p-4 sm:rounded-lg border space-y-2">
            <h1 className='font-bold'>Product Organization</h1>
            <div className="flex flex-col space-y-2">
              <label htmlFor="productType">Product type</label>
              <input
                type="text"
                className="border border-black p-1 rounded-md"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="vendor">Vendor</label>
              <input
                type="text"
                className="border border-black p-1 rounded-md"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="collection">Collection</label>
              <input
                type="text"
                className="border border-black p-1 rounded-md"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="tag">Tag</label>
              <input
                type="text"
                className="border border-black p-1 rounded-md"
              />
            </div>
          </div>

          <div className='flex justify-end'>
            <button className='px-4 py-2 rounded-lg bg-black text-white'>Save</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default NewProduct;