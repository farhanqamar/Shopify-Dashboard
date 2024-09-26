import { useState } from 'react'
import Editor from '../Components/DescriptionInput'
import BlogOrganization from '../Components/BlogOrganization'
import BlogOrganizationBlog from '../Components/BlogOrganizationBlog'
import OnlineStore from '../Components/OnlineStore'
import { Link } from 'react-router-dom'
import { MdArrowBack } from "react-icons/md";


const CreateBlog = () => {
    const [editor, setEditor] = useState(false)
    const [editWebsite, setEditWebsite] = useState(false)
  return (
    <section className='flex lg:flex-row flex-col justify-center lg:space-x-3 lg:space-y-0 space-y-3'>
        <div className='lg:w-2/5 space-y-3'>
        <div className='flex items-center space-x-2 py-4'>
            <Link to={'/blog-post'}><MdArrowBack className='text-xl'/></Link>
                <h1 className='text-xl font-bold'>Create Blog Post</h1>
            </div>

            <div className='bg-white px-3 py-4 rounded-lg space-y-4 border'>
                <div className='flex flex-col space-y-1 '>
                     <label htmlFor="" className='text-sm '>Title</label>
                    <input type="text" className='p-2 border border-black rounded-lg'/>
                </div>
                <div className='text-sm space-y-1'>
                    <h1>Content</h1>
                    <Editor />
                </div>

            </div>

            <div className='bg-white p-4 rounded-lg space-y-4 border'>
                <div className='flex justify-between'>
                    <h1 className='text-base font-semibold'>Excerpt</h1>
                    <button onClick={() => setEditor(!editor)} className='text-blue-500 text-sm font-semibold'>Add Excerpt</button>
                </div>
                <p className='text-sm'>Add a summary of the post to appear on your home page or blog.</p>
                <div>
                  {editor && (  <Editor /> )}
                </div>
            </div>

            <div className='bg-white p-4 rounded-lg space-y-4 border'>
                <div className='flex justify-between'>
                    <h1 className='text-base font-semibold'>Search engine listing preview</h1>
                    <button onClick={() => setEditWebsite(!editWebsite)} className='text-blue-500 text-sm font-semibold'>Edit Website SEO</button>
                </div>
                <p className='text-sm border-b py-2'>Add a title and description to see how this Blog post might appear in a search engine listing.</p>
                <div>
                  {editWebsite && (  
                   <div className='space-y-4 text-sm'>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor="">Title</label>
                            <input type="text" className='p-2 border border-black rounded-lg'/>
                            <p>0 of 70 characters used</p>
                        </div>

                        <div className='flex flex-col space-y-1'>
                            <label htmlFor="">Description</label>
                            <textarea rows={4} className='p-2 border border-black rounded-lg'/>
                            <p>0 of 320 characters used</p>
                        </div>

                        <div className='flex flex-col space-y-1'>
                            <label htmlFor="">URL and Handle</label>
                            <input type="text" className='p-2 border border-black rounded-lg'/>
                        </div>
                   </div>
                   )}
                </div>
            </div>
        </div>

        <div className='lg:py-16 space-y-3'>
            <div className='bg-white p-2 rounded-lg border space-y-1'>
                <h1 className='text-sm font-semibold'>Featured Image</h1>
                <div className="py-2 px-0 rounded-lg border border-dashed border-black">
                    <input type="file" className="py-6 px-5" />
                </div>
            </div>

            <div className='bg-[#F7F7F7] p-2 py-6 rounded-lg border space-y-3'>
                    <h1 className='text-sm font-semibold'>Organization</h1>
                <div >
                    <BlogOrganization />
                </div>

                <div >
                    <BlogOrganizationBlog />
                </div>
            </div>

            <div className='bg-white rounded-lg border px-2 py-4 space-y-4'>
                <h1 className='text-sm font-semibold'>Online Store</h1>
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
