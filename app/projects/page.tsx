import React from 'react';

const SeanTRGPage: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', color: '#000000', fontFamily: 'Satoshi, sans-serif' }}>

      <div className="gradient-background" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />

      <style jsx global>{`
        .gradient-background {
          background: linear-gradient(306deg, #d5ad27, #2b85cf);
          background-size: 120% 120%;
          animation: gradient-animation 2s ease infinite;
        }
        @keyframes gradient-animation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>


      {/* Main Card */}
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontWeight: 600, fontSize: '39.5px', margin: '1rem 0 0.5rem' }}>Projects</h1>

        {/* Social Links */}
        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="/">Back</a>
          <a href="https://acrevival.seantrg.xyz" target="_blank" rel="noopener noreferrer">AC Revival</a>
        </div>
      </div>

      {/* NOTE: External script effects like cursor-effects.js, Cloudflare turnstile, and Web Workers should be implemented via useEffect or useScript hook if needed. */}
    </div>
  );
};

export default SeanTRGPage;
