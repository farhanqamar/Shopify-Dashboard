import { useState, useRef, useEffect } from 'react';
import arrow_down from '../assets/arrow_down.png';
import '../index.scss';
import { Link } from 'react-router-dom';
import { RxEyeOpen } from "react-icons/rx";
import order_main from '../assets/order_main.png';
import AnalyticBar from '../Components/AnalyticBar';
import { FaRegEyeSlash } from "react-icons/fa";
import OrderTable from '../Components/OrderTable';
import { IoMdAdd } from "react-icons/io";

const Order = () => {
    const [moreAction, setMoreAction] = useState(false);
    const [showAnalytic, setShowAnalytic] = useState(false);
    const [orders, setOrders] = useState([]); // State for orders
    const dropdownRef = useRef<HTMLUListElement>(null);

    const openDropDown = () => {
        setMoreAction(!moreAction);
    };

    const openAnalytic = () => {
        setShowAnalytic(!showAnalytic);
        setMoreAction(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setMoreAction(false); // Close dropdown
                setShowAnalytic(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Fetch orders (you can adjust this function as needed)
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/store/orders/");
                const data = await response.json();
                setOrders(data); // Set the fetched orders data
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <section className='p-10'>
            <div className='w-[100%] flex justify-around p-5'>
                <div className='mr-auto'>
                    <p className='text-2xl font-bold text-[#303030]'>Orders</p>
                </div>
                <div className='w-[40%]'>
                    <div className='flex flex-col justify-end items-end space-y-3'>
                        <button onClick={openDropDown} className='flex bg-[#e3e3e3] hover:bg-[#d4d4d4] text-xs font-bold rounded-lg px-2 py-1 text-[#303030]'>
                            More Action <img src={arrow_down} alt="" className='h-3 w-3 m-1' />
                        </button>

                        {moreAction && (
                            <ul className='' ref={dropdownRef}>
                                <li>
                                    <a className='flex text-sm bg-white rounded-lg px-2 py-2 text-[#303030]' href="" onClick={(e) => { e.preventDefault(); openAnalytic(); openDropDown(); }}>
                                        <RxEyeOpen className='mx-3 text-xl' />Show Analytic Bar
                                    </a>
                                </li>
                            </ul>
                        )}

                        {showAnalytic && (
                            <ul className=''>
                                <li>
                                    <a className='flex text-sm bg-white rounded-lg px-2 py-2 text-[#303030]' href="" onClick={(e) => { e.preventDefault(); openAnalytic(); }}>
                                        <FaRegEyeSlash className='mx-3 text-xl' />Close Analytic Bar
                                    </a>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>

            <div>
                {showAnalytic && (
                    <div>
                        <AnalyticBar />
                    </div>
                )}
            </div>

            <div className="bg-white p-3 rounded-xl">
                {orders.length === 0 ? (
                    <div className='pb-16 pt-5'>
                        <img src={order_main} className="m-auto" alt="Order Placeholder" />
                        <div className="text-center">
                            <p className="text-base font-semibold">Your Orders Will Show Here</p>
                            <p className="text-sm w-full md:w-1/3 m-auto py-4">To get orders and accept payments from customers, you need to select a plan. You’ll only be charged for your plan after your free trial ends.</p>
                        </div>
                        <div className="flex justify-center md:space-x-4">
                            <Link to={'/order/newOrder'}>
                                <button className="bg-gradient-to-b from-black/80 to-black/60 hover:bg-black text-white rounded-lg px-3 py-[6px] text-sm flex items-center">
                                    <span className='text-white mr-2'><IoMdAdd /></span> Add Order
                                </button>
                            </Link>
                            <Link to={"/product/allProducts"}>
                                <button className="rounded-lg border-2 m-auto md:m-0 bg-stone-200 hover:bg-white px-3 py-[5px] text-sm">Show All Products</button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <OrderTable orders={orders} /> // Pass the orders to the OrderTable


                )}
            </div>
        </section>
    );
};

export default Order;
