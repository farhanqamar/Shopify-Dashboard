import { useState, useRef, useEffect } from "react";
import NavDropdown from './NavDropdown';
import useOutsideClick from "../Dropdown/useOutsideClick";
import { FiBell } from "react-icons/fi";
import { MdOutlineSearch } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { IoSearch, IoFilter, IoCloseCircleOutline } from "react-icons/io5";
import { GrStatusGood } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";
import { BsDot } from "react-icons/bs";
import { FaStore, FaQuestionCircle, FaFileAlt, FaUserFriends, FaKeyboard } from 'react-icons/fa';
import AdminSideBar from "../AdminSideBar/AdminSideBar";


const Navbar = () => {
  const [isOpenNavDropdown, setIsOpenNavDropdown] = useState(false);
  const [isOpenBellDropdown, setIsOpenBellDropdown] = useState(false)
  const [isOpenLoginDropdown, setIsOpenLoginDropdown] = useState(false)
  const [isOpenNavSidebar, setIsOpenNavSidebar] = useState(false)


  const dropdownRefNavSidebar = useRef(null);
  const dropdownNavInput = useRef(null);
  const dropdownRefBell = useRef(null);
  const dropdownRefLogin = useRef(null);


  useOutsideClick({
    ref: dropdownNavInput,
    handler: () => {
      setIsOpenNavDropdown(false)

    }
  });
  useOutsideClick({
    ref: dropdownRefBell,
    handler: () => {
      setIsOpenBellDropdown(false)
    }
  });
  useOutsideClick({
    ref: dropdownRefLogin,
    handler: () => {
      setIsOpenLoginDropdown(false)
    }
  });
  useOutsideClick({
    ref: dropdownRefLogin,
    handler: () => {
      setIsOpenLoginDropdown(false)
    }
  });
  useOutsideClick({
    ref: dropdownRefNavSidebar,
    handler: () => {
      setIsOpenNavSidebar(false)
    }
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        setIsOpenNavDropdown((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <section className="bg-[#1A1A1A]">
        <div className="flex justify-between items-center py-2">
          <div className="hidden md:block pl-4">
            <img src="/logo.svg" alt="Logo Image" />
          </div>


          <div className="block md:hidden text-white relative" ref={dropdownRefNavSidebar}>
            <div onClick={() => setIsOpenNavSidebar(!isOpenNavSidebar)}
            className="pl-2"
              >
              <TiThMenu />
            </div>

            {isOpenNavSidebar && (
              <div className="absolute top-9 left-0 z-30">
                <div className="relative">
                  {/* Close Button */}
                  <button
                    className="absolute top-2 right-2 text-black p-1"
                    onClick={() => setIsOpenNavSidebar(false)}
                  >
                    &#10005; {/* This is a cross symbol (X) */}
                  </button>
                  <AdminSideBar />
                </div>
              </div>
            )}
          </div>

          <div className="w-2/4 sm:w-1/3 relative" ref={dropdownNavInput}>
            <div className="" onClick={() => setIsOpenNavDropdown(!isOpenNavDropdown)}>
              <NavInput />
            </div>
            {isOpenNavDropdown && (
              <div className="absolute top-0  w-full z-20 shadow-xl">
                <NavDropdown />
              </div>
            )}
          </div>

          <div className="flex gap-2 items-center text-white relative shadow-lg z-20" >
            <div ref={dropdownRefBell}>
              <div className="px-3 py-3 rounded-md hover:bg-[#2b2b2b] cursor-pointer"
                onClick={() => setIsOpenBellDropdown(!isOpenBellDropdown)}
              >
                <FiBell />
              </div>
              {
                isOpenBellDropdown && (
                  <div className="absolute top-14 right-[0.5%] sm:right-3/4 px-3 py-3 bg-white text-black rounded-lg w-max z-20" >
                    <div className="flex justify-between">
                      <div>Alerts</div>
                      <div className="flex items-center gap-4" >
                        <div><IoFilter /></div>
                        <div><GrStatusGood /></div>
                      </div>
                    </div>

                    <div className="flex gap-1 py-1 sm:px-2 mt-4 rounded-lg">
                      {/* <span className="relative top-1 rounded-full text-[#005BD3]"><GoDotFill /></span> */}
                      <div className=" py-1 px-2">
                        <div className="flex font-bold">
                          <p >Point of Sale</p>
                          <span className="relative top-[5px]"><BsDot /></span>
                          <p>Friday at 4:01 pm {/* add here current time with day --> Like: "Friday at 4:01 pm" */} </p>
                          <span className="relative top-[5px] ml-auto"><GrStatusGood /></span>
                        </div>
                        <p className="text-zinc-600">Your free of POS Pro ends in 3 days</p>
                        <p className="w-[200px] md:w-[300px] mt-2">upgrade to your plan to retail features like exchange and staff managment.</p>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>

            <div className="flex gap-1 items-center px-2 py-[2px] rounded-md hover:bg-[#2b2b2b] cursor-pointer"
              onClick={() => setIsOpenLoginDropdown(!isOpenLoginDropdown)}
              ref={dropdownRefLogin}
            >
              <div className="relative inline-flex items-center justify-center w-9 h-9 overflow-hidden bg-[#26F22C] rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">MS</span>
              </div>
              <p className="hidden md:block text-sm">My Stores</p>

              {
                isOpenLoginDropdown && (
                  <div className="absolute top-14 right-0 px-1 py-3 bg-white text-black rounded-lg z-20 shadow-lg">
                    {/* Store Info */}
                    <div className="flex items-center p-4 border-b border-gray-200">
                      <div className="bg-green-400 rounded-full w-8 h-8 flex justify-center items-center">
                        MS
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-semibold">My Store</p>
                      </div>
                    </div>

                    {/* Dropdown Options */}
                    <div className="p-2">
                      <div className="flex items-center py-2 hover:bg-gray-100 cursor-pointer">
                        <FaStore className="w-5 h-5" />
                        <p className="ml-3 text-sm">All stores</p>
                      </div>
                      <div className="flex items-center py-2 hover:bg-gray-100 cursor-pointer">
                        <FaQuestionCircle className="w-5 h-5" />
                        <p className="ml-3 text-sm">Help Center</p>
                      </div>
                      <div className="flex items-center py-2 hover:bg-gray-100 cursor-pointer">
                        <FaFileAlt className="w-5 h-5" />
                        <p className="ml-3 text-sm">Changelog</p>
                      </div>
                      <div className="flex items-center py-2 hover:bg-gray-100 cursor-pointer">
                        <FaUserFriends className="w-5 h-5" />
                        <p className="ml-3 text-sm">Community forums</p>
                      </div>
                      <div className="flex items-center py-2 hover:bg-gray-100 cursor-pointer">
                        <FaKeyboard className="w-5 h-5" />
                        <p className="ml-3 text-sm">Keyboard shortcuts</p>
                      </div>
                    </div>

                    {/* Account Info */}
                    <div className="border-t border-gray-200 p-2">
                      <p className="text-sm p-2">yoceca6285@ploncy.com</p>
                      <div className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
                        <p className="ml-3 text-sm">Manage account</p>
                      </div>
                      <div className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
                        <p className="ml-3 text-sm">Log out</p>
                      </div>
                    </div>

                  </div>
                )
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const NavInput = () => {
  return (
    <>
      <button
        type="button"
        className="w-full bg-[#303030] rounded-xl px-2 py-1 flex justify-between text-[#898989] border-x border-t border-[#474747]"
      >
        <div className="flex justify-between gap-1 text-[#a1a1a1]">
          <div className="relative top-1">
            <MdOutlineSearch />
          </div>
          <div>Search</div>
        </div>
        <div className="flex items-center gap-1 font-medium">
          <div className="bg-[#404040] rounded-md px-[4px] py-[1px] text-sm hidden md:block">
            CTRL
          </div>
          <div className="bg-[#404040] rounded-md px-[8px] py-[1px] text-sm hidden md:block">
            K
          </div>
        </div>
      </button>
    </>
  );
};

export default Navbar;
