export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ padding: '40px', borderTop: '1px solid rgba(255,255,255,0.06)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 28, height: 28, background: 'linear-gradient(135deg, #2563eb, #7c3aed)', borderRadius: 6 }} />
          <span style={{ color: 'white', fontWeight: 700, fontSize: 16, letterSpacing: '-0.5px' }}>FT Fintech</span>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13 }}>&copy; {year} FyscalTech. All rights reserved.</p>
        <div style={{ display: 'flex', gap: 24 }}>
          {['Privacy', 'Terms', 'Security', 'Contact'].map(l => (
            <a key={l} href="#" style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, textDecoration: 'none' }}>{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}