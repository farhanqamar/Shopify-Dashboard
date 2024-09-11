import { useState } from "react";
import Analytics from "./Pages/Analytics/Analytics";
import AdminSideBar from "./Components/AdminSideBar/AdminSideBar";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Test from "./Pages/Test";
import Order from "./Pages/Order";
import {Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import Collection from "./Pages/Collection";
import New from "./Pages/New";
import Customer from "./Pages/customers/Customer";
import NewCustomer from "./Pages/customers/NewCustomer";
import Discount from "./Pages/Discount";
import CreateDiscount from "./Pages/CreateDiscount";
import BlogPosts from "./Pages/BlogPosts";
import CreateBlog from "./Pages/CreateBlog";



function App() {


  return (
    <>
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
          <Route path='/product/collection/new' element={<New />} />

          <Route path='/customer' element={<Customer/>} />
          <Route path='/customer/newCustomer' element={<NewCustomer/>} />

          <Route path='/discount' element={<Discount/>} />
          <Route path='/discount/createDiscount' element={<CreateDiscount/>} />


          <Route path='/blog-post' element={<BlogPosts/>} />
          <Route path='/blog-post/createBlog' element={<CreateBlog/>} />



          <Route path='/test' element={<Test />} />
        </Routes>
        </div>
      </div>
    </>
  )
}

export default App;