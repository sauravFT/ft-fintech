'use client';
import { motion } from 'framer-motion';

const FEATURES = [
  { icon: '⚡', title: 'Real-Time Processing', desc: 'Execute transactions in milliseconds with our high-performance infrastructure.' },
  { icon: '🔒', title: 'Bank-Grade Security', desc: 'End-to-end encryption and multi-factor authentication protect every transaction.' },
  { icon: '📊', title: 'Advanced Analytics', desc: 'Get deep insights into spending patterns and financial trends with AI.' },
  { icon: '🌐', title: 'Global Payments', desc: 'Send and receive money across 150+ countries with competitive exchange rates.' },
  { icon: '🤖', title: 'AI-Powered Insights', desc: 'Machine learning algorithms detect anomalies and optimize your cash flow.' },
  { icon: '📱', title: 'Mobile First', desc: 'Full-featured mobile experience with biometric authentication support.' },
];

export default function FeaturesSection() {
  return (
    <section style={{ padding: '80px 40px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: 48, textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>CAPABILITIES</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, color: 'white', letterSpacing: '-1px' }}>Everything you need to scale.</h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {FEATURES.map((f, i) => (
            <motion.div key={i} className="glass-card" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} style={{ padding: 28 }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>{f.icon}</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'white', marginBottom: 8 }}>{f.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.6 }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}