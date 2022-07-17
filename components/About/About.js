/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react'

const About = () => {
    return (
        <header sx={{
            background: ' rgba(75, 147, 142, 0.9)',
        }}>
            <div sx={{
                maxWidth: '1400px',
                mx: 'auto',
                height: '550px',

            }}>
                <div sx={{
                    display: 'flex',
                }}>
                    <div sx={{
                        width: '600px'
                    }}>
                        <p sx={{
                            fontFamily: 'Adobe Devanagari',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '60px',
                            lineHeight: '80px',
                            color: '#FFFFFF',
                            //width: '416px',
                            mb: '24px',
                        }}>About NEDC</p>
                        <p sx={{
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '30px',
                            lineHeight: '40px',
                            letterSpacing: '0.09em',
                            color: '#FFFFFF',
                            //width: '500px',
                        }}>The Leading Comprehensive Non-Profit Embryo Donation Program</p>
                        <p sx={{
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '80px',
                            color: ' #FFFFFF',
                            background: ' #F7A496',
                            bordeRadius: '5px',
                            width: '200px',
                            //boxSizing: 'borderBox'
                        }}>Donate an Embryo</p>
                    </div>
                    <div sx={{
                        width: '700px',
                        height: '400px',
                    }}><img sx={{ maxWidth: '100%' }}
                        src="https://source.unsplash.com/random/700x400" alt="" /></div>
                </div>
            </div>
        </header>
    )
}

export default About