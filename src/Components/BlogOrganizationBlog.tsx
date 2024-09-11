
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

interface DropdownItem {
  id: number;
  label: string;
  subItems: SubItem[];
}

interface SubItem {
  id: number;
  label: string;
}

const BlogOrganizationBlog = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const [selectedItem, setSelectedItem] = useState<number | null>(null);
    const [selectedSubItem, setSelectedSubItem] = useState<number | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [expandedItemId, setExpandedItemId] = useState<number | null>(null);
  
    const dropdownItems: DropdownItem[] = [
      { id: 1, label: "Blog", subItems: [{ id: 101, label: "News" }] },
      { id: 2, label: "Action", subItems: [{ id: 102, label: "Create new Blog" }] },
    //   { id: 3, label: "Option 3", subItems: [{ id: 103, label: "Sub Option 3.1" }] },
    ];
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
      setIsDropdownOpen(true);
    };
  
    const handleDropdownClick = (item: DropdownItem) => {
      setExpandedItemId(expandedItemId === item.id ? null : item.id); // Toggle sub-items
      setSelectedItem(item.id);
    };
  
    const handleSubItemClick = (subItem: SubItem) => {
      setInputValue(subItem.label);
      setSelectedSubItem(subItem.id);
      setIsDropdownOpen(false);
    };
  return (
   <section className="">
         <div className="relative w-[200px] px-2">
        <label className="text-base p-2" htmlFor="">Blog</label>
      <input
        type="text"
        className="w-full p-2 border border-black rounded-lg"
        value={inputValue}
        onChange={handleInputChange}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        placeholder="Select an option"
      />
      {isDropdownOpen && (
        <ul
        className="absolute top-full left-0 right-0 border bg-white z-[1000] p-0 m-0 list-none rounded-lg"
        >
          {dropdownItems.map((item) => (
            <li key={item.id} style={{ padding: "8px" }}>
              <div
                onClick={() => handleDropdownClick(item)}
                className={`p-2 font-semibold cursor-pointer flex justify-between hover:rounded-lg hover:bg-gray-200 ${selectedItem === item.id ? "bg-gray-200" : "bg-white"}`}
              >
                {item.label}
                {selectedItem === item.id && <FaCheck />}
              </div>
              {expandedItemId === item.id && (
                <ul
                className="list-none p-0 m-0 mt-2 border-l rounded-lg border"
                >
                  {item.subItems.map((subItem) => (
                    <li
                      key={subItem.id}
                      onClick={() => handleSubItemClick(subItem)}
                      className={`p-2 pl-6 cursor-pointer flex justify-between hover:rounded-lg hover:bg-gray-200 ${selectedSubItem === subItem.id ? "bg-gray-200" : "bg-white"}`}
                    >
                      {subItem.label}
                      {selectedSubItem === subItem.id && <FaCheck />}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
   </section>
  )
}

export default BlogOrganizationBlog
