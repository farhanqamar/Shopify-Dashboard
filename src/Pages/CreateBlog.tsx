import { useState } from 'react'
import Editor from '../Components/DescriptionInput'
import BlogOrganization from '../Components/BlogOrganization'
import BlogOrganizationBlog from '../Components/BlogOrganizationBlog'
import OnlineStore from '../Components/OnlineStore'
import { Link } from 'react-router-dom'

const CreateBlog = () => {
    const [editor, setEditor] = useState(false)
    const [editWebsite, setEditWebsite] = useState(false)
  return (
    <section className='flex md:flex-row flex-col justify-center md:space-x-3 md:space-y-0 space-y-3'>
        <div className='md:w-1/3 space-y-3'>
            <div>
                <h1 className='text-lg font-bold p-2'>Add Blog Post</h1>
            </div>

            <div className='bg-white p-4 rounded-lg space-y-4 border'>
                <div className='flex flex-col space-y-2 p-2'>
                     <label htmlFor="">Title</label>
                    <input type="text" className='p-2 border border-black rounded-lg'/>
                </div>
                <Editor />
            </div>

            <div className='bg-white p-4 rounded-lg space-y-4 border'>
                <div className='flex justify-between'>
                    <h1 className='text-base font-semibold'>Excerpt</h1>
                    <button onClick={() => setEditor(!editor)} className='text-blue-500 text-sm font-semibold'>Add Excerpt</button>
                </div>
                <p className='font-semibold'>Add a summary of the post to appear on your home page or blog.</p>
                <div>
                  {editor && (  <Editor /> )}
                </div>
            </div>

            <div className='bg-white p-4 rounded-lg space-y-4 border'>
                <div className='flex justify-between'>
                    <h1 className='text-base font-semibold'>Search engine listing preview</h1>
                    <button onClick={() => setEditWebsite(!editWebsite)} className='text-blue-500 text-sm font-semibold'>Edit Website SEO</button>
                </div>
                <p className='font-semibold border-b py-2'>Add a title and description to see how this Blog post might appear in a search engine listing.</p>
                <div>
                  {editWebsite && (  
                   <div className='space-y-4 font-semibold'>
                        <div className='flex flex-col space-y-2'>
                            <label htmlFor="">Title</label>
                            <input type="text" className='p-2 border border-black rounded-lg'/>
                            <p>0 of 70 characters used</p>
                        </div>

                        <div className='flex flex-col space-y-2'>
                            <label htmlFor="">Description</label>
                            <textarea rows={4} className='p-2 border border-black rounded-lg'/>
                            <p>0 of 320 characters used</p>
                        </div>

                        <div className='flex flex-col space-y-2'>
                            <label htmlFor="">URL and Handle</label>
                            <input type="text" className='p-2 border border-black rounded-lg'/>
                        </div>
                   </div>
                   )}
                </div>
            </div>
        </div>

        <div className='md:py-14 space-y-3'>
            <div className='bg-white p-2 rounded-lg border'>
                <h1 className='text-base font-semibold'>Featured Image</h1>
                <input type="file"  className='py-6 px-6'/>
            </div>

            <div className='bg-[#F7F7F7] p-2 py-6 rounded-lg border space-y-3'>
                    <h1 className='text-base font-semibold'>Organization</h1>
                <div >
                    <BlogOrganization />
                </div>

                <div >
                    <BlogOrganizationBlog />
                </div>
            </div>

            <div className='bg-white rounded-lg border p-2 space-y-4'>
                <h1 className='text-base font-semibold'>Online Store</h1>
                <div>
                    <OnlineStore />
                   
                </div>
            </div>
             
            <div className='flex justify-end'>
                <Link to='/blogtable'><button className='flex m-auto bg-black/75 hover:bg-black text-xs font-bold rounded-lg px-3 py-2 text-white'>Save</button>
                </Link>
            </div>

        </div>

    </section>
  )
}

export default CreateBlog
