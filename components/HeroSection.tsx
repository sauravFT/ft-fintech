'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 40px 80px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 900, textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 20, padding: '6px 16px', marginBottom: 24 }}>
            <div style={{ width: 6, height: 6, background: '#6366f1', borderRadius: '50%' }} />
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, fontWeight: 500 }}>Next-Generation Financial Infrastructure</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, color: 'white', lineHeight: 1.05, letterSpacing: '-3px', marginBottom: 24 }}>
            The Future of<br />
            <span style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Digital Finance</span>
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: 600, margin: '0 auto 40px' }}>
            FT Fintech empowers businesses with cutting-edge payment infrastructure, real-time analytics, and enterprise-grade security.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" style={{ fontSize: 16, padding: '14px 32px' }}>Get Started Free &rarr;</button>
            <button className="btn-ghost" style={{ fontSize: 16, padding: '14px 32px' }}>Watch Demo</button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} style={{ marginTop: 80, display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
          {[['$2.4T', 'Processed Annually'], ['150+', 'Countries Served'], ['99.99%', 'Uptime SLA'], ['50ms', 'Avg. Response Time']].map(([v, l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'white', letterSpacing: '-1px' }}>{v}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 4, letterSpacing: 1, textTransform: 'uppercase' }}>{l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}