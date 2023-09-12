import React from 'react'
import useSWR from 'swr'
import Link from 'next/link'

const fetcher = (url:string) => fetch(url).then(res => res.json())

interface Props{
    query:string,
}

export default function SectionResult({query}:Props) { 
  const {data, error} = useSWR(`https://api.github.com/search/users?q=${query}`, fetcher)
  var loading = !data && !error
  return (
    <div>
        <p className='mt-5'>Hasil pencarian : {query}</p>
        <div>
            {loading && "Loading...."}

              {data && data.items.map((user:any,index:number)=>{
                return <ol className='list-disc ml-10' key={index}>
                    <li className='text-red-600'><Link href={`/cari/${user.login}`}>{user.login}</Link></li>
                    <li className='text-blue-500'><Link href={user.repos_url}>Repository</Link>  </li>
                  </ol>
              })}

        </div>
    </div>
  )
}
