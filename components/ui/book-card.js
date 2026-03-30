import { books } from "@/db"
import Image from "next/image"
import Link from "next/link"

const PublicationDate = ({ year }) => {
  let cn = ""
  switch (year) {
    case "2028":
    case "2027":
    case "2026":
    case "2025":
      cn = "bg-blue-500"
      break
    case "2024":
      cn = "bg-emerald-500"
      break
    case "2023":
      cn = "bg-green-500"
      break
    case "2022":
      cn = "bg-lime-500"
      break
    case "2021":
      cn = "bg-yellow-500"
      break
    case "2020":
    case "2019":
      cn = "bg-amber-500"
      break
    case "2018":
      cn = "bg-orange-500"
      break
    case "2017":
    case "2016":
    case "2015":
    case "2014":
      cn = "bg-gray-500"
      break
    default:
      cn = "bg-gray-200"
  }

  return (
    <span className={[cn, "rounded-full", "text-white", "px-1"].join(" ")}>
      {year}
    </span>
  )
}

export const BookCard = ({ book: b }) => {
  return (
    <div className="flex flex-col">
      <div className="text-xs text-gray-700 pb-2">
        <div className="justify-center items-center text-center">
          <span className="pr-1">
            <Link
              className="hover:underline visited:text-purple-600"
              target="_blank"
              href={`https://learning.oreilly.com/library/view/-/${b.identifier}/`}
            >
              {b.name}
            </Link>
          </span>
          <PublicationDate year={b.publication_date.slice(0, 4)} />
        </div>
      </div>
      <div className="pb-4">
        <div className="flex justify-center text-center items-center">
          <Link
            href={`https://learning.oreilly.com/library/view/-/${b.identifier}/`}
            target="_blank"
          >
            <Image
              className="shadow-lg"
              src={`/cover/${b.identifier}.jpeg`}
              alt={b.name}
              width={200}
              height={150}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
