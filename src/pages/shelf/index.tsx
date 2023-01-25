import ShelfTable from "@/components/shelf/ShelfTable"

export default function Home() {

  return (
    <div className="overflow-auto">
      <h1 className="text-2xl font-bold ">
        Raf Yeri Yönetimi
      </h1>
      <hr />
      <ShelfTable />
    </div>
  )

}
