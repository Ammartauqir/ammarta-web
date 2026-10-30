import './App.css';
import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import AboutMe from './components/Aboutme.jsx';
import Projects from './components/Projects.jsx';
import GitHubSection from './components/GitHubSection.jsx';
import Footer from './components/Footer.jsx';
import NotFound from './components/NotFound.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

const AboutPage = lazy(() => import('./components/AboutPage.jsx'));
const BlogPage = lazy(() => import('./components/BlogPage.jsx'));
const BlogPost = lazy(() => import('./components/BlogPost.jsx'));
const ProjectsPage = lazy(() => import('./components/ProjectsPage.jsx'));
const ContactPage = lazy(() => import('./components/ContactPage.jsx'));
const SandboxPage = lazy(() => import('./components/SandboxPage.jsx'));

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      '/': 'Muhammad Ammar Tauqir | Portfolio',
      '/about': 'About | Muhammad Ammar Tauqir',
      '/blog': 'Neuron Notes | Muhammad Ammar Tauqir',
      '/blog/agentic-ai': 'Agentic AI | Neuron Notes',
      '/projects': 'Projects | Muhammad Ammar Tauqir',
      '/contact': 'Contact | Muhammad Ammar Tauqir',
      '/sandbox': 'Sandbox | Muhammad Ammar Tauqir',
    };
    document.title = titles[location.pathname] || 'Muhammad Ammar Tauqir | Portfolio';

    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="bg-white dark:bg-black text-gray-950 dark:text-white duration-300">
          <ScrollManager />
          <Header />
          <Suspense fallback={<div className="min-h-screen pt-28 text-center">Loading…</div>}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <AboutMe />
                    <Projects />
                    <GitHubSection />
                  </>
                }
              />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/agentic-ai" element={<BlogPost />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/sandbox" element={<SandboxPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
