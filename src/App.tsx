import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer } from './components/layout';
import { FloatingCalendlyButton } from './components/ui';
import {
  HomePage,
  HomeServicesPage,
  PropertyManagementPage,
  AutomotivePage,
  RetailPage,
  SaasStartupsPage,
} from './pages';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  // Custom cursor click handler - shows thumbs up on click
  useEffect(() => {
    const handleMouseDown = () => {
      document.documentElement.classList.add('cursor-clicking');
    };

    const handleMouseUp = () => {
      document.documentElement.classList.remove('cursor-clicking');
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Header />
      <FloatingCalendlyButton />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home-services" element={<HomeServicesPage />} />
          <Route path="/property-management" element={<PropertyManagementPage />} />
          <Route path="/automotive" element={<AutomotivePage />} />
          <Route path="/retail" element={<RetailPage />} />
          <Route path="/saas-startups" element={<SaasStartupsPage />} />
          {/* Pricing page will be added later */}
          {/* <Route path="/pricing" element={<PricingPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
