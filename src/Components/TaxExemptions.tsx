import {useState} from 'react'

const TaxExemptions = () => {
    const [isChecked, setIsChecked] = useState(true); // Checkbox is checked by default

  // Handle Checkbox Change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle checkbox state
  };
  return (
    <section>
        <div className=' font-semibold bg-white rounded-xl p-4 space-y-4' >
    
      <div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          id="toggleCheckbox"
        />
        <label htmlFor="toggleCheckbox" style={{ marginLeft: '8px' }}>
          Collect tax
        </label>
      </div>

      {isChecked && (
       <div className='space-y-4'>
         <input
          type="text"
          placeholder="Enter some text"
          className='p-3 border border-black outline-none w-full rounded-lg'
          />
          <p className='text-[#9D9D9D]'>Tax exemptions labeled as (N/A) are not applicable because you're not collecting taxes in that region.</p>
       </div>
        )}
    </div>
          
        
    </section>
  )
}

export default TaxExemptions
