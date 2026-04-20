'use client';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
  { name: 'Sarah Chen', role: 'CFO, TechScale Inc', text: 'FT Fintech transformed our payment processing. Settlement times dropped from days to seconds.' },
  { name: 'Marcus Johnson', role: 'Head of Finance, NeoBank', text: 'The analytics dashboard gives us insights we never had before. Our fraud detection improved by 94%.' },
  { name: 'Priya Sharma', role: 'CEO, PayFlow', text: 'Onboarding 50,000 customers in one month was seamless. The API integration was effortless.' },
];

export default function TestimonialsSection() {
  return (
    <section style={{ padding: '80px 40px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ marginBottom: 48, textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>TESTIMONIALS</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, color: 'white', letterSpacing: '-1px' }}>Trusted by industry leaders.</h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={i} className="glass-card" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} style={{ padding: 32 }}>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 15, lineHeight: 1.7, marginBottom: 24, fontStyle: 'italic' }}>"{t.text}"</p>
              <div>
                <p style={{ color: 'white', fontWeight: 600, fontSize: 14 }}>{t.name}</p>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12, marginTop: 2 }}>{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}