"use client"
import React, { useState } from 'react'
import SectionResult from './sectionResult'

export default function Cari() {

    const [query, setQuery] = useState('')

    const onSearch=(e:any)=>{
        e.preventDefault()
        const inputQuery = e.target[0].value;
        setQuery(inputQuery)
    }

  return (
    <div>
        <form onSubmit={onSearch}>
            <input type="text" className='border rounded border-black' placeholder='Cari User Github'/>
            <button className='border border-black rounded'>Cari Orang</button>
        </form>
        {query && <SectionResult query={query}/>}

    </div>
  )
}
