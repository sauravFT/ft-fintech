'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section style={{ width: '100%', minHeight: '100vh', display: 'flex', alignItems: 'flex-end',
      padding: '40px', paddingBottom: '80px', position: 'relative' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', width: '100%', display: 'flex',
        justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 600 }}>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16,1,0.3,1] }}
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', fontWeight: 700, lineHeight: 1.05,
              color: 'white', letterSpacing: '-2px' }}>
            Innovate your<br />finance with<br />
            <span style={{ background: 'linear-gradient(135deg, #d3a5ff, #7974ff)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>FT Fintech.</span>
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14 }}>Trusted by 10k+ financial institutions</p>
            <div style={{ display: 'flex', gap: 0 }}>
              {[1,2,3,4].map(i => (
                <div key={i} style={{ width: 32, height: 32, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.3)',
                  marginLeft: i > 1 ? -8 : 0 }} />
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.16,1,0.3,1] }}
          style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 420 }}>
          <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, fontSize: 15 }}>
            We offer a suite of cutting-edge fintech tools designed to streamline operations and drive growth.
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button className="btn-primary">Sign Up <span>&rarr;</span></button>
            <button className="btn-ghost">Learn More</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}