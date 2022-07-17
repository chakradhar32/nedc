/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react'

const Header = () => {
    return (
        <header sx={{
            background: ' rgba(75, 147, 142, 0.9)',
            height: '500px'
        }}>
            <div>
                <h2 sx={{
                    mt: '12px',
                    fontFamily: 'Adobe Devanagari',
                    fonStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '60px',
                    lineHeight: '80px',
                    color: ' #FFFFFF',
                }}>Personal Stories</h2>
            </div>
        </header>
    )
}

export default Header