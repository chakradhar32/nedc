/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react'

const About = () => {
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
                }}>Children's Books</h4>
                <p>As awareness and interest in donating and adopting frozen embryos increases, the question of “how do we or should we tell the children?” begins to arise. This page features children’s books that can help answer that question. While many of the circumstances surrounding traditional adoption and embryo adoption are similar, embryo adoption is still very distinct because it is so much more personal and unique.</p>
                <p>Children’s books on traditional adoption are plentiful and help to reinforce to the child why they are special and loved. Some of these could have crossover value to the parents of embryo adopted children, but they don’t tell the whole story. That’s why we are happy to make you aware of resources geared specifically toward embryo adopted children.</p>
                <p>Chosen & Loved, written by NEDC embryo adoption mom Shari Kazmierczak, tells the delightful story of a bear and bunny who present the concept of embryo adoption to young readers. In this keepsake book, there are several pages you can personalize with your own pictures. That way, this becomes your child’s story about how he/she became a part of their forever family. Instructions and photo tabs are included with each book. It is available on Amazon.</p>
                <p>Treasure Babies invites you to join Strive, Ora, and their fishy friends as they struggle against the tide through the pain of infertility and discover the hope that doctors and embryo adoption can bring, the miracle of new life, and the beauty of shared treasure. Written and illustrated by two moms who’ve been there, this book, which includes a dedication page, family discussion questions, and a designated area to share your own child’s story, is sure to be a helpful tool for years to come. It is available on Amazon.</p>
                <p>Another offering we recommend is Made With Love. Explaining embryo donation and adoption to young children can be hard. But Made With Love endeavors to make it easy by using an allegory virtually every child can understand: baking cookies! A visual feast with a rhyming storyline, donating and adopting families alike can eat up this heartwarming tale. It is available on Amazon.</p>
            </div>

        </section >
    )
}

export default About