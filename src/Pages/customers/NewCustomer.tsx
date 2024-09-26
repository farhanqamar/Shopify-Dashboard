import { FaArrowLeftLong, FaPenClip } from "react-icons/fa6";
import CustomerOverview from "../../Components/AddProductsComponents/CustomerOverview";
import DefaultAddress from "../../Components/AddProductsComponents/DefaultAddress";
import TaxExemptions from "../../Components/AddProductsComponents/TaxExemptions";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";



const NewCustomer = () => {


    return (
        <section className="sm:px-5 pb-24">
            <div className="flex justify-center">

                <div className="py-5 w-[1250px]">
                    <h1 className='flex text-lg font-bold items-center'>
                        <span className="p-[6px] hover:bg-[#D4D4D4] mr-2 rounded-lg cursor-pointer">
                            <Link to={"/customer"}>
                                <MdArrowBack />
                            </Link>
                        </span>
                        Create Customer
                    </h1>
                </div>

            </div>

            <div className="flex flex-col lg:flex-row justify-center gap-4">

                <div className="space-y-4 ">
                    <div className="">
                        <CustomerOverview />
                    </div>
                    <div className="">
                        <DefaultAddress />
                    </div>
                    <div>
                        <TaxExemptions />
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="bg-white p-4 sm:rounded-lg space-y-6">
                        <div className="flex justify-between">
                            <h1>Notes</h1>
                            <FaPenClip />
                        </div>
                        <p>Notes are private and won't be shared with the customer.</p>
                    </div>
                    <div className="bg-white p-4 sm:rounded-lg space-y-6">
                        <div className="flex justify-between">
                            <h1>Tags</h1>
                            <FaPenClip />
                        </div>
                        <input type="text" className="rounded-lg w-full p-2 border border-black" />
                    </div>

                    <div className="text-end">
                        <button className="bg-black text-white p-2 rounded-lg ">Submit</button>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default NewCustomer;
