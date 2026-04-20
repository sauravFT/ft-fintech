'use client';
import { motion } from 'framer-motion';

const PRODUCTS = [
  { icon: '💳', name: 'FT Pay', desc: 'Instant payment processing with multi-currency support and smart routing.' },
  { icon: '🏦', name: 'FT Banking', desc: 'Full-stack digital banking infrastructure for modern financial institutions.' },
  { icon: '🔐', name: 'FT Compliance', desc: 'AI-powered AML, KYC, and regulatory compliance automation across jurisdictions.' },
  { icon: '📊', name: 'FT Analytics', desc: 'Real-time financial intelligence and predictive analytics for business growth.' },
];

export default function ProductSection() {
  return (
    <section style={{ padding: '80px 40px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: 48, textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>PRODUCTS</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, color: 'white', letterSpacing: '-1px' }}>One platform, endless possibilities.</h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          {PRODUCTS.map((p, i) => (
            <motion.div key={i} className="glass-card" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} style={{ padding: 32 }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>{p.icon}</div>
              <h3 style={{ color: 'white', fontSize: '1.15rem', fontWeight: 700, marginBottom: 8 }}>{p.name}</h3>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.6 }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}