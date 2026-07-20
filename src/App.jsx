import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  const location = useLocation();

  useEffect(() => {
    // This hack forces the template's main.js to re-evaluate after the React DOM 
    // has updated for the new route, ensuring sliders and menus bind correctly.
    const scriptId = 'template-main-js';
    const oldScript = document.getElementById(scriptId);
    if (oldScript) {
      oldScript.remove();
    }
    
    // Also remove the one hardcoded in index.html if it exists
    const hardcodedScript = document.querySelector('script[src="/assets/js/main.js"]');
    if (hardcodedScript && !hardcodedScript.id) {
        hardcodedScript.remove();
    }

    // Clean up MeanMenu to prevent duplicate menus
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
        mobileMenu.innerHTML = '';
    }
    
    // Also remove any stray .mean-push elements that might accumulate
    document.querySelectorAll('.mean-push').forEach(el => el.remove());

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = '/assets/js/main.js';
    script.async = false;
    document.body.appendChild(script);
    
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
