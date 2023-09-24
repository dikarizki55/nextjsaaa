import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='mb-10'>
      <div className='w-100 bg-red-500 text-white text-center text-6xl p-5 mb-6'>Navbar</div>
      <Link href="/" className="bg-blue-500 p-3 hover:bg-gray-500 transition-all duration-1000 hover:transition-all hover:duration-1000 rounded-full text-white uppercase">Home</Link>
      <Link href="/default" className="bg-blue-500 p-3 hover:bg-gray-500 transition-all duration-1000 hover:transition-all hover:duration-1000 rounded-full text-white uppercase">linkaja</Link>
      <Link href="/cari" className="bg-blue-500 p-3 hover:bg-gray-500 transition-all duration-1000 hover:transition-all hover:duration-1000 rounded-full text-white uppercase">cari</Link>
      <Link href="/products" className="bg-blue-500 p-3 hover:bg-gray-500 transition-all duration-1000 hover:transition-all hover:duration-1000 rounded-full text-white uppercase">Products</Link>

    </div>
    
  )
}
