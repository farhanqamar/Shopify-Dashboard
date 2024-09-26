import { useState } from 'react'

const TrackQuantity = () => {
  const [isChecked, setIsChecked] = useState(true);
  const[barCode, setBarCode] = useState(false)

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
            <input type="checkbox" id="sku" onClick={openBarCode}/>
            <label htmlFor="sku">This product has a SKU or barcode</label>
          </div>

          {barCode && (
            <div className='flex gap-4'>
              <div className='flex flex-col py-2 w-full'>
              <label htmlFor="">SKU (Stock Keeping Unit)</label>
              <input type="text" className='border border-black p-1 rounded-lg w-full'/>
              </div>
              <div className='flex flex-col py-2 w-full'>
              <label htmlFor="">Barcode (ISBN, UPC, GTIN, etc.)</label>
              <input type="text" className='border border-black p-1 rounded-lg w-full'/>
              </div>
            </div>
          )}
      </div>


    </section>
  )
}

export default TrackQuantity
