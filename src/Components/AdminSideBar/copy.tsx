import { useState } from 'react';
import './AdminSideBar.scss';
import { Link } from 'react-router-dom';
import { MdArrowForwardIos, MdOutlineShoppingBag, MdHomeFilled } from "react-icons/md";
import { AiFillReconciliation } from "react-icons/ai";
import { GrUserManager } from "react-icons/gr";
import { TfiGallery } from "react-icons/tfi";
import { SiGoogleanalytics } from "react-icons/si";
import { HiCursorArrowRipple } from "react-icons/hi2";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoStorefront } from "react-icons/io5";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";

const AdminSideBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const checkDropdownOpen = (index:any) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleClick = (index:any) => {
    setActiveIndex(index);
  };

  return (
    <section className='sidebarListStyle pl-5 pr-3 h-[95.6vh] relative '>
      <ul className=''>
        {/* Home */}
        <Link to={'/'}>
          <li
            className={`flex gap-2 ${activeIndex === 0 ? 'bg-active text-active' : ''}`}
            onClick={() => handleClick(0)}
          >
            <span className='relative top-1'><MdHomeFilled /></span>
            <span>Home</span>
          </li>
        </Link>
        {/* Order */}
        <Link to={'/order'}>
          <li
            className={`flex gap-2 ${activeIndex === 1 ? 'bg-active text-active' : ''}`}
            onClick={() => {
              handleClick(1);
              checkDropdownOpen(0);
            }}
          >
            <span className='relative top-1'><AiFillReconciliation /></span>
            <span>Orders</span>
          </li>
        </Link>
        {dropdownOpen === 0 && (
          <ul className='dropdown pl-4'>
            <Link to={'/order/new'}>
              <li
                className={`text-[#75777d] hover:text-black ${activeIndex === 2 ? 'bg-active text-active' : ''}`}
                onClick={() => handleClick(2)}
              >
                Drafts
              </li>
            </Link>
            <Link to={'/order/all'}>
              <li
                className={`text-[#75777d] hover:text-black ${activeIndex === 3 ? 'bg-active text-active' : ''}`}
                onClick={() => handleClick(3)}
              >
                Abandoned checkouts
              </li>
            </Link>
          </ul>
        )}
        {/* Products */}
        <Link to={'/products'}>
          <li
            className={`flex gap-2 ${activeIndex === 4 ? 'bg-active text-active' : ''}`}
            onClick={() => {
              handleClick(4);
              checkDropdownOpen(1);
            }}
          >
            <span className='relative top-1'><MdOutlineShoppingBag /></span>
            <span>Products</span>
          </li>
        </Link>
        {dropdownOpen === 1 && (
          <ul className='dropdown pl-4'>
            <Link to={'/products/collections'}>
              <li
                className={`text-[#75777d] hover:text-black ${activeIndex === 5 ? 'bg-active text-active' : ''}`}
                onClick={() => handleClick(5)}
              >
                Collections
              </li>
            </Link>
            <Link to={'/products/inventory'}>
              <li
                className={`text-[#75777d] hover:text-black ${activeIndex === 6 ? 'bg-active text-active' : ''}`}
                onClick={() => handleClick(6)}
              >
                Inventory
              </li>
            </Link>
            <Link to={'/products/purchase-orders'}>
              <li
                className={`text-[#75777d] hover:text-black ${activeIndex === 7 ? 'bg-active text-active' : ''}`}
                onClick={() => handleClick(7)}
              >
                Purchase orders
              </li>
            </Link>
            <Link to={'/products/transfers'}>
              <li
                className={`text-[#75777d] hover:text-black ${activeIndex === 8 ? 'bg-active text-active' : ''}`}
                onClick={() => handleClick(8)}
              >
                Transfers
              </li>
            </Link>
            <Link to={'/products/gift-cards'}>
              <li
                className={`text-[#75777d] hover:text-black ${activeIndex === 9 ? 'bg-active text-active' : ''}`}
                onClick={() => handleClick(9)}
              >
                Gift Cards
              </li>
            </Link>
          </ul>
        )}
        {/* Customers */}
        <Link to={'/customers'}>
          <li
            className={`flex gap-2 ${activeIndex === 10 ? 'bg-active text-active' : ''}`}
            onClick={() => {
              handleClick(10);
              checkDropdownOpen(2);
            }}
          >
            <span className='relative top-1'><GrUserManager /></span>
            <span>Customers</span>
          </li>
        </Link>
        {dropdownOpen === 2 && (
          <ul className='dropdown pl-4'>
            <Link to={'/customers/segments'}>
              <li
                className={`text-[#75777d] hover:text-black ${activeIndex === 11 ? 'bg-active text-active' : ''}`}
                onClick={() => handleClick(11)}
              >
                Segments
              </li>
            </Link>
          </ul>
        )}
        {/* Content */}
        <Link to={'/content'}>
          <li
            className={`flex gap-2 ${activeIndex === 12 ? 'bg-active text-active' : ''}`}
            onClick={() => {
              handleClick(12);
              checkDropdownOpen(3);
            }}
          >
            <span className='relative top-1'><TfiGallery /></span>
            <span>Content</span>
          </li>
        </Link>
        {dropdownOpen === 3 && (
          <ul className='dropdown pl-4'>
            <Link to={'/content/metaobjects'}>
              <li
                className={`text-[#75777d] hover:text-black ${activeIndex === 13 ? 'bg-active text-active' : ''}`}
                onClick={() => handleClick(13)}
              >
                Metaobjects
              </li>
            </Link>
            <Link to={'/content/files'}>
              <li
                className={`text-[#75777d] hover:text-black ${activeIndex === 14 ? 'bg-active text-active' : ''}`}
                onClick={() => handleClick(14)}
              >
                Files
              </li>
            </Link>
          </ul>
        )}
        {/* Analytics */}
        <Link to={'/analytics'}>
          <li
            className={`flex gap-2 ${activeIndex === 15 ? 'bg-active text-active' : ''}`}
            onClick={() => {
              handleClick(15);
              checkDropdownOpen(4);
            }}
          >
            <span className='relative top-1'><SiGoogleanalytics /></span>
            <span>Analytics</span>
          </li>
        </Link>
        {dropdownOpen === 4 && (
          <ul className='dropdown pl-4'>
            <Link to={'/analytics/reports'}>
              <li
                className={`text-[#75777d] hover:text-black ${activeIndex === 16 ? 'bg-active text-active' : ''}`}
                onClick={() => handleClick(16)}
              >
                Reports
              </li>
            </Link>
            <Link to={'/analytics/live-view'}>
              <li
                className={`text-[#75777d] hover:text-black ${activeIndex === 17 ? 'bg-active text-active' : ''}`}
                onClick={() => handleClick(17)}
              >
                Live View
              </li>
            </Link>
          </ul>
        )}
        {/* Marketing */}
        <Link to={'/marketing'}>
          <li
            className={`flex gap-2 ${activeIndex === 18 ? 'bg-active text-active' : ''}`}
            onClick={() => {
              handleClick(18);
              checkDropdownOpen(5);
            }}
          >
            <span className='relative top-1'><HiCursorArrowRipple /></span>
            <span>Marketing</span>
          </li>
        </Link>
        {dropdownOpen === 5 && (
          <ul className='dropdown pl-4'>
            <Link to={'/marketing/campaigns'}>
              <li
                className={`text-[#75777d] hover:text-black ${activeIndex === 19 ? 'bg-active text-active' : ''}`}
                onClick={() => handleClick(19)}
              >
                Campaigns
              </li>
            </Link>
            <Link to={'/marketing/automations'}>
              <li
                className={`text-[#75777d] hover:text-black ${activeIndex === 20 ? 'bg-active text-active' : ''}`}
                onClick={() => handleClick(20)}
              >
                Automations
              </li>
            </Link>
          </ul>
        )}
        {/* Discounts */}
        <Link to={'/discounts'}>
          <li
            className={`flex gap-2 ${activeIndex === 21 ? 'bg-active text-active' : ''}`}
            onClick={() => handleClick(21)}
          >
            <span className='relative top-1'><RiDiscountPercentLine /></span>
            <span>Discounts</span>
          </li>
        </Link>
        {/* Sales chanels */}
        <div className='flex justify-between pr-1'>
          <p>Sales channels</p>
          <span className='relative top-[6px]'><MdArrowForwardIos /></span>
        </div>
        {/* Online Store */}
        <Link to={'/online-store'}>
          <li
            className={`flex gap-2 ${activeIndex === 22 ? 'bg-active text-active' : ''}`}
            onClick={() => {
              handleClick(22);
              checkDropdownOpen(7);
            }}
          >
            <span className='relative top-1'><IoStorefront /></span>
            <span>Online Store</span>
          </li>
        </Link>
        {dropdownOpen === 7 && (
          <ul className='dropdown pl-4'>
            <Link to={'/online-store/themes'}>
              <li
                className={`text-[#75777d] hover:text-black ${activeIndex === 23 ? 'bg-active text-active' : ''}`}
                onClick={() => handleClick(23)}
              >
                Themes
              </li>
            </Link>
            <Link to={'/online-store/blog-posts'}>
              <li
                className={`text-[#75777d] hover:text-black ${activeIndex === 24 ? 'bg-active text-active' : ''}`}
                onClick={() => handleClick(24)}
              >
                Blog posts
              </li>
            </Link>
            <Link to={'/online-store/pages'}>
              <li
                className={`text-[#75777d] hover:text-black ${activeIndex === 25 ? 'bg-active text-active' : ''}`}
                onClick={() => handleClick(25)}
              >
                Pages
              </li>
            </Link>
            <Link to={'/online-store/navigation'}>
              <li
                className={`text-[#75777d] hover:text-black ${activeIndex === 26 ? 'bg-active text-active' : ''}`}
                onClick={() => handleClick(26)}
              >
                Navigation
              </li>
            </Link>
            <Link to={'/online-store/preferences'}>
              <li
                className={`text-[#75777d] hover:text-black ${activeIndex === 27 ? 'bg-active text-active' : ''}`}
                onClick={() => handleClick(27)}
              >
                Preferences
              </li>
            </Link>
          </ul>
        )}
        {/* Point of Sale */}
        <Link to={'/point-of-sale'}>
          <li
            className={`flex gap-2 ${activeIndex === 28 ? 'bg-active text-active' : ''}`}
            onClick={() => {
              handleClick(28);
              checkDropdownOpen(8);
            }}
          >
            <span className='relative top-1'><FaFileInvoiceDollar /></span>
            <span>Point of Sale</span>
          </li>
        </Link>
        {dropdownOpen === 8 && (
          <ul className='dropdown pl-4'>
            <Link to={'/point-of-sale/staff'}>
              <li
                className={`text-[#75777d] hover:text-black ${activeIndex === 29 ? 'bg-active text-active' : ''}`}
                onClick={() => handleClick(29)}
              >
                Staff
              </li>
            </Link>
            <Link to={'/point-of-sale/locations'}>
              <li
                className={`text-[#75777d] hover:text-black ${activeIndex === 30 ? 'bg-active text-active' : ''}`}
                onClick={() => handleClick(30)}
              >
                Locations
              </li>
            </Link>
            <Link to={'/point-of-sale/settings'}>
              <li
                className={`text-[#75777d] hover:text-black ${activeIndex === 31 ? 'bg-active text-active' : ''}`}
                onClick={() => handleClick(31)}
              >
                Settings
              </li>
            </Link>
          </ul>
        )}
         {/* Apps */}
        <div className='flex justify-between pr-1'>
          <p>Add apps</p>
          <span className='relative top-[6px]'><MdArrowForwardIos /></span>
        </div>

       {/* Discounts */}
          <div className='absolute bottom-1'>
          <Link to={'/discounts'}>
          <li
            className={`flex gap-2 ${activeIndex === 32 ? 'bg-active text-active' : ''}`}
            onClick={() => handleClick(32)}
          >
            <span className='relative top-1'><IoMdSettings /></span>
            <span>Settings</span>
          </li>
        </Link>
          </div>
        
      </ul>
    </section>
  );
};

export default AdminSideBar;