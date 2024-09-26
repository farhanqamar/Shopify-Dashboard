import { useState } from 'react';
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
                            className={`p-2 cursor-pointer flex justify-between font-semibold hover:bg-[#EBEBEB] ${
                                selectedItem === item.id ? "bg-gray-200" : "bg-white"
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

export default Status;