/** @jsx jsx */
import { jsx } from 'theme-ui';

const History = () => {
  return (
    <section id="history">
      <div className="text-content">
        <h3
          sx={{
            fontWeight: 400,
            fontSize: ['1.5rem', null, '2.5rem'],
            lineHeight: 1.15,
            color: ' #666666',
            textAlign: 'center',
            mb: '1.5rem',
          }}
        >
          History of the NEDC
        </h3>
        <div
          sx={{
            '& p': {
              mb: '2rem',
            },
          }}
        >
          <p>
            The first in vitro fertilization (IVF) or “test tube” baby, Louise Brown, was born in
            England in 1978 and the first IVF baby in the United States, Elizabeth Carr, was born in
            1981. Since that time, the fertility industry has grown enormously and because of that,
            the number of remaining frozen embryos has significantly increased.
          </p>
          <p>
            As laboratory technology and techniques improved, the ability to safely freeze and thaw
            embryos opened the possibilities for families to make additional attempts at becoming
            pregnant without having to repeat the egg retrieval process. It also allowed them to
            return for a sibling when they were ready to try again.
          </p>
          <p>
            While no one truly knows when the first embryo donation occurred, they were usually
            performed in fertility clinics where the physician facilitated anonymous transfers
            between patients. In 1997, Nightlight Christian Adoptions expanded its services to
            include embryo adoption and began to educate the public regarding this option for
            infertile couples.
          </p>
          <p>
            In the late 1990’s, the Christian Medical and Dental Association (CMDA) approached{' '}
            <a href="https://www.youtube.com/watch?v=qjDm1-hwdkE">Dr. Jeffrey Keenan</a>, a
            Knoxville, Tennessee, Reproductive Endocrinologist, with the idea of creating a
            medically-based non-profit embryo donation center. The center would accept all embryos
            regardless of number or grade and have its partner medical clinic store them on-site.
            The center would also actively match willing recipients with donors and then facilitate
            the clinic’s performance of the actual transfers.
          </p>
          <p>
            Originally part of the Baptist Health System in Knoxville, the new organization began
            assembling its grassroots staff and formulating the processes, parameters, and protocols
            needed to create the most beneficial program for both donors and recipients.
          </p>
          <p>
            By 2003, the NEDC had received several sets of donated embryos from fertility clinics
            around the country and began to match them with hopeful families. In addition, the NEDC
            pursued and received federal grant funding to educate the public and create awareness of
            the embryo donation and adoption process.
          </p>
          <p>
            By 2010, the NEDC had significantly increased its transfer/success rate, continued to
            receive grant funding, and moved to a permanent, independent location.
          </p>
          <p>
            Since its inception, the NEDC has assisted in over 1,100 births. It has become the
            premier center for ED/EA services and has been featured in multiple national media
            stories. The most important story, though, is the one that we can help write for you. We
            look forward to helping you complete your fertility journey.
          </p>
          <p>
            While the NEDC is open to couples of all races, religions, creeds, and backgrounds, our
            own Christian faith is the overriding principle upon which we operate. As an
            organization guided by our religious faith and protected by the Constitution of the
            United States, the NEDC firmly believes in the sanctity of life beginning at conception
            and recognizes marriage as a sacred union between man and woman as defined by the
            Scriptures of the Holy Bible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default History;
