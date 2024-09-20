import {useState} from 'react'
import { FaCheck } from "react-icons/fa";



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
    <div className="relative w-[200px] px-2 py-2" >
    <label className="text-base" htmlFor="">Status</label>
<input
  type="text"
  className="w-full p-2 border border-black rounded-lg"
  value={inputValue}
  onChange={handleInputChange}
  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
  placeholder="Active"
/>
{isDropdownOpen && (
  <ul
  className="absolute top-full left-0 right-0 border bg-white z-[1000] p-0 m-0 list-none rounded-lg">
    {dropdownItems.map((item) => (
      <li
        key={item.id}
        onClick={() => handleDropdownClick(item)}
        className={`p-2 cursor-pointer flex justify-between font-semibold hover:bg-[#EBEBEB] ${ selectedItem === item.id ? "#f0f0f0" : "#fff"}`} >
        {item.label}
        {selectedItem === item.id && <FaCheck />}
      </li>
    ))}
  </ul>
)}
</div>
  )
}

export default Status
