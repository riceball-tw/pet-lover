import Link from 'next/link'

export default function Home() {
  return <>
    <Link href="/breeds" className="h-screen w-screen font-bold flex justify-center items-center underline">Click and Go Breeds Page</Link>
  </>
}