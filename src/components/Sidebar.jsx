import { FaHandHoldingMedical } from 'react-icons/fa';
import { CgNotes } from 'react-icons/cg';
import { FaTrophy } from 'react-icons/fa';
import { CgInsights } from 'react-icons/cg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <aside className={`bg-black text-white min-h-screen ${isSidebarOpen ? 'w-full' : 'w-[20%]'} ${isSidebarOpen ? 'fixed inset-0 z-50' : ''}`}>
      <button className="block sm:hidden" onClick={toggleSidebar}>
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      <div className={`${isSidebarOpen ? 'block' : 'hidden'} sm:block flex flex-col gap-7 px-8 py-5`}>
        <div>
          <div className="flex items-center gap-2 text-xl sm:text-3xl">
            <FaHandHoldingMedical />
            <p>Feed By</p>
          </div>
          <ul className="mx-10 mt-2 text-lg">
            <li><Link to="feeds">Categories</Link></li>
            <li><Link to="feeds">Brands</Link></li>
            <li><Link to="feeds">Products</Link></li>
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-2 text-xl sm:text-3xl">
            <CgNotes />
            <p>Reports</p>
          </div>
          <ul className="mx-10 mt-2 text-lg">
            <li><Link to="reports">Categories</Link></li>
            <li><Link to="reports">Brands</Link></li>
            <li><Link to="reports">Products</Link></li>
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-2 text-xl sm:text-3xl">
            <FaTrophy />
            <p>Competitors</p>
          </div>
          <ul className="mx-10 mt-2 text-lg">
            <li><Link to="competitors">Products</Link></li>
            <li><Link to="competitors">Prices</Link></li>
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-2 text-xl sm:text-3xl">
            <CgInsights />
            <p>Insights</p>
          </div>
          <ul className="mx-10 mt-2 text-lg">
            <li><Link to="insights">Keywords</Link></li>
            <li><Link to="insights" className='hover:underline hover:font-semibold'>Sentiments</Link></li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
