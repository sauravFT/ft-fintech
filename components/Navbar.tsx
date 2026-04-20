'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = ['Products', 'Solutions', 'Clients', 'Features', 'Pricing', 'About'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: '0 40px', height: 64,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(0,0,0,0.7)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 28, height: 28, background: 'linear-gradient(135deg, #2563eb, #7c3aed)', borderRadius: 6 }} />
        <span style={{ fontSize: 18, fontWeight: 700, color: 'white', letterSpacing: '-0.5px' }}>FT Fintech</span>
      </div>
      <nav style={{
        display: 'flex', alignItems: 'center', gap: 24,
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 8, padding: '8px 20px',
        backdropFilter: 'blur(10px)',
      }} className="hidden md:flex">
        {links.map(l => <span key={l} className="nav-link">{l}</span>)}
        <button className="btn-primary" style={{ padding: '6px 16px', fontSize: 14 }}>Sign Up</button>
      </nav>
      <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {mobileOpen ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
        </svg>
      </button>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)', padding: '20px 40px', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {links.map(l => <span key={l} className="nav-link" style={{ fontSize: 16 }}>{l}</span>)}
            <button className="btn-primary" style={{ alignSelf: 'flex-start' }}>Sign Up</button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}