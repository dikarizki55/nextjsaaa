import React from 'react'
import useSWR from 'swr'

const fetcher = (url:string) => fetch(url).then(res => res.json())

interface Props{
    query:string,
}

export default function SectionResult({query}:Props) { 
    const {data} = useSWR(`https://api.github.com/search/users?q=${query}`, fetcher)
  return (
    <div>
        <p className='mt-5'>Hasil pencarian : {query}</p>
        <div>
            {JSON.stringify(data)}
        </div>
    </div>
  )
}
