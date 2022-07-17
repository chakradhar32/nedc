/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui';

const About = () => {
    return (
        <>
            <div
                sx={{
                    maxWidth: '1400px',
                    mx: 'auto'
                }}
            >
                <div>
                    <h1 sx={{
                        fontFamily: 'Adobe Devanagari',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '50px',
                        lineHeight: '80px',
                        color: '#666666',
                        mx: 'auto',
                        textAlign: 'center'
                    }}>
                        What We Do
                    </h1>
                    <p> Thanks for checking out the National Embryo Donation Center (NEDC)! Feel free to click around our website to see if embryo donation/embryo adoption is right for you. First, though, here’s a quick look at what we do.</p>
                    <h4>Giving Life. Giving Hope.</h4>
                    <p>Now in its fifth decade, in vitro fertilization (IVF) and other assisted reproduction technologies (ART) have been the answer to many families’ baby prayers. However, this success has created a surplus of frozen human embryos. That surplus is estimated at roughly 1,000,000 in the United States. Many biological parents store their frozen embryos for future use. But when those parents have completed their families, they must decide what to do with their remaining embryos. Donating them to another infertile couple is an increasingly popular option. It benefits both the genetic family and the recipient family.</p>
                    <p>Embryo donation, sometimes called embryo adoption, offers embryos the potential of life. It also allows the recipient mother the chance to carry her adopted child and control the prenatal environment.</p>
                    <p>While embryo donation is not for everyone, it can be an opportunity for many who have given up hope of ever raising a child. Located in Knoxville, TN, the NEDC is the only non-profit, medically-directed organization helping both embryo donors and recipients.</p>
                    <h4>Why Choose the NEDC?</h4>
                    <p>Many choose to adopt through the NEDC because of our superior pregnancy rates (54% in the most recent reporting year). Many donate embryos through the NEDC because of the peace of mind provided by our home study requirement, which means your embryos will go to a stable, healthy family. And all are reassured by our nearly two-decade-long track record and commitment to keep strengthening the NEDC long-term, ensuring the ability of embryo donors and recipients to receive and share information in the future.</p>

                    <p>Our cutting-edge work has garnered news coverage from national and international media outlets such as The Today Show on NBC, ABC’s Good Morning America, The Washington Post, The New York Times, Fox News, NBC Nightly News, BBC, CNN, The Gospel Coalition, People Magazine and The New York Post.</p>
                    <p>Considering embryo donation or adoption is a big decision that has both emotional and financial concerns. We invite you to browse our website, check out videos like the one below, and find answers to many of the questions you may have.</p>
                    <p>The Evangelical Council for Financial Accountability (ECFA) has accredited the NEDC. That means we hold to established standards for financial accountability and transparency. When you give to the NEDC, you can be confident your money is going directly to our mission of helping children and families through embryo donation and adoption!</p>
                    <div sx={{
                        display: 'flex',
                        //alignItems: 'center',
                        justifyContent: 'center',
                        gap: '24px'
                    }}>
                        <p sx={{
                            color: '#FFFFFF',
                            width: '220px',
                            background: '#8BBFBD',
                            border: '1px solid #8BBFBD',
                            borderRadius: '5px',
                            textAlign: 'center'
                        }}>Give Now</p>
                        <p sx={{
                            width: '156px',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '16px',
                            color: ' #666666',
                            background: '#E5E5E5',
                            border: '1px solid #8BBFBD',
                            borderRadius: '5px',
                            textAlign: 'center'
                        }}>Learn more about us</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About