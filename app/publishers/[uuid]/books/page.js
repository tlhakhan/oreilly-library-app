import { publishers, books, getBookCount } from "@/db"
import Image from "next/image"
import Link from "next/link"
import { BookCard } from "@/components/ui/book-card"

export default async function Page({ params }) {
  const { uuid } = await params
  const p = publishers.find((p) => p.uuid === uuid)

  const selected = books
    .filter((b) => b.publishers.some((p) => p.uuid === uuid))
    .toSorted((a, b) => b.popularity - a.popularity)
    .map((b) => <BookCard key={b.name} book={b} />)

  return (
    <div>
      <header className="flex justify-between items-center border-b border-gray-400 shrink-0 mb-5">
        <div>
          <span className="text-lg font-medium pr-1">{p.name}</span>
          <span className="text-sm text-gray-500">({getBookCount(p)})</span>
        </div>
      </header>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
        {selected}
      </div>
    </div>
  )
}
