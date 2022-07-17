/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react'

const sign = () => {
    return (
        <section>
            <div sx={{
                mt: '48px',
                maxWidth: '1400px',
                mx: 'auto'
            }}>
                <div sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '32px'
                }}>
                    <img sx={{

                    }} src="https://source.unsplash.com/random/700x400" alt="" />
                    <div sx={{
                        width: '424px'
                    }}>
                        <h3 sx={{
                            fontFamily: 'Adobe Devanagari',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '30px',

                        }}>Embryo Adaption</h3>
                        <p>Check out this quick video in which one couple explains why embryo adoption was the best choice for them. (And meet their adorable son.)
                        </p>
                        <a sx={{
                            fontFamily: 'Gotham',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '16px',
                            px: '16px',
                            py: '8px',
                            lineHeight: '50px',
                            border: '1px solid #7CBBB8',
                            borderRadius: '5px',
                            color: ' #666666',
                            textDecoration: 'none'
                        }} href="/">Watch Video</a>
                    </div>
                </div>
            </div>
            <hr sx={{
                mt: '2rem',
                mb: '2rem'
            }} />

            <div sx={{
                maxWidth: '1400px',
                mx: 'auto'
            }}>
                <div sx={{
                    display: 'flex',
                    gap: '32px'
                }}>
                    <div>
                        <h3 sx={{
                            fontFamily: 'Adobe Devanagari',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '50px',
                            lineHeight: '50px',
                            color: ' #666666',

                        }}>Sign Up for Our Newsletter</h3>
                        <p sx={{
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '20px',
                            lineHeight: '30px',
                            color: ' #666666',
                        }}>If you're interested in getting occasional email updates from NEDC, please provide us with your name and email address below. These updates are partially for marketing purposes and usually include pressure-free fundraising appeals. Signing up obligates you to nothing and you may unsubscribe at any time. Your information will not be shared and you will not be added to any direct mail lists.</p>
                        <div sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            padding: '12px',
                            borderRadius: '6px',
                        }}>
                            <input sx={{ padding: '12px' }} type="text" placeholder='Name*' />
                            <input sx={{ padding: '12px' }} type="text" placeholder='Email*' />
                            <input sx={{ padding: '12px' }} type="text" placeholder='Phone number*' />
                        </div>
                        <p sx={{
                            fontWeight: 400,
                            fontSize: '20px',
                            lineHeight: '30px',
                            color: ' #666666',
                        }}>This field is for validation purposes and should be left unchanged.</p>
                        <button sx={{
                            mb: '16px',
                            background: ' #8BBFBD',
                            borderRadius: '5px',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '40px',
                            color: ' #FFFFFF',
                            px: '42px'
                        }}>submit</button>
                    </div>
                    <img src="https://source.unsplash.com/random/700x400" alt="" />
                </div>
            </div>
        </section>
    )
}

export default sign