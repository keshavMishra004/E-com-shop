import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaShoppingCart, FaSearch, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchTerm } from '../Redux/productSlice'
import { useState } from 'react'



const Navbar = () => {
    const products = useSelector(state => state.cart.products)
    const [searchTerm, setSearchTerm] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault();
        // Implement search functionality here
        dispatch(setSearchTerm(searchTerm));
        setSearchTerm("");
        navigate("/filter-data");
    }
  return (
    <nav className='bg-white shadow-md'>
        <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
            <div className='text-lg font-bold'>
                <Link to="/">Shoppy Globe</Link>
            </div>
            <div className='relative flex-1 mx-4' >
                <form onSubmit={handleSearch} >
                    <input type="text" placeholder='Search Product' className='w-full border py-2 px-4' onChange={(e)=> setSearchTerm(e.target.value)}/>
                    <FaSearch className='absolute top-3 right-3 text-red-500'></FaSearch>
                </form>
            </div>
            <div className='flex items-center space-x-4'>
                <Link to='/cart' className='relative'>
                    <FaShoppingCart className='text-lg'/>
                    {products.length> 0 && (
                        <span className='absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white'>
                            {products.length}
                        </span>
                    )}
                </Link>
                <button className='hidden md:block'>
                    Login | Register
                </button>
                <button className='block md:hidden'>
                    <FaUser/>
                </button>
            </div>
        </div>
        <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
            <Link to="/" className='hover:underline'>
                 Home
            </Link>
            <Link to="/shop" className='hover:underline'>
                 Shop
            </Link>
            <Link to="/" className='hover:underline'>
                 Contact
            </Link>
            <Link to="/" className='hover:underline'>
                 About
            </Link>
        </div>
    </nav>
    
  )
}

export default Navbar
