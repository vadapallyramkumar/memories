import React, { useState } from 'react';
import './App.css';
import Gallery from './Gallery';
import EventDetails from './event';

function App() {

  const [showGallery, setShowGallery] = useState(false);

  return (
    <>
      {
        !showGallery && (
          <div className="home">
            <h1 className='title'>Our Memories</h1>
            <div className='babyshower' onClick={() => setShowGallery(!showGallery)}>
              BABY SHOWER
            </div>
            <div className='marriage'></div>
            <div className='reception'></div>
            <div className='manali'></div>
          </div>
        )
      }
      {
          showGallery && (
            <div>
              <span title='Back to home' className="material-symbols-outlined close" onClick={() => setShowGallery(false)}>
                 close
              </span>
              <EventDetails />
              <Gallery />
            </div>
          )
        }
    </>
    
  );
}

export default App;
