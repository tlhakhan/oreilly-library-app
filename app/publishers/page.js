import { publishers, getBookCount } from "@/db"
import Link from "next/link"

const Publisher = ({ publisher: p }) => {
  return (
    <div>
      <span className="pr-1">
        <Link
          className="hover:underline visited:text-purple-600"
          href={`/publishers/${p.uuid}/books`}
        >
          {p.name}
        </Link>
      </span>
      <span className="text-sm text-gray-500">({getBookCount(p)})</span>
    </div>
  )
}

const selected = publishers
  .filter((p) => p.is_active)
  .filter((p) => getBookCount(p) > 0)
  .map((p) => <Publisher key={p.uuid} publisher={p} />)

export default function Page() {
  return (
    <div>
      <header className="flex justify-between items-center border-b shrink-0 border-gray-400">
        <div>
          <span className="text-lg font-medium pr-1">Publishers</span>
          <span className="text-sm text-gray-500">({selected.length})</span>
        </div>
      </header>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-x-4 mt-4">
        {selected}
      </div>
    </div>
  )
}
