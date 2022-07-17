/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react'

const Author = () => {
    const data = [{
        name: 'Lauren Wilson, Board Chair',
        position: 'Owner & Consultant, Flourish Consulting Services LLC'
    },
    {
        name: 'Dr. Jeffrey Keenan, President',
        position: 'NEDC Medical Director, Southeastern Fertility Specialist'
    },
    {
        name: 'Amy Scott',
        position: 'Tennessee State Director, Bethany Christian Services'
    },
    {
        name: 'Marti Bailey',
        position: 'Retired Public Relations Professional'
    },
    {
        name: 'Andrew Brenneman',
        position: 'Owner, 721 Holding Company LLC'
    },
    {
        name: 'Dr. Bill Geiger',
        position: 'Retired Family Physician'
    },
    {
        name: 'Amber Lacey',
        position: 'Retired Juvenile Probation Officer'
    },
    {
        name: 'Andy Halbert',
        position: ' Missions Pastor and Administrator, Christ Covenant Presbyterian Church'
    },
    {
        name: 'Jamey Campbell',
        position: 'Chief Operating Officer, Christian Medical & Dental Associations'
    },
    {
        name: 'Roger Redding',
        position: 'Retired Executive Director, Holston Conference Foundation'
    },
    {
        name: 'Stephen Gillman, JD',
        position: 'Attorney, Partner, Pryor Priest & Harber'

    }
    ]
    return (
        <section sx={{
            background: ' #EFF9F8'
        }}>
            <div sx={{
                maxWidth: '1400px',
                mx: 'auto',
                mt: '3rem',
                px: '42px',
                py: '32px'
            }}>
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
        </section>
    )
}

export default Author