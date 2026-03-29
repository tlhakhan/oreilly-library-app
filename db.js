import { JSONFilePreset } from "lowdb/node";

export const { publishers } = (
  await JSONFilePreset("./db/publishers.json", { publishers: [] })
).data;

export const { books } = (
  await JSONFilePreset("./db/books.json", { books: [] })
).data;


// book stats
const stats = new Map()
for (const book of books) {
  book.publishers.forEach(p => stats.set(p.uuid, (stats.get(p.uuid) ?? 0) + 1))
}

export const getBookCount = ({uuid}) => {
  return stats.get(uuid)
}
