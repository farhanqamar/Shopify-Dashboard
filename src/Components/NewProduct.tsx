import React from 'react';
import Editor from './DescriptionInput';
import ProductCategory from './ProductCategory';
import TrackQuantity from './TrackQuantity';
import Shipping from './Shipping';
import Status from './Status';

const NewProduct = () => {
  return (
    <section className="lg:space-y-4 flex lg:flex-row flex-col justify-center lg:space-x-3 py-6 space-y-4">
      {/* Left Section */}
      <div className="w-full lg:w-2/4 space-y-6 m-auto md:m-0">
        {/* Add Product Section */}
        <div className="bg-white shadow-lg rounded-lg p-3 space-y-3 border">
          <div>
            <h1 className="text-lg font-bold p-2">Add Product</h1>
            <div className="p-4 rounded-lg space-y-4 border">
              <div className="flex flex-col space-y-2 p-2">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="p-2 border border-black rounded-lg"
                />
              </div>
              <Editor />
            </div>
          </div>
          {/* Media Section */}
          <div>
            <div className="p-2 rounded-lg border">
              <h1 className="text-base font-semibold">Media</h1>
              <input type="file" className="py-6 px-6" />
            </div>
            <div>
              <label className="text-sm p-1" htmlFor="category">
                Category
              </label>
              <div className="p-3 space-x-2 w-full">
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
        <div className="bg-white shadow-lg space-y-3 rounded-lg p-3 border">
          <div className="border-b py-4">
            <h1 className="font-bold text-base">Pricing</h1>

            <div className="flex lg:flex-row flex-col gap-4">
              <div className="flex flex-col flex-grow">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  placeholder="Rs 0.00"
                  className="border border-black rounded-md p-1"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <label htmlFor="comparePrice">Compare-at price</label>
                <input
                  type="text"
                  placeholder="Rs 0.00"
                  className="border border-black rounded-md p-1"
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

          <div className="flex lg:flex-row flex-col gap-4 py-4">
            <div className="flex flex-col flex-grow">
              <label htmlFor="cost">Cost Per Item</label>
              <input
                type="text"
                placeholder="Rs 0.00"
                className="border border-black rounded-md p-1"
              />
            </div>
            <div className="flex flex-col flex-grow">
              <label htmlFor="profit">Profit</label>
              <input
                type="text"
                placeholder="--"
                className="border border-black rounded-md p-1"
              />
            </div>
            <div className="flex flex-col flex-grow">
              <label htmlFor="margin">Margin</label>
              <input
                type="text"
                placeholder="--"
                className="border border-black rounded-md p-1"
              />
            </div>
          </div>
        </div>

        {/* Inventory Section */}
        <div className="bg-white shadow-lg p-3 rounded-lg border">
          <TrackQuantity />
          <div className="flex items-center space-x-2 px-4 mt-4">
            <input type="checkbox" id="sku" />
            <label htmlFor="sku">This product has a SKU or barcode</label>
          </div>
        </div>

        {/* Shipping Section */}
        <div className="bg-white shadow-lg p-3 rounded-lg border">
          <Shipping />
        </div>

        {/* SEO Section */}
        <div className="space-y-4 bg-white shadow-lg p-3 rounded-lg border">
          <h1>Search engine listing</h1>
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
      <div className="space-y-6 w-full md:w-1/2 lg:w-1/3 m-auto md:m-0">
        {/* Status Section */}
        <div className="bg-white shadow-lg p-3 rounded-lg border">
          <Status />
        </div>

        {/* Publishing Section */}
        <div className="bg-white shadow-lg p-3 rounded-lg border">
          <h1>Publishing</h1>
          <p>Sales Channel</p>
          <li>Online Store</li>
          <li>Point of Sale</li>
          <p>Market</p>
          <li>International and Pakistan</li>
        </div>

        {/* Product Organization Section */}
        <div className="bg-white shadow-lg p-3 rounded-lg border">
          <h1>Product Organization</h1>
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
      </div>
    </section>
  );
};

export default NewProduct;
