import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <div className='w-100 bg-red-500 text-white text-center text-6xl p-5'>Navbar</div>
      <p className='mb-5 mt-5'>misal nih aku tambahin aku rubah</p>
      <Link href="/" className="bg-blue-500 p-3 hover:bg-gray-500 transition-all duration-1000 hover:transition-all hover:duration-1000 rounded-full text-white uppercase">Home</Link>
      <Link href="/default" className="bg-blue-500 p-3 hover:bg-gray-500 transition-all duration-1000 hover:transition-all hover:duration-1000 rounded-full text-white uppercase">linkaja</Link>

    </div>
    
  )
}
