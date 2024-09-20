import {useState} from 'react'

const Shipping = () => {
    const [isChecked, setIsChecked] = useState(true); 

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
    return (
      <section>
          <div className='  bg-white rounded-xl p-4 space-y-4' >
      <h1>Shipping</h1>
        <div className=' space-y-2'>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            id="toggleCheckbox"
          />
          <label htmlFor="toggleCheckbox" style={{ marginLeft: '8px' }}>
           This is Physical Product
          </label>
        </div>
  
        {isChecked && (
         <div className='flex flex-col space-x-2 space-y-2'>
            <label htmlFor="">Weight</label>
           <input
            type="text"
            placeholder='0.0'
            />
            <label htmlFor="">Customers won’t enter shipping details at checkout. Learn how to set up your store for digital products or services.</label>
         </div>
           
          )}
      </div>
            
          
      </section>
    )
}

export default Shipping
