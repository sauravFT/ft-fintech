'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = ['Tools', 'Features', 'Solutions', 'Pricing'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      zIndex: 9999, padding: '20px 40px',
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'background 0.3s ease',
      background: scrolled ? 'rgba(0,0,0,0.4)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
    }}>
      <span style={{ fontSize: 22, fontWeight: 600, color: '#ebe9e5', letterSpacing: '-0.5px' }}>
        FT Fintech
      </span>
      <nav style={{
        display: 'flex', alignItems: 'center', gap: 30,
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 8, padding: '10px 24px',
        backdropFilter: 'blur(10px)',
      }} className="hidden md:flex">
        {links.map(l => <span key={l} className="nav-link">{l}</span>)}
        <button className="btn-primary" style={{ padding: '8px 16px', fontSize: 13 }}>Sign Up &rarr;</button>
      </nav>
      <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}
        style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: 8 }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {mobileOpen
            ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
            : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
          }
        </svg>
      </button>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'rgba(10,10,10,0.95)',
              backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)',
              padding: '24px 40px', display: 'flex', flexDirection: 'column', gap: 20 }}>
            {links.map(l => <span key={l} className="nav-link" style={{ fontSize: 16 }}>{l}</span>)}
            <button className="btn-primary" style={{ alignSelf: 'flex-start' }}>Sign Up &rarr;</button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}