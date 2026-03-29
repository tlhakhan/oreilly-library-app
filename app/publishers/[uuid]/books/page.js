import {publishers, books, getBookCount} from '@/db'
import Image from 'next/image'
import Link from 'next/link'

const PublicationDate = ({year}) => {

  let cn = ""

  switch (year) {
    case "2027":
    case "2026":
    case "2025":
    case "2024":
      cn ="bg-blue-500";
      break
    case "2023":
      cn = "bg-emerald-500";
      break
    case "2022":
      cn = "bg-green-500";
      break
    case "2021":
      cn = "bg-lime-500";
      break
    case "2020":
    case "2019":
      cn = "bg-yellow-500";
      break
    case "2018":
      cn = "bg-amber-500";
      break
    case "2017":
    case "2016":
    case "2015":
    case "2014":
      cn = "bg-orange-500";
      break
    default:
      cn = "bg-gray-200";
 }

  return(
    <span className={[cn, "leading-none","rounded-full","text-white", "px-1"].join(' ')}>{year}</span>
  )
}

const BookCard = ({book: b}) => {
  return(<div className="flex flex-col items-center">
    <div className="flex-1 text-xs text-gray-500">
      <div className="flex justify-between items-start">
        <span className="pr-1">{b.name}</span>
        <PublicationDate year={b.publication_date.slice(0,4)}/>
      </div>
    </div>
    <div className="flex-1 p-5">
      <Link
        href={`https://learning.oreilly.com/library/view/-/${b.identifier}/`}
        target="_blank" >
        <Image src={`/cover/${b.identifier}.jpeg`} alt={b.name} width={200} height={150}/>
      </Link>
    </div>
    </div>
  )
}

export default async function Page({params}) {
  const {uuid} = await params
  const p = publishers.find(p => p.uuid === uuid)

  const selected = books
                    .filter(b => b.publishers.some(p => p.uuid === uuid))
                    .toSorted((a,b) => b.popularity - a.popularity)
                    .map(b => <BookCard key={b.name} book={b}/>)

    return (<div>
      <header className="flex justify-between items-center border-b border-gray-400 shrink-0">
        <div>
          <span className="text-lg font-medium pr-1">{p.name}</span>
          <span className="text-sm text-gray-500">({getBookCount(p)})</span>
        </div>
      </header>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] mt-5 gap-4 items-start">
        {selected}
      </div>
      </div>)
}
