'use client';
import { motion } from 'framer-motion';

const CLIENTS = ['JPMorgan Chase', 'Goldman Sachs', 'Stripe', 'Revolut', 'N26', 'Monzo', 'PayPal', 'Wise'];

export default function ClientsSection() {
  return (
    <section style={{ padding: '60px 40px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 32 }}>TRUSTED BY INDUSTRY LEADERS</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
          {CLIENTS.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="glass-card" style={{ padding: '12px 28px' }}>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, fontWeight: 500, letterSpacing: 0.5 }}>{c}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}