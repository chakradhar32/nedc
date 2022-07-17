/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react'

const Navbar = () => {
    return (
        <nav sx={{
            maxWidth: '1400px',
            mx: 'auto'
        }}>
            <div sx={{
                display: 'flex',
                justifyContent: 'space-around'
            }}>
                <div><h3>nedc</h3></div>
                <div sx={{
                    display: 'flex', gap: '36px'
                }}>
                    <h5>ABOUT US</h5>
                    <h5>FAQS</h5>
                    <h5>PROFESSIONALS</h5>
                    <h5>DONATE CRYPTO</h5>
                    <h5>PERSONAL STORIES</h5>
                    <h5>RESOURCES</h5>
                    <h5>CONTACT</h5>
                </div>
            </div>
        </nav>
    )
}

export default Navbar