/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react'

const Data = () => {
    return (
        <section>
            <div sx={{
                maxWidth: '1400px',
                mx: 'auto',
                mt: '3rem'
            }}>
                <div sx={{
                    width: '125px',
                    height: '125px',
                    background: '#8BBFBD',
                    border: '10px solid #D7EFED',
                    borderRadius: '80px',

                }}>
                    <img src="" alt="" />
                </div>
                <h4 sx={{

                    fontFamily: 'Adobe Devanagari',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '50px',
                    lineHeight: '50px',
                    color: '#666666',
                    textAlign: 'center',
                    mb: '32px'
                }}>Board Of Directors</h4>
                <p sx={{

                }}>The National Embryo Donation Center Board of Directors oversees the NEDC. Our board members come from a lot of different backgrounds. They also have different interests. But what unites them is the desire to help couples complete their families through embryo adoption. To learn more about our board members, read their bios below.</p>
            </div>

        </section >
    )
}

export default Data