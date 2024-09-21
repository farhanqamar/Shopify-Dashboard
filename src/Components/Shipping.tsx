import { useState } from 'react';

const Shipping = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <section>
      <div className='bg-white rounded-lg p-4 border space-y-4'>
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
                className="w-full p-2 border border-black rounded-md"
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

export default Shipping;