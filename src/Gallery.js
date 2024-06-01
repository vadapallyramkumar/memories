import React, { useState } from "react";
import './gallery.css';

const Gallery = ({data}) => {
    const [modal, setModel] = useState(false);
    const [tempimgSrc, setTempimgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempimgSrc(imgSrc);
        setModel(true);
    }

    return(
        <>
            <div className={modal ? "modal open" : "modal"}>
                <img src={tempimgSrc} alt="selectedImage" />
                <span className="material-symbols-outlined close" onClick={() => setModel(false)}>
                 close
                </span>
            </div>
            <div className="gallery">
                {
                    data.map((item, index) => {
                        return(
                            <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                                <img src={item.imgSrc} alt={index} style={{ width: '100%' }} />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
};

export default Gallery;