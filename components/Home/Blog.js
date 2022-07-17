/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui';

const Blog = () => {
    const data = [{
        title: 'Embryo Adoption Stories',
        description: 'Do you want more personal information about embryo donation and adoption? Read stories from NEDC families who have walked through this journey.',
        buttonText: 'Check Our Embryo Adoption Stories'
    }, {
        title: 'Childrens Books for Your Family',
        description: 'How do you tell your children about their unique adoption, or should you? Check out several books that will help satisfy your child’s curiosity about where they came from and reinforce your love for them.',
        buttonText: 'Find Out More'
    }, {
        title: 'Questions and Answers',
        description: 'Have questions about embryo adoption? You are not alone. We can answer some of those most frequently asked by those curious about this life-affirming family-building option.',
        buttonText: 'Get Your Questions Answered'
    }]

    return (
        <section sx={{
            background: ' rgba(75, 147, 142, 0.9)',
        }}>
            <div sx={{
                display: 'flex', justifyContent: 'space-around'
            }}>
                {data.map(item => (<div sx={{
                    //ml: '2.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '250px',
                    alignItems: 'center',
                    mt: '24px'
                    //maxWidth: '1400px',
                }}>
                    <img sx={{
                        width: '62px',
                        height: '62px',
                        background: '#DDEFED',
                        border: '8px solid #F4FDFC',
                        borderRadius: '50px',
                        textAlign: 'center'
                    }} src="" alt="" />

                    <div sx={{
                        color: '#FFFFFF',
                    }}>
                        <h3 sx={{
                            // fontFamily: 'Adobe Devanagari',
                            // fontStyle: 'normal',
                            // fontWeight: 400,
                            fontSize: '26px',
                            // lineHeight: '50px',
                            px: '24px',
                            textAlign: 'center'
                        }}>{item.title}</h3>
                        <p sx={{
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '30px',
                            textAlign: 'center'
                        }}>{item.description}</p>
                        <p sx={{
                            fontFamily: 'Gotham',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '20px',
                            border: '1px solid #FFFFFF',
                            borderRadius: '5px',
                            padding: '12px 32px',
                            textAlign: 'center'
                        }}>{item.buttonText}</p>
                    </div>
                </div>))}
            </div>
        </section>
    )
}

export default Blog