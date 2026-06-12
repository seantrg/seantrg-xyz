'use client';
import React from 'react';
import NowPlaying from './components/NowPlaying';

const SeanTRGPage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#080808', color: '#FFFFFF', fontFamily: 'Satoshi, sans-serif' }}>

      <div style={{ position: 'fixed', width: '100%', height: '100%', zIndex: -1 }} />


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
          <a href="https://youtube.com/@seantrg" target="_blank" rel="noopener noreferrer" style={{ transition: 'transform 0.2s' }} </a>
          <a href="https://x.com/SeanTRG" target="_blank" rel="noopener noreferrer" style={{ transition: 'transform 0.2s' }} </a>
          <a href="https://twitch.tv/seantrglive" target="_blank" rel="noopener noreferrer" style={{ transition: 'transform 0.2s' }}
             onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.15)'}
             onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <img src="v2.seantrg.xyz/assets/tw.png" alt="Twitch" style={{ width: 48, height: 48 }} />
          </a>
          <a href="https://steamcommunity.com/id/seantrg" target="_blank" rel="noopener noreferrer" style={{ transition: 'transform 0.2s' }}
             onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.15)'}
             onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <img src="v2.seantrg.xyz/assets/ste.png" alt="Steam" style={{ width: 48, height: 48 }} />
          </a>
          <a href="/projects" style={{ transition: 'transform 0.2s' }}
             onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.15)'}
             onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <img src="v2.seantrg.xyz/assets/proj.png" alt="Projects" style={{ width: 48, height: 48, filter: 'hue-rotate(90deg) saturate(0.7)' }} />
          </a>
        </div>

  
        <div style={{ marginTop: '3rem' }}>
          <NowPlaying />
        </div>
      </div>
    </div>
  );
};

export default SeanTRGPage;
