import {useState} from 'react'
import { countryCodes } from './CountryCodeInput';

const Country = () => {
    const [selectedCode, setSelectedCode] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
  
    const handleSelectCode = (code: string) => {
      setSelectedCode(code);
      setShowDropdown(false);
    };
  return (
    <div className='border border-black w-full' style={{ position: 'relative', borderRadius: '10px' }}>
      {/* Input Field */}
      <input
        type="text"
        value={selectedCode}
        onClick={() => setShowDropdown(!showDropdown)}
        readOnly
        placeholder="Pakistan"
        style={{ width: '100%', padding: '8px' }}
      />

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
}

export default Country
