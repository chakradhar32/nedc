/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react'

const Author = () => {
    const data = [{
        name: 'Jeffrey Keenan, M.D., HCLD',
        position: 'President/Medical Director'
    },
    {
        name: 'John Gordon, M.D.',
        position: 'Physician'
    },
    {
        name: 'L.J. Robinson, BSN, RN, MBA',
        position: 'General Manager'
    },
    {
        name: 'Carol Sommerfelt, M.SC. ELD (ABB)',
        position: 'Lab Director Emeritus/ Senior Embryologist'
    },
    {
        name: 'Sarah Coe Atkinson, M.SC',
        position: ' Lab Supervisor/ Embryologist'
    },
    {
        name: 'Mark Mellinger',
        position: ' Marketing and Development Director'
    },
    {
        name: 'Christa Carter, RN',
        position: 'Patient Coordinator'
    },
    {
        name: 'Lisa Kozsan, RN',
        position: 'Patient Coordinator',
    },
    {
        name: 'Lisa Kozsan, RN',
        position: 'Patient Coordinator',
    }
    ]
    return (
        <section sx={{
            background: ' rgba(75, 147, 142, 0.9)',
        }}>
            <div sx={{
                maxWidth: '1400px',
                mx: 'auto',
            }}>
                <div>
                    <h1
                        sx={{
                            fontFamily: 'Adobe Devanagari',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontWize: '50px',
                            lineHeight: '80px',
                            color: '#FFFFFF',
                            textAlign: 'center'
                        }}>Our Staff</h1>
                </div>
                {data.map(item => (<div sx={{
                    display: 'flex',
                    gap: '16px',
                    bg: '#FFFFFF'
                }}>
                    <div sx={{
                        width: '85px',
                        height: '85px',
                        background: ' rgba(75, 147, 142, 0.9)',
                        border: '1px solid #F4FDFC',
                        borderRadius: '50px',

                    }}>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <p>{item.name}</p>
                        <p>{item.position}</p>
                    </div>
                </div>))}
            </div>
            <hr sx={{
                mt: '3rem'
            }} />
        </section>
    )
}

export default Author