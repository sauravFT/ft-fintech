'use client';
import { motion } from 'framer-motion';

export default function ProductSection() {
  return (
    <section style={{ padding: '0 40px 120px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }} viewport={{ once: true }}
          className="glass-card" style={{ padding: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 480 }}>
              <div>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 600, letterSpacing: 2,
                  textTransform: 'uppercase', marginBottom: 16 }}>PRODUCT</p>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1,
                  color: 'white', letterSpacing: '-1px' }}>Simplify complex financial workflows.</h2>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="btn-primary">Sign Up &rarr;</button>
                <button className="btn-ghost">Watch Demo</button>
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, fontSize: 14, maxWidth: '40%' }}>
              Automate financial tasks across departments, reducing manual effort and increasing productivity.
            </p>
          </div>
          <div style={{ marginTop: 32, borderRadius: 8, overflow: 'hidden', background: 'rgba(0,0,0,0.3)' }}>
            <img src="https://files.peachworlds.com/website/4fcd6612-066d-45e3-8e94-87cacc157ba0/dash.png"
              alt="FT Fintech Dashboard" style={{ width: '100%', display: 'block', borderRadius: 8 }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}