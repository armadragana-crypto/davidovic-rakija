import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import PonudaPage from './pages/PonudaPage';
import PonudaCategoryPage from './pages/PonudaCategoryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-[100dvh] sm:min-h-screen overflow-x-clip bg-transparent text-cream">
        <div className="site-backdrop" aria-hidden="true" />

        <Navigation />

        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/o-nama" element={<AboutPage />} />
            <Route path="/ponuda" element={<PonudaPage />} />
            <Route path="/ponuda/:slug" element={<PonudaCategoryPage />} />
            <Route path="/galerija" element={<ProductsPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;
