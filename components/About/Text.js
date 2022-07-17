/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react'

const Text = () => {
    return (
        <section>
            <div sx={{
                maxWidth: '1400px',
                mx: 'auto'
            }}>
                <div sx={{
                    textAlign: 'center',
                    mt: '32px'
                }}>
                    <img sx={{
                        width: '62px',
                        height: '62px',
                        background: '#DDEFED',
                        border: '8px solid #F4FDFC',
                        borderRadius: '50px',

                    }} src="" alt="" />
                </div>
                <h2 sx={{
                    fontFamily: 'Adobe Devanagari',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '50px',
                    lineHeight: '80px',
                    color: '#666666',
                    mx: 'auto',
                    textAlign: 'center',
                    mt: '8px'
                }}>
                    About Us</h2>
                <p>Since 2003, the National Embryo Donation Center (NEDC) has been the country’s leading comprehensive non-profit embryo donation program.</p>
                <h4>Our Mission</h4>
                <p>Our mission is to protect the lives and dignity of human embryos. We do that by promoting, facilitating and educating about embryo donation and adoption (ED/EA). We’re also the only clinic-based organization that works with families of all races, faiths and ethnic backgrounds. Our office is in Knoxville, TN.</p>
                <h4>Our Vision</h4>
                <p>To share the love of Christ through the life-affirming process of embryo adoption while striving to place every donated embryo into a loving home. We will be a beacon in the darkness showing the love and respect due to these cryopreserved human embryos since they represent the very least of us. We look forward to the day when the responsible practice of reproductive medicine will render our services unnecessary.</p>
                <h4>What Led to the NEDC's Formation</h4>
                <p>So why are we here? When couples go through in vitro fertilization (IVF), there are often remaining embryos.  Those are frozen and stored for later use. An estimated 1,000,000 human embryos are stored in the U.S. right now.</p>
                <p>When couples decide that their family is complete but still have embryos remaining, there are a few options. They can donate the embryos to research or let them thaw, losing any potential for them to develop into children. Couples can keep them frozen. Or they can donate them to a couple who is unable to conceive. A lot of people share our belief that embryo donation is the life-honoring solution.</p>
                <h4>How We Live Out the Mission & Vision</h4>
                <p>The NEDC provides for all the medical, legal and social aspects of ED/EA. When someone donates embryos to us, we become the interim caregiver and our medical partners at Southeastern Fertility store them at no charge to donors.</p>
                <p>From there, our team works hard to match the right embryos with the perfect family. You can choose from a huge number of available embryos with no waiting list! We also offer varying communication options between donating and receiving families. Those range from closed to a fully open relationship. Mediation is available for open relationships.
                </p>
                <p>Thanks for visiting. We invite you to explore the website. Maybe the NEDC is the right choice for you!</p>
            </div>
            <div sx={{
                textAlign: 'center'
            }}>
                <button sx={{
                    color: '#FFFFFF',
                    //width: '220px',
                    background: '#8BBFBD',
                    border: '1px solid #8BBFBD',
                    borderRadius: '5px',
                    px: '24px',
                    py: '8px',

                }}>
                    Our History
                </button>
            </div>
        </section>
    )
}

export default Text