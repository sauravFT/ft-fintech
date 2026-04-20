'use client';
import { motion } from 'framer-motion';

const DETAILS = [
  { title: 'Instant Settlement', desc: 'Move money in real time, 24/7/365. No more waiting days for transactions to clear.', stats: '< 2s' },
  { title: 'Compliance Built-In', desc: 'Automated AML, KYC, and regulatory reporting across 50+ jurisdictions.', stats: '50+' },
  { title: 'API-First', desc: 'RESTful APIs with 99.99% uptime SLA and comprehensive documentation.', stats: '99.99%' },
];

export default function FeatureDetail() {
  return (
    <section style={{ padding: '60px 40px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
        {DETAILS.map((d, i) => (
          <motion.div key={i} className="glass-card" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} style={{ padding: 36, textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', fontWeight: 800, background: 'linear-gradient(135deg, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 8 }}>{d.stats}</div>
            <h3 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 600, marginBottom: 8 }}>{d.title}</h3>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.6 }}>{d.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}