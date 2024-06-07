import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

const Dashboard = () => {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <MainContent>
          <Outlet />
        </MainContent>
      </div>
    </section>
  );
};

export default Dashboard;
