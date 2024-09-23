import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Analytics = lazy(() => import('./Pages/Analytics/Analytics'));
const AdminSideBar = lazy(() => import("./Components/AdminSideBar/AdminSideBar"));
const Navbar = lazy(() => import("./Components/Navbar/Navbar"));
const Home = lazy(() => import("./Pages/Home"));
const Test = lazy(() => import("./Pages/Test"));
const Order = lazy(() => import("./Pages/Order"));
const Product = lazy(() => import("./Pages/Product"));
const Collection = lazy(() => import("./Pages/Collection"));
const New = lazy(() => import("./Pages/New"));
const Customer = lazy(() => import("./Pages/customers/Customer"));
const NewCustomer = lazy(() => import("./Pages/customers/NewCustomer"));
const Discount = lazy(() => import("./Pages/Discount"));
const CreateDiscount = lazy(() => import("./Pages/CreateDiscount"));
const BlogPosts = lazy(() => import("./Pages/BlogPosts"));
const CreateBlog = lazy(() => import("./Pages/CreateBlog"));
const NewProduct = lazy(() => import("./Components/NewProduct"));
const OrderTablePage = lazy(() => import("./Pages/OrderTablePage"))




function App() {

  return (
    <>
    <Suspense fallback={<div className="text-lg font-bold text-center">Loading...</div>}>
    <Navbar/>
      <div className="grid grid-cols-8 ">
        <div className={`col-span-2 2xl:col-span-1 h-[95.6vh] hidden md:block`}>
              <AdminSideBar />
        </div>
        <div className="col-span-8 md:col-span-6 2xl:col-span-7 bg-[#F1F1F1] h-[95.6vh] overflow-y-auto"> 
        <Routes>
          <Route path='/' element={<Home />} />
          

          <Route path='/analytics' element={<Analytics />} />
          <Route path='/order' element={<Order />} />

          <Route path='/product' element={<Product />} />
          <Route path='/product/collection' element={<Collection />} />
          <Route path='/product/newproduct' element={<NewProduct />} />

          <Route path='/customer' element={<Customer/>} />
          <Route path='/customer/newCustomer' element={<NewCustomer/>} />

          <Route path='/discount' element={<Discount/>} />
          <Route path='/discount/createDiscount' element={<CreateDiscount/>} />


          <Route path='/blog-post' element={<BlogPosts/>} />
          <Route path='/blog-post/createBlog' element={<CreateBlog/>} />

          <Route path="/orderTablePage" element={<OrderTablePage />} />
          <Route path='/test' element={<Test />} />
        </Routes>
        </div>
      </div>
    </Suspense>

    
    </>
  )
}

export default App;