import Link from "next/link"

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-10">
      <h1 className="text-blue-600 text-[50px]">Hello World</h1>
      <div>
        <Link href="/default" className="bg-blue-500 p-3 hover:bg-blue-400 transition-all hover:transition-all rounded-full text-white uppercase">linkaja</Link>
      </div>
    </div>
  )
}
