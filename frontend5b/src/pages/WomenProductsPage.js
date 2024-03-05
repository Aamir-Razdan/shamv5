import React from 'react'
import ProductList from '../features/product/components/ProductList'
import NavBar from '../features/navbar/Navbar'
import Footer from '../features/common/Footer'
import Allothercategory from './LandingPage/Allothercategory/Allothercategory'
const WomenProductsPage = () => {
  return (
    <div>
        <NavBar></NavBar>
        <Allothercategory></Allothercategory>
        <ProductList></ProductList>
        <Footer></Footer>
      
    </div>
  )
}

export default WomenProductsPage
