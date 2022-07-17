/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react'

const Header = () => {
    return (
        <header sx={{
            background: 'rgba(75, 147, 142, 0.9)',
            height: '500px'
        }}>
            <div sx={{
                maxWidth: '1400px',
                mx: 'auto'
            }}>
                <p sx={{
                    fontFamily: 'Adobe Devanagari',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '60px',
                    lineHeight: '60px',
                    color: '#FFFFFF',
                    width: '416px',
                    mb: '24px',
                }}> Support</p>
                <p sx={{
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '30px',
                    lineHeight: '36px',
                    letterSpacing: '0.09em',
                    color: '#FFFFFF',
                    width: '415px',
                }}>Giving Life. Giving Hope. Building Families</p>
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
                }}>Learn More About NDEC</p>
            </div>
        </header>
    )
}

export default Header