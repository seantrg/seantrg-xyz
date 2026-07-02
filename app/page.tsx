'use client';
import React from 'react';
import NowPlaying from './components/NowPlaying';

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


      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <img
          src="https://r2.guns.lol/f5c5c139-4124-4e96-9116-834f274dda98.png"
          alt="Avatar"
          style={{ borderRadius: '50%', width: '120px', height: '120px' }}
        />
        <h1 style={{ fontWeight: 600, fontSize: '39.5px', margin: '1rem 0 0.5rem' }}>SeanTRG</h1>
        <h3 style={{ fontWeight: 570, fontSize: '19px' }}>
          Hi! My name is Sean and I do stupid tech things sometimes :)
        </h3>


        <div style={{
          marginTop: '2rem',
          marginBottom: '4rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
        }}>
          <a href="https://youtube.com/@seantrg" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://x.com/seantrg" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://twitch.tv/seantrglive" target="_blank" rel="noopener noreferrer">Twitch</a>
          <a href="https://steamcommunity.com/id/seantrg" target="_blank" rel="noopener noreferrer">Steam</a>
          <a href="/projects" target="_blank" rel="noopener noreferrer">Projects</a>
        </div>

  
        <div style={{ marginTop: '3rem' }}>
          <NowPlaying />
        </div>
      </div>
    </div>
  );
};

export default SeanTRGPage;
