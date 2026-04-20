'use client';
import { motion } from 'framer-motion';

const LOGOS = [
  { src: 'https://files.peachworlds.com/website/769f10bd-d259-44de-976e-af0778dd3820/div-framer-1lv732o-4.svg', alt: 'Client 1' },
  { src: 'https://files.peachworlds.com/website/83ec6338-4b24-4018-8618-fe9fdf32b93b/div-framer-1lv732o-.svg', alt: 'Client 2' },
  { src: 'https://files.peachworlds.com/website/df5b18e4-1ed1-4575-82e5-cf7c45cc9ada/prada-logo-1.svg', alt: 'Prada' },
  { src: 'https://files.peachworlds.com/website/1da3b838-c5fa-440a-9939-943b0d5317ba/div-framer-1lv732o-2.svg', alt: 'Client 4' },
  { src: 'https://files.peachworlds.com/website/405571e9-c49d-4f41-b589-af489818e12e/disney-wordmark-1.svg', alt: 'Disney' },
  { src: 'https://files.peachworlds.com/website/10724f21-080d-47b4-b421-6678bb399e78/div-framer-1lv732o-3.svg', alt: 'Client 6' },
  { src: 'https://files.peachworlds.com/website/105e3314-209f-4797-81b6-ed9e043ce525/div-framer-1lv732o-5.svg', alt: 'Client 7' },
  { src: 'https://files.peachworlds.com/website/105e3314-209f-4797-81b6-ed9e043ce525/div-framer-1lv732o-5.svg', alt: 'Client 8' },
];

export default function ClientsSection() {
  return (
    <section style={{ padding: '80px 40px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ marginBottom: 48, textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, fontWeight: 700,
            letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>OUR CLIENTS</p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 700, color: 'white', letterSpacing: '-0.5px' }}>
            Trusted by leading financial organizations.
          </h2>
        </motion.div>
        <div className="logo-grid">
          {LOGOS.map((logo, i) => (
            <motion.div key={i} className="logo-cell" initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
              <img src={logo.src} alt={logo.alt}
                style={{ height: 32, filter: 'brightness(0) invert(1)', opacity: 0.6 }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}