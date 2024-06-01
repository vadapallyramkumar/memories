import React, { useState } from 'react';
import './App.css';
import Gallery from './Gallery';
import EventDetails from './event';
import babyShowerData from './images/babyShowrData.js';
import manaliData from './images/manaliData.js';

function App() {

  const [showGallery, setShowGallery] = useState(false);

  const [selectedTypeData, setSelectedTypeData] = useState();
  const [selectedType, setSelectedType] = useState();

  return (
    <>
      {
        !showGallery && (
          <div className="home">
            <h1 className='title'>Our Memories</h1>
            <div className='babyshower' onClick={() => {
              setSelectedTypeData(babyShowerData);
              setShowGallery(!showGallery);
              setSelectedType('babyshower');
            }}>
              BABY SHOWER
            </div>
            <div className='marriage'>
              MARRIAGE
            </div>
            <div className='reception'>
              RECEPTION
            </div>
            <div className='manali' onClick={() => {
              setSelectedTypeData(manaliData);
              setShowGallery(!showGallery);
              setSelectedType('manali');
            }}>
              MANALI
            </div>
          </div>
        )
      }
      {
          showGallery && (
            <div>
              <span title='Back to home' className="material-symbols-outlined close" onClick={() => setShowGallery(false)}>
                 close
              </span>
              <EventDetails selectedType={selectedType}  />
              <Gallery data={selectedTypeData} />
            </div>
          )
        }
    </>
    
  );
}

export default App;
