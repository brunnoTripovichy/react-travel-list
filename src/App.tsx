import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Home from './pages/Home';
import PackingList from './features/PackingList';

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Sticky Header */}
      <Header />

      {/* Scrollable Main Content (fills available space) */}
      <main className="flex-1 overflow-auto bg-blue-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packing-list" element={<PackingList />} />
        </Routes>
      </main>

      {/* Sticky Footer */}
      <Footer />
    </div>
  );
};

export default App;
