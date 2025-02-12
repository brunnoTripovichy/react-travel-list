import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Home from './pages/Home';
import PackingList from './features/PackingList';

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 overflow-auto">
        <Routes>
          <Route index element={<Home />} />
          <Route path="packing-list" element={<PackingList />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
