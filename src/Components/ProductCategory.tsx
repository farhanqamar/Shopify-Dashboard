import {useState} from 'react'

export const productCategories = [
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
}

export default ProductCategory
