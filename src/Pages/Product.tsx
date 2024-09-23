
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";
import { useState } from "react";
import TableTopBarItems from "../Components/TableTopBarItems";
import OrderTable from "../Components/OrderTable";
import { Link } from "react-router-dom";


const Product: React.FC = () => {
    const [showProduct, setSHowProduct] = useState(true)
    const showTable = () => {
        setSHowProduct(!showProduct)
    }
    return (
        <section className="overflow-x-hidden p-10">
            <div className='p-5'>
                <p className='text-2xl font-bold text-[#303030]'>Products</p>
            </div>

            <div className="shadow-lg rounded-2xl">
                <div className="bg-white py-2">
                    {showProduct ?
                        (<TableTopBarItems />)
                        : (<div className="flex justify-between  border-b-2 border-gray-400/10">
                            <div className='flex px-4'>
                                <button className='hover:bg-gray-500/10 text-gray-500 rounded-lg text-lg px-2 py-1 font-semibold '>All</button>
                                <button className='hover:bg-gray-500/10 text-gray-500 rounded-lg text-lg px-3 font-semibold '>Active</button>
                                <button className='hover:bg-gray-500/10 text-gray-500 rounded-lg text-lg px-3 font-semibold '>Draft</button>
                                <button className='hover:bg-gray-500/10 text-gray-500 rounded-lg text-lg px-3 font-semibold '>Archived</button>
                                <button className='hover:bg-gray-500/10 text-gray-500 rounded-lg text-2xl px-3 font-semibold '><IoMdAdd /></button>
                            </div>


                            <div className="text-gray-500 text-lg flex rounded-lg p-2">
                                <button className='hover:bg-gray-500/10 text-gray-500 rounded-lg text-2xl font-semibold p-2'><BiSearch /></button>
                                <button className='hover:bg-gray-500/10 text-gray-500 rounded-lg text-2xl font-semibold p-2'> <IoFilterSharp /></button>
                            </div>
                        </div>)}




                    {showProduct ?
                        (<div className="flex justify-evenly py-10">
                            <div className="space-y-4 md:mt-10 mt-5 md:text-start text-center">
                                <p className="text-xl font-bold">Add Your Products</p>
                                <p className="w-auto text-sm">Start by stocking your store with products your customer will love</p>
                                <div className="flex md:space-x-4">
                                    <Link to={'/product/newproduct'}>
                                        <button className="bg-black text-white rounded-lg p-3 flex items-center">
                                            <IoMdAdd className="mr-1 text-lg" /> Add Product
                                        </button>
                                    </Link>
                                    <button className="rounded-lg p-3 border-2 m-auto md:m-0">Import</button>
                                </div>

                            </div>
                        </div>)
                        : ('')
                    }
                </div>
                {showProduct ?
                    (<div className="bg-gray-400/10 p-5 space-y-6 2xl:px-80 lg:px-40 text-center md:text-left">
                        <div className="">
                            <p className="text-xl font-bold">Find product to sell</p>
                            <p className="text-sm">Have dropshipping or print on demand products shipped directly form supplier to customer, and only pay for what you sell</p>
                        </div>
                        <button className="bg-white rounded-md px-2 py-1 ">Broser product sourcing app</button>
                    </div>)
                    : ('')
                }
            </div>

            {!showProduct ? (<OrderTable />) : ('')}
        </section>
    )
}




export default Product
