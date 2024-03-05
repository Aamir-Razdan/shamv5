import React from 'react'
import NavBar from '../../../features/navbar/Navbar'
import Footer from '../../../features/common/Footer'
import ProductList from '../../../features/product/components/ProductList'
import Allothercategory from './Allothercategory'



const OversizedMen = () => {
  return (
    <div>
    <NavBar></NavBar>
    <Allothercategory></Allothercategory>
    <ProductList></ProductList>
      <Footer></Footer>
    </div>
  )
}

export default OversizedMen
