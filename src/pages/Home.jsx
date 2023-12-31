import { useDispatch, useSelector } from 'react-redux'
import ProductList from '../component/ProductList'
import Navbar from '../component/Navbar'
import Crousel from '../component/Crousel'
import Footer from '../component/Footer'
import { addToCartAC, initializeCartAC, initializeProductsAC, initializeUserAC } from '../action'
import { useEffect } from 'react'


const Home = () => {

  const dispatch = useDispatch()
  const products = useSelector(state=>state.product.products)
  const cartItems = useSelector(state=>state.cart.items)

  const addToCart = (product)=>{
    dispatch(addToCartAC(product))
  }
  useEffect(() => {
    dispatch( initializeUserAC());
   dispatch( initializeProductsAC());
  }, [])
  

  return (
    <>
    <Navbar cartCount={cartItems.length}/>
    <Crousel/>
    <ProductList products={products} addToCart={addToCart} />
    <Footer/>

</>
  )
}

export default Home
