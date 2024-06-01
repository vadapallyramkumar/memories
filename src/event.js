import React from 'react';

const EventDetails = ({ selectedType }) => {
    console.log(selectedType)
    return(
        <>
            {
                selectedType && selectedType === 'babyshower' && (
                    <>
                        <h1 style={{ textAlign: 'center', marginBottom: 0 }}>Seemantham</h1>
                        <p style={{ fontFamily: "Josefin Sans", textAlign: 'center', marginTop: 0 }}>14/05/2024</p>
                    </>
                )
            }
            {
                selectedType && selectedType === 'manali' && (
                    <>
                        <h1 style={{ textAlign: 'center', marginBottom: 0 }}>Manali</h1>
                        <p style={{ fontFamily: "Josefin Sans", textAlign: 'center', marginTop: 0 }}>12/02/2023</p>
                    </>
                )
            }
        </>
    )
};

export default EventDetails;