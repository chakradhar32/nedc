/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react'

const Pie = () => {
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
                <div>
                    <img src="https://source.unsplash.com/random/800x450" alt="" />
                </div>
                <div sx={{
                    background: '#F5F5F5',
                    borderRadius: '10px',
                    width: '320px'
                }}>
                    <h1 sx={{
                        fontFamily: 'Adobe Devanagari',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '50px',
                        lineHeight: '50px',
                        color: '#666666',
                        textAlign: 'center'
                    }}>Multiracial Embroys</h1>
                    <p sx={{
                        ontFamily: 'Adobe Devanagari',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '20px',
                        lineHeight: '25px',
                        textAlign: 'center'
                    }}>The NEDC has a significant number of multi-racial embryos available. No matter your background, the NEDC can help you complete your family..</p>
                </div>
            </div>
            <hr sx={{
                mt: '2rem'
            }} />
        </section>
    )
}

export default Pie