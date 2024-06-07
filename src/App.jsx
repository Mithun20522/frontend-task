import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PageNotFound from './pages/Error';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import Feeds from './components/Feeds';
import Reports from './components/Reports';
import Insights from './components/Insights';
import Competitors from './components/Compititors';
import Sentiments from './components/Sentiments';
import Keywords from './components/Keywords';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='feeds' element={<Feeds />} />
          <Route path='reports' element={<Reports />} />
          <Route path='insights' element={<Insights />} />
          <Route path='competitors' element={<Competitors />} />
          <Route path='insights/keywords' element={<Keywords />} />
          <Route path='insights/sentiments' element={<Sentiments />} />
        </Route>
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
