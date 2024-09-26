import Country from '../Country'
import CountryCodeInput from './CountryCodeInput'

const DefaultAddress = () => {
  return (
    <section className=''>
        <div className='space-y-4 p-6 sm:rounded-xl bg-white font-semibold'>
            <div>
                <h1 className='text-base font-semibold'>Default Address</h1>
                <p>The primary address of this customer</p>
            </div>
            <div>
             <label className='text-sm p-1' htmlFor="">Country/region</label>
                <div className="flex space-x-2 ">
                    <Country />
                </div>
            </div>
            <div className='flex md:flex-row flex-col md:space-x-2 space-y-4 md:space-y-0'>
                <div className="flex flex-col w-full">
                     <label className=' text-sm p-1' htmlFor="">First Name</label>
                     <input className=' border border-black rounded-lg p-1' type="text" placeholder='e.g. Summer collection, Under $100, Staff picks'/>
                </div>
                 <div className="flex flex-col w-full">
                     <label className='text-sm p-1' htmlFor="">Last Name</label>
                     <input className=' border border-black rounded-lg p-1' type="text" placeholder='e.g. Summer collection, Under $100, Staff picks'/>
                 </div>
            </div>
            <div className="w-full flex flex-col space-y-3">
                   <div className='space-y-2 flex flex-col'>
                        <label className='text-sm p-1' htmlFor="">Company</label>
                        <input  className=' border border-black rounded-lg p-2' type="email" />
                   </div>
                   <div className='space-y-2 flex flex-col'>
                        <label className='text-sm p-1' htmlFor="">Address</label>
                        <input  className=' border border-black rounded-lg p-2' type="email" />
                   </div>
                   <div className='space-y-2 flex flex-col'>
                        <label className='text-sm p-1' htmlFor="">Apartment, suite, etc.</label>
                        <input  className=' border border-black rounded-lg p-2' type="email" />
                   </div>

            </div>
            <div className='flex md:flex-row flex-col md:space-x-2 space-y-4 md:space-y-0'>
                <div className="flex flex-col w-full">
                     <label className=' text-sm p-1' htmlFor="">City</label>
                     <input className=' border border-black rounded-lg p-1' type="text" placeholder='e.g. Summer collection, Under $100, Staff picks'/>
                </div>
                 <div className="flex flex-col w-full">
                     <label className='text-sm p-1' htmlFor="">Postal Code</label>
                     <input className=' border border-black rounded-lg p-1' type="text" placeholder='e.g. Summer collection, Under $100, Staff picks'/>
                 </div>
            </div>
            <div>
             <label className='text-sm p-1' htmlFor="">Phone</label>
                <div className="flex space-x-2 ">
                    <CountryCodeInput/>
                        <input
                         type="text"
                        className="w-full border border-black rounded-lg p-1"
                        placeholder="Enter a number"
                        />
                </div>
            </div>
        </div>
    </section>
  )
}

export default DefaultAddress
