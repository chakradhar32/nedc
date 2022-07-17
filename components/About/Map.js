/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react'

const Map = () => {
    return (
        <section>
            <div sx={{
                maxWidth: '1400px',
                mx: 'auto',
                display: 'flex',
                justifyContent: 'center',
                mt: '4rem',
                gap: '42px'
            }}>
                <div sx={{
                    background: '#F5F5F5',
                    borderRadius: '10px',
                    width: '300px'
                }}>
                    <h1 sx={{
                        fontFamily: 'Adobe Devanagari',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '50px',
                        lineHeight: '50px',
                        color: '#666666'

                    }}>Our Families</h1>
                    <p sx={{
                        fontFamily: 'Adobe Devanagari',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '20px',
                        lineHeight: '25px',
                        textAlign: 'center'
                    }}>Though the vast majority of our families have historically lived in North America, the NEDC serves and is open to families from all over the world.</p>
                </div>
                <div>
                    <img src="https://source.unsplash.com/random/700x400" alt="" />
                </div>
            </div>
            <hr sx={{
                mt: '3rem'
            }} />
        </section>
    )
}

export default Map