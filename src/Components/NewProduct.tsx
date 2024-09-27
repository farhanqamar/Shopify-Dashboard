import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LuPlusCircle } from "react-icons/lu";
import { MdArrowBack } from "react-icons/md";
import { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { FaCheck } from "react-icons/fa";


// Product Categories
const productCategories = [
  { name: 'Electronics', code: 'ELEC' },
  { name: 'Fashion', code: 'FASH' },
  { name: 'Home & Kitchen', code: 'HOME' },
  { name: 'Beauty & Personal Care', code: 'BEAUTY' },
  { name: 'Sports & Outdoors', code: 'SPORTS' },
  { name: 'Toys & Games', code: 'TOYS' },
  { name: 'Automotive', code: 'AUTO' },
  { name: 'Books', code: 'BOOKS' },
  { name: 'Health & Wellness', code: 'HEALTH' },
  { name: 'Baby Products', code: 'BABY' },
  { name: 'Office Supplies', code: 'OFFICE' },
  { name: 'Music Instruments', code: 'MUSIC' },
  { name: 'Pet Supplies', code: 'PET' },
  { name: 'Groceries', code: 'GROC' },
  { name: 'Jewelry & Watches', code: 'JEWEL' },
  { name: 'Furniture', code: 'FURN' },
  { name: 'Stationery', code: 'STAT' },
  { name: 'Garden & Outdoor', code: 'GARDEN' },
  { name: 'Video Games', code: 'VIDEO' },
  { name: 'Computers & Accessories', code: 'COMP' },
];

// Editor Component for Product Description
const Editor = () => {
  const editorRef = useRef(null);
  const toolbarRef = useRef(null);
  const quillInstance = useRef<Quill | null>(null); // Properly type the ref

  useEffect(() => {
    if (editorRef.current && toolbarRef.current && !quillInstance.current) {
      const toolbarOptions = [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline'],        // Bold, italic, underline
        [{ 'color': [] }, { 'background': [] }], // Color options
        [{ 'align': [] }],                      // Text alignment
        ['blockquote', 'code-block'],           // Blockquote, code block
        [{ 'list': 'ordered' }, { 'list': 'bullet' }], // Ordered, unordered list
        [{ 'indent': '-1' }, { 'indent': '+1' }], // Indent, outdent
        ['image', 'video'],                     // Insert image, video
        ['clean']                               // Remove formatting
      ];

      quillInstance.current = new Quill(editorRef.current, {
        theme: 'snow',
        modules: { toolbar: toolbarRef.current },
      });
    }

    return () => {
      if (quillInstance.current) {
        quillInstance.current = null;
      }
    };
  }, []);

  return (
    <section>
      {/* <h1 className='font-semibold'>Description</h1> */}
      <div className="h-auto rounded-lg shadow-md">
        <div ref={toolbarRef} id="toolbar" className='rounded-t-lg'>
          <span className="ql-formats">
            <select className="ql-header">
              <option value="1"></option>
              <option value="2"></option>
              <option selected></option>
            </select>
            <button className="ql-bold"></button>
            <button className="ql-italic"></button>
            <button className="ql-underline"></button>
          </span>
          <span className="ql-formats">
            <select className="ql-color"></select>
            <select className="ql-background"></select>
          </span>
          <span className="ql-formats">
            <button className="ql-list" value="ordered"></button>
            <button className="ql-list" value="bullet"></button>
            <button className="ql-indent" value="-1"></button>
            <button className="ql-indent" value="+1"></button>
          </span>
          <span className="ql-formats">
            <button className="ql-blockquote"></button>
            <button className="ql-code-block"></button>
          </span>
          <span className="ql-formats">
            <button className="ql-image"></button>
            <button className="ql-video"></button>
            <button className="ql-clean"></button>
          </span>
        </div>
        <div ref={editorRef} className="h-auto rounded-b-lg"></div>
      </div>
    </section>
  );
};

// Track Quantity Component
const TrackQuantity = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [barCode, setBarCode] = useState(false)

  const openBarCode = () => {
    setBarCode(!barCode)
  }
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <section>
      <div className='bg-white rounded-xl px-4 space-y-2' >
        <h1 className='font-bold text-base'>Inventory</h1>
        <div className='border-b space-y-2'>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            id="toggleCheckbox"
          />
          <label htmlFor="toggleCheckbox" style={{ marginLeft: '8px' }}>
            Quality Track
          </label>
          <div className=''>
            <h1 className='font-bold'>Quality</h1>
          </div>
        </div>


        {isChecked && (
          <div className='flex space-x-2'>
            <input
              type="checkbox"
            />
            <label htmlFor="">Continue selling when out of stock</label>
          </div>
        )}

        <div className="flex items-center space-x-2 mt-4">
          <input type="checkbox" id="sku" onClick={openBarCode} />
          <label htmlFor="sku">This product has a SKU or barcode</label>
        </div>

        {barCode && (
          <div className='flex gap-4'>
            <div className='flex flex-col py-2 w-full'>
              <label htmlFor="">SKU (Stock Keeping Unit)</label>
              <input type="text" className='border border-black p-1 rounded-lg w-full' />
            </div>
            <div className='flex flex-col py-2 w-full'>
              <label htmlFor="">Barcode (ISBN, UPC, GTIN, etc.)</label>
              <input type="text" className='border border-black p-1 rounded-lg w-full' />
            </div>
          </div>
        )}
      </div>


    </section>
  )
};

// Shipping Component
const Shipping = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <section>
      <div className='bg-white rounded-lg py-4 space-y-4'>
        <h1 className='font-bold text-base'>Shipping</h1>

        <div className='space-y-2'>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            id="toggleCheckbox"
            className='mr-2'
          />
          <label htmlFor="toggleCheckbox">
            This is a Physical Product
          </label>
        </div>

        {isChecked && (
          <div className='space-y-4'>
            <div className='flex flex-col space-y-2'>
              <label htmlFor="">Weight</label>
              <input
                type="text"
                placeholder='0.0'
                className="w-[200px] p-2 border border-black rounded-md"
              />
            </div>
            <p className='text-sm'>
              Customers won’t enter shipping details at checkout. Learn how to set up your store for digital products or services.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

// Status Component
interface DropdownItem {
  id: number;
  label: string;
}

const Status = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const dropdownItems: DropdownItem[] = [
    { id: 1, label: "Active" },
    { id: 2, label: "Draft" },
    // { id: 3, label: "Option 3" },
  ];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsDropdownOpen(true);
  };

  const handleDropdownClick = (item: DropdownItem) => {
    setInputValue(item.label);
    setSelectedItem(item.id);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative w-full p-2 rounded-lg space-y-2">
      <label className="text-base font-semibold" htmlFor="status-input">Status</label>
      <input
        id="status-input"
        type="text"
        className="w-full p-2 border border-black rounded-md"
        value={inputValue}
        onChange={handleInputChange}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        placeholder="Active"
      />
      {isDropdownOpen && (
        <ul
          className="absolute left-0 right-0 border bg-white z-[1000] p-0 m-0 list-none rounded-lg">
          {dropdownItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleDropdownClick(item)}
              className={`p-2 cursor-pointer flex justify-between font-semibold hover:bg-[#EBEBEB] ${selectedItem === item.id ? "bg-gray-200" : "bg-white"
                }`}>
              {item.label}
              {selectedItem === item.id && <FaCheck />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Country Component
import { countryCodes } from './AddProductsComponents/CountryCodeInput';

const Country = () => {
  const [selectedCode, setSelectedCode] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelectCode = (code: string) => {
    setSelectedCode(code);
    setShowDropdown(false);
  };
  return (
    <div className=' w-full relative space-y-4'>

      {/* Input Field */}
      <input
        type="text"
        value={selectedCode}
        onClick={() => setShowDropdown(!showDropdown)}
        readOnly
        placeholder="Pakistan"
        className='w-full p-2 border border-black rounded-lg'
      />

      <div className='flex flex-col w-full py-2'>
        <label htmlFor="">Harmonized System (HS) Code</label>
        <input type="text" placeholder='Search By Product KeyWord Or Code' className='w-full p-2 border border-black rounded-lg' />
      </div>

      {/* Dropdown List */}
      {showDropdown && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            maxHeight: '200px',
            overflowY: 'auto',
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            zIndex: 1,
          }}
        >
          {countryCodes.map((country, index) => (
            <div
              key={index}
              onClick={() => handleSelectCode(country.code)}
              style={{ width: '100%', padding: '8px', cursor: 'pointer', borderBottom: '1px solid #ddd' }}
            >
              {country.name}
              {/* ({country.code}) */}
            </div>
          ))}
        </div>
      )}
    </div>
  )
};

// Product Category Component
const ProductCategory = () => {

  //   const CountryCodeInput: React.FC = () => {
  const [selectedCode, setSelectedCode] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelectCode = (code: string) => {
    setSelectedCode(code);
    setShowDropdown(false);
  };
  return (
    <section>
      <div>
        <div className=' border-black relative w-auto'>

          <input
            type="text"
            value={selectedCode}
            onClick={() => setShowDropdown(!showDropdown)}
            readOnly
            placeholder="Product"
            className='w-full p-2 border border-black rounded-lg'

          />


          {showDropdown && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '100%',
                maxHeight: '200px',
                overflowY: 'auto',
                border: '1px solid #ccc',
                backgroundColor: '#fff',
                zIndex: 1,
              }}
            >
              {productCategories.map((country, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectCode(country.code)}
                  className='p-2 border-b cursor-pointer'
                // style={{ padding: '8px', cursor: 'pointer', borderBottom: '1px solid #ddd' }}
                >
                  {country.name}
                  {/* ({country.code}) */}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
};

// Main NewProduct Component
const NewProduct = () => {
  const [shipping, setShipping] = useState(false);

  return (
    <section className="lg:space-y-4 flex xl:flex-row flex-col justify-center sm:px-4 xl:px-0 lg:space-x-3 py-6 space-y-0">
      {/* Left Section */}
      <div className="w-full xl:w-1/2 space-y-6 m-auto md:m-0">
        <div className='flex items-center'>
          <Link to={'/product'}>
            <MdArrowBack className='text-xl' />
          </Link>
          <h1 className="text-lg font-bold p-2">Add Product</h1>
        </div>

        <div className="bg-white shadow-lg sm:rounded-lg px-2 py-4 border">
          <div className="p-4 rounded-lg space-y-4">
            <div className="flex flex-col space-y-2">
              <label className='font-semibold' htmlFor="title">Title</label>
              <input
                type="text"
                className="p-2 border border-black rounded-lg"
              />
            </div>
            <Editor />
          </div>

          <div className='px-4'>
            <h1 className="text-base font-semibold">Media</h1>
            <div className="py-2 px-0 rounded-lg border border-dashed border-black">
              <input type="file" className="py-6 px-5" />
            </div>
            <div className='py-3'>
              <label className="font-semibold" htmlFor="category">Category</label>
              <div className="space-x-2 w-full">
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
            <h1 className="font-bold text-base">Pricing</h1>
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
              className="border border-black rounded-md p-1"
            />
            <p>0-160 characters used</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="xl:w-1/4 w-full flex flex-col gap-4 mt-10 xl:pt-15">
        <div className="bg-white shadow-lg sm:rounded-lg border p-3">
          <Status />
        </div>
        <button className="bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700 transition duration-200">
          Save
        </button>
      </div>
    </section>
  );
};

export default NewProduct;
