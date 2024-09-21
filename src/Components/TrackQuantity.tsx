import { useState } from 'react'

const TrackQuantity = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <section>
      <div className='  bg-white rounded-xl p-4 space-y-4' >
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
          <h1 className='font-bold'>Quality</h1>
        </div>

        {isChecked && (
          <div className='flex space-x-2'>
            <input
              type="checkbox"

            // className=' border border-black outline-none w-full rounded-lg'
            />
            <label htmlFor="">Continue selling when out of stock</label>
            {/* <label htmlFor="">This won't affect Shopify POS. Staff will see a warning, but can complete sales when available inventory reaches zero and below.</label> */}
          </div>
        )}
      </div>


    </section>
  )
}

export default TrackQuantity
