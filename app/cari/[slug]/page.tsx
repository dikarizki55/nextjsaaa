import React, { Suspense } from 'react'

async function getData(param:string) {
  const res = await fetch(`https://api.github.com/users/${param}`)
  return res.json()
}
async function getDataSearch(param:string) {
  const res = await fetch(`https://api.github.com/search/users?q=${param}`)
  await new Promise(r=>setTimeout(r, 3000))
  return res.json()
}

async function DataSearch({query}:any){
  const data = await getDataSearch(query)
  return(
    <div>
      <p>Detail Search : {query}</p>
      <div>
        {JSON.stringify(data)}
      </div>
    </div>
  )
}

export default async function DetailCari({params}:{params:{slug:string}}) {
  const data = await getData(params.slug)
  return (
    <div>
      <p>Detail User : {params.slug}</p>
      <div>
        {JSON.stringify(data)}
      </div>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <Suspense fallback={<div>Loading brooo.... SABAR ANJINKKK!!!!</div>}>
        <DataSearch query={params.slug} />
      </Suspense>
    </div>
  )
}
