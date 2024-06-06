import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <div className="flex flex-col gap-5 h-screen items-center justify-center">
      <div className="border p-5">
        <span className="text-xl text-red-500 font-bold">Error: 404</span>
        <p className="text-md">Page not found</p>
      </div>
      <Link to={'/'} className="bg-slate-500 hover:bg-slate-700 px-3 py-1 text-white rounded-lg">Go back</Link>
    </div>
  )
}

export default PageNotFound