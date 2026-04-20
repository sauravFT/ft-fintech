'use client';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section style={{ padding: '100px 40px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>GET STARTED TODAY</p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-2px', marginBottom: 20, lineHeight: 1.1 }}>Ready to transform your financial operations?</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 18, lineHeight: 1.7, marginBottom: 40 }}>Join thousands of businesses that trust FT Fintech to power their financial infrastructure.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" style={{ fontSize: 16, padding: '14px 36px' }}>Start Free Trial &rarr;</button>
            <button className="btn-ghost" style={{ fontSize: 16, padding: '14px 36px' }}>Talk to Sales</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}