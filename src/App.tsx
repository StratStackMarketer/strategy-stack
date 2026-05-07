import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer } from './components/layout';
import { FloatingBookingButton } from './components/ui';
import {
  HomePage,
  HomeServicesPage,
  PropertyManagementPage,
  AutomotivePage,
  RetailPage,
  SaasStartupsPage,
  PrivacyPage,
  TermsPage,
  PricingPage,
  BoosterPackPage,
} from './pages';
import { AuditsPage } from './pages/AuditsPage';
import { AIAutomationPage } from './pages/AIAutomationPage';
import { WhatToExpectPage } from './pages/WhatToExpectPage';
import { ProductsPage } from './pages/ProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { PricingPackagingPage } from './pages/PricingPackagingPage';
import { BoosterPacksPage } from './pages/BoosterPacksPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { SuccessStoriesPage } from './pages/SuccessStoriesPage';
import { UseCasesPage } from './pages/UseCasesPage';
import { ToolsPage } from './pages/ToolsPage';
import { BlogPage } from './pages/BlogPage';

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
      <FloatingBookingButton />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home-services" element={<HomeServicesPage />} />
          <Route path="/property-management" element={<PropertyManagementPage />} />
          <Route path="/automotive" element={<AutomotivePage />} />
          <Route path="/retail" element={<RetailPage />} />
          <Route path="/saas-startups" element={<SaasStartupsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/30-day-blitz" element={<BoosterPackPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/how-it-works/audits" element={<AuditsPage />} />
          <Route path="/how-it-works/ai-automation" element={<AIAutomationPage />} />
          <Route path="/how-it-works/what-to-expect" element={<WhatToExpectPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/pricing-packaging" element={<PricingPackagingPage />} />
          <Route path="/booster-packs" element={<BoosterPacksPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resources/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/resources/use-cases" element={<UseCasesPage />} />
          <Route path="/resources/tools" element={<ToolsPage />} />
          <Route path="/blog" element={<BlogPage />} />
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
