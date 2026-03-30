import { books } from "@/db"
import { BookCard } from "@/components/ui/book-card"

const newerThan2018 = /\b(20[2-9]\d)\b/
const selected = books
  .toSorted((a, b) => b.popularity - a.popularity)
  .filter((b) => b.publication_date.match(newerThan2018)?.length ?? 0 > 0)
  .map((b) => <BookCard key={b.identifier} book={b} />)
  .slice(0, 4999)

export default async function Page() {
  return (
    <div>
      <header className="flex items-center justify-between border-b border-gray-500 mb-5 shrink-0">
        <div>
          <span className="text-lg font-medium pr-1">Books</span>
          <span className="text-sm text-gray-500">({selected.length})</span>
        </div>
      </header>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
        {selected}
      </div>
    </div>
  )
}
