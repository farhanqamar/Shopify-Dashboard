import React, { useState, useRef, useEffect } from "react";
import { IoFilterSharp } from "react-icons/io5";

const columnsData = [
    "First name", "Last name", " Email", " Phone", " Company", " Address1", " Address2", " City", " Province", " Country", " Zip code", " Accepts marketing", " Tags", "Note",
    "Loyalty points", "Groups",
  ];

  const dataRows = [
    ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5", "Data 6", "Data 7", "Data 8", "Data 9", "Data 10", "Data 11", "Data 12",
      "Data 13", "Data 14", "Data 15", "Data 16",
    ],
    // Add more rows as needed
  ];


const CustomerTable = () => {
  const [visibleColumns, setVisibleColumns] = useState(
    columnsData?.map((_:any, index:any) => index < 10) // Show first 10 columns initially
  );

  console.log("columnsData:", columnsData); // Add this log to verify
  console.log("dataRows:", dataRows); // Add this log to verify
  
  
  // Dropdown open state
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  
  // Ref for handling clicks outside the dropdown
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event:any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleCheckboxChange = (index:any) => {
    const newVisibleColumns = [...visibleColumns];
    
    if (newVisibleColumns[index]) {
      newVisibleColumns[index] = false;
    } else {
      const visibleCount = newVisibleColumns.filter(Boolean).length;
      if (visibleCount >= 10) {
        const firstVisibleIndex = newVisibleColumns.findIndex((col) => col);
        newVisibleColumns[firstVisibleIndex] = false;
      }
      newVisibleColumns[index] = true;
    }

    setVisibleColumns(newVisibleColumns);
  };

  return (
    <div className="p-4">
      <div>
        <p className='text-2xl font-bold text-[#303030]'>Customer</p>
      </div>
      {/* Dropdown button */}
      <div className="flex justify-end">
      <div className="relative inline-block" ref={dropdownRef}>
        
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none"
          onClick={() => setDropdownOpen(!isDropdownOpen)}>
          <span><IoFilterSharp /></span>
        </button>
        
        

        {/* Dropdown content */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10 h-[300px] overflow-y-auto">
            {columnsData.map((column:any, index:any) => (
              <div key={index} className="px-4 py-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-600"
                    checked={visibleColumns[index]}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <span className="ml-2">{column}</span>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              {columnsData.map(
                (column:any, index:any) =>
                  visibleColumns[index] && (
                    <th key={index} className="border px-4 py-2 bg-[#D9D9D9]">
                      {column}
                    </th>
                  )
              )}
            </tr>
          </thead>
          <tbody>
            {dataRows.map((row:any, rowIndex:any) => (
              <tr key={rowIndex}>
                {row.map(
                  (cell:any, index:any) =>
                    visibleColumns[index] && (
                      <td key={index} className="border px-4 py-2">
                        {cell}
                      </td>
                    )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerTable;