/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import Faq from '../Common/FAQ';

const Faqs = () => {
  const data = [
    {
      question: 'If I donate embryos, what is the likelihood they will be adopted?',
      answer:
        'Our goal and expectation is to have all embryos adopted, and we will care for all until they are adopted. We are in particular need of embryos from minority ethnic backgrounds as they are currently in low supply and are most likely to be adopted quickly. The overwhelming majority of our embryos are Caucasian, and all need good homes regardless of ethnicity. We gladly accept and care for embryos of all ethnic backgrounds. Ultimately, the recipients choose which donors they would like to consider,and that is out of the hands of the NEDC to control. Therefore, some embryos are kept a very short period of time while others may be held for a much longer time.',
    },
    {
      question: 'Is there a cost to donate embryos?',
      answer:
        'There are not any fees for the donating/genetic parents. The adopting families cover all costs.',
    },
    {
      question: 'If I change my mind, can I get my embryos back?',
      answer:
        'The answer is yes, IF your donated embryos have not been matched or thawed and transferred. Then you can send a written request for the return of your embryos and must provide reimbursement for all of the lab and shipping fees we or our medical partners have paid, as well as $500/year for storage.  You can then pay a shipper directly to have your embryos shipped to the fertility center of your choice.',
    },
    {
      question: 'Who can adopt?',
      answer:
        "We work hard to assure our donors that their embryos will be placed in healthy, stable homes with loving parents. <br> <ul> <li>Couples must be a genetic male and a genetic female married for a minimum of 3 years.</li> <li>Wife must be 45 years old or younger.</li> <li>Wife’s body mass index (BMI) must be below 38 at the time of the frozen embryo transfer.</li> <li>The combined age of applicant couple must not exceed 100 years.</li><li>The adopting mother must be healthy and able to carry a child to term. Surrogates are not an option for carrying the pregnancy.</li> <li>The wife must not smoke during the application process, embryo transfer preparation and procedure process, or during pregnancy.</li> <li>Both husband and wife must be free of alcohol dependence and other substance dependence for two years before adopting. A letter from an addiction specialist may be required.</li> <li>All couples must complete and pass a 10-panel urine drug screen as well as a blood test for sexually transmitted diseases.</li><li>Couples must complete and pass a comprehensive family assessment (home study) prepared by a licensed adoption agency in the couple’s state, territory or province of residency, or an embryo adoption-specific <a href='https://nightlight.org/snowflakes-embryo-adoption-donation/snowflakes-family-evaluations-sfe/' Snowflakes Family Evaluation</a> in lieu of a home study. Click <a href='/wp-content/uploads/2015/02/AA-link-list.xlsx' >here</a> for adoption agency information.</li> </ul> <b>We are not able to make any exceptions to these requirements.</b>",
    },
    {
      question:
        'Could the children from the embryo donation inadvertently meet their siblings and reproduce?',
      answer:
        'In our large society, the risk is negligible. Donating your embryos to someone in a different state will further minimize the risk.',
    },
    {
      question: 'What will happen to my embryos if I choose not to donate them?',
      answer:
        '<b>Not making a decision </b>is not a viable option! Even though embryos have an indefinite storage life, you do not have an indefinite life span, and by not making a decision, someone — very probably the living genetic siblings of those embryos — will eventually have to make it for you. Although you may be struggling with the idea of donating your embryos to another couple, your decision to help others have children is the most caring and compassionate option to choose.',
    },
    {
      question: 'Do you accept all embryos?',
      answer: 'Not necessarily. Although there has never been a case of infectious disease transmission after a frozen embryo transfer, the best practice recommendations call for storage of potentially infectious embryos in a specially designated tank. If you have an infectious disease such as Hepatitis or HIV, we require matching of your embryos with a specific recipient prior to shipping because we do not have a ‘biohazard’ embryo storage tank, and because your embryos may take many months or even years to match with a recipient. <br> Similarly, if you have embryos which have been genetically tested and found to be abnormal in any way, or if you have a known genetic condition, or your current child or children do, then we will in general need to identify a specific donor for your embryos prior to shipping, because it is likely that a longer than usual period of time will be required to find a recipient.',
    }
  ];
  return (
    <section
      sx={{
        background: 'rgba(75, 147, 142, 0.9)',
        mt: '3rem',
        py: '32px',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        gap: '1rem',
      }}
    >
      <section>
        <h2>ASKING QUESTIONS/CONNECTING</h2>
        <p>We’ve tried to include comprehensive information answering most of your questions
          about donating embryos in this section of our website. But we also realize you may have
          questions we haven’t answered. And sometimes it’s just helpful to reach out and connect
          with another voice to serve as a helpful guide. If you have further questions about
          donating your embryos, please reach out to us anytime! You may reach the NEDC’s
          donor coordinator at (865) 777-2013 x234 or <a>NEDC.DonorNurse@baby4me.net.</a></p>
        <p>You may also find our private Embryo Donors Group on Facebook to be a helpful source
          of information and support. You may find and request to join the group by going to -----
          -.</p>
      </section>
      <section>
        <h2>WHY DONATE YOUR EMBRYOS TO THE NEDC</h2>
        <p>Many donate embryos through the NEDC mainly because we are a well-established
          organization with long-term success in providing safe storage for all embryos. We also
          have many years of experience in facilitating successful embryo adoptions with recipient
          couples who have met all criteria to be eligible to adopt embryos that were donated both
          openly and anonymously.</p>
        <p>There are many other reasons to donate your embryos through the NEDC.</p>
        <ol>
          <li><b>Experience matters!</b> We are the largest embryo donation program in the country and
            have received and cared for over 2500 sets of frozen embryos. We have experienced
            embryologists who arrange for shipping and care after arrival. Our embryologists have
            over 45 years of combined experience in IVF. They can confidently handle the thawing
            of embryos frozen by a wide variety of protocols as we have received embryos from IVF
            centers all over the country.</li>
          <li><b>Values matter!</b> It’s all right there in our Mission and Value Statement:
            <a href='https://www.embryodonation.org/about/'>(https://www.embryodonation.org/about/)</a>. All of us here at the NEDC value the human
            lives which are your embryos. We treat them with the care and respect they deserve. We
            are dedicated to finding the best possible homes for the children through the donation of
            your embryos. Therefore, we have age, weight and health restrictions on our adopting
            couples, and we also require a home study of adopting couples so you can be certain
            your embryos are going to the best possible family.</li>
          <li><b>Screening matters!</b> We medically screen couples to ensure that your embryos will
            have a high likelihood of implanting and ultimately resulting in a live birth. This
            necessitates that we must exclude some couples who have social or medical conditions
            such as nicotine, drug, or alcohol addiction, a history of recurrent implantation failure
            with previous embryo transfers, or serious gynecologic conditions such as
            endometriosis, fibroids, or adenomyosis.</li>
          <li><b>Flexibility matters!</b> We realize that not all couples are comfortable with all forms of
            embryo donation. Therefore, we offer the option of donating your embryos both
            anonymously and openly. Furthermore, open donation can be tailored to your individual
            needs and desires, with all degrees of information sharing possible, making you feel
            more comfortable with your decision.
            We have a dedicated Social Work group (Flourish Consulting, LLC) who reviews all
            home studies, and mediates Open Donation Agreements (ODAs). This allows for a
            seamless experience for you without having to resort to expensive attorneys or other
            intermediaries.
          </li>
          <li><b>Cost matters!</b> There are NO FEES to you for donating your embryos. And once we
            have received them from your clinic, you will no longer be liable for storage costs from
            them. Likewise, we do not charge you storage fees, nor do we charge you shipping fees
            for moving your embryos to the NEDC.</li>
          <li><b>Success matters!</b> We have outstanding staff, which has resulted in us being blessed
            with the highest embryo adoption pregnancy rates in the nation as well as the most
            births from embryo donation in the entire world. We have now facilitated over 1200 births
            in our 18-year history.</li>
        </ol>
      </section>
      <section>
        <h2>DONATING YOUR EMBRYOS FROM A TO Z</h2>
        <p>You can apply to donate your embryos to the NEDC by clicking on the option “Apply to
          Donate” on the bottom right portion of our website. This will take you to our donor
          database, where you will have the opportunity to complete the application to donate your
          embryos.</p>
        <p>-Once you have added your information to the database, click the “Submit” button. You
          should receive an email confirming successful submission of your application along with
          an attached packet for you to complete. This packet contains consent forms which must
          be signed and notarized.</p>
        <p>-Once we receive your completed packet, we will request medical records from the
          fertility clinic where your embryos were created.</p>
        <p>-Upon receipt and review of your medical records, you will then receive orders for
          infectious disease lab testing. This lab work must be completed so we can reassure
          potential recipients about the safety of accepting your embryos.</p>
        <p>-When we receive your lab results, your Embryo Donor Profile will be submitted for final
          review to our medical director.</p>
        <p>-Once your profile receives a signature of final approval, we will then arrange for the
          shipment of your embryos to our embryology lab. We will cover all lab charges and any
          embryo shipping and handling charges.</p>
      </section>
      <section>
        <h2>WHAT TO EXPECT AFTER DONATING YOUR EMBRYOS</h2>
        <p><b>OVERVIEW:</b> It may take several months or several years to find a recipient couple for
          your embryos. We have streamlined the process for recipients by allowing them to
          choose certain characteristics in potential donors by using filters in our donor database.
          Therefore, depending on your unique profile, it may take a lesser or longer amount of
          time to match.</p>
        <p>When your embryos are matched, you will be notified if you are an open donor. However,
          if you prefer NOT to be notified, we will respect your wishes. If at any time you have
          questions about the status of your embryos, you can always call or email us.</p>
        <p>In the case of closed/ anonymous donation, you will receive no further information from
          us. If you do wish to be notified about the birth of a child from your embryos, with no
          identifying information given, please let us know and we will attempt to notify you. You
          are always welcome to call or email to check on the status of the embryos you have
          donated.</p>
        <p>For open donation, you will have ongoing contact through Flourish Consulting LLC. If
          you become aware of any medical or genetic conditions in you or your children after
          donation, we request that you notify Flourish Consulting (for open donors) or us so that
          we can inform the recipient couple. This will of course be done in an anonymous manner
          for closed embryo donations.</p>
        <p><b>ANONYMOUS DONATION:</b> Once you complete the donation process, we will begin
          sharing your profile to couples as they become eligible to adopt embryos. You are
          welcome to contact us at any time and inquire about your embryos. We can reveal if
          your embryos have been adopted, if there was a birth, and the gender of the baby (or
          babies). No identifying factors (name, place of birth, etc.) will be revealed.</p>
        <p>One thing that really helps our adoptive couples make their decision when viewing donor
          profiles is seeing pictures of a baby or child that would be a genetic sibling to the
          embryos that were donated and/or pictures of the parents of the embryos. All pictures
          that are added to a profile are kept secure and are only viewed by potential adoptive
          couples, who are given a passcode. You can send pictures by either email or mail if you
          would like those added to your profile.</p>
        <p>If you decide the NEDC is the right fit for your embryo donation, please know we will do
          everything possible to give your embryos a chance at life.</p>
        <p><b>OPEN DONATION:</b> Once you have completed the donation process, we will then begin
          sharing your profile with recipient couples. Once a potential adoptive couple chooses
          your profile, we will then reach out to you via email with the prospective adoptive
          couple’s profile information, letter, and photo. At that time, you can choose to accept or
          decline this couple. If you choose to accept the recipient couple, your profile will then be
          sent to one of our social workers at Flourish Consulting Services, LLC. All final terms for
          the embryo adoption will be mediated and set by our social worker.</p>
        <p>We have witnessed many precious relationships develop and many beautiful stories
          unfold among our donor and recipient couples. We are happy you chose us to be part of
          your journey to share this gift of hope and life with other couples. We understand that
          this process can be emotional and challenging for our donor couples. We are here to
          help guide you and support you through the matching and mediation process. Again, we
          are aware that not all donor and recipient couples are compatible with each other. Rest
          assured you will have the option to accept or decline a recipient couples’ request to
          adopt your embryo(s). We never want a donor couple to feel pressure during the
          matching and mediation process. We want you to feel supported and have the
          opportunity to choose a couple with whom you are comfortable sharing this gift. We
          know many donor couples have experienced a long and sometimes difficult infertility
          journey. You have now chosen to share hope and life with recipient couples. Keep in
          mind that many of our recipient couples have also experienced a long, difficult road to

          reach this point in their journey. This sometimes includes many disappointments and
          loss. It can be disheartening to recipient couples when we advise them that a donor
          couple has declined their request to adopt their embryos. Therefore, we try to give our
          donor couples plenty of opportunity to communicate any questions, concerns, or specific
          information that would be helpful in our efforts to match you with prospective adoptive
          couples. Some couples have strong values, beliefs, and opinions that could potentially
          affect their decision to accept or decline a recipient couple. A willingness to share this
          information is helpful to us as we work to match donor and recipient couples that are
          most compatible with each other. This information could also be helpful in our efforts to
          help prevent recipient couples from experiencing any unnecessary disappointments
          and/or feelings of rejection. We ultimately want both couples to have a positive
          experience during this process.</p>
        <p>We also want to take this time to remind you that all NEDC Embryo Profiles must remain
          active and available for adoption. Our mission is to provide all embryos donated a
          chance at life. Unfortunately, we have had a few cases in which donor couples have
          chosen open donation and then proceeded with actions that made it difficult to consider
          their embryo profile as active and available for adoption. We would like to provide you
          with a few suggestions as we move forward in this process:</p>
        <ul>
          <li>We will contact you by email and/or phone when a recipient couple chooses your
            profile. Please remember to inform us of any changes in your contact information
            (address, email, phone number, etc.). We will give you ample time to review and
            discuss the recipient couple’s information. Please let us know if you have
            questions or concerns about any of the information that we provide to you. All
            NEDC recipient couples must meet all of our program requirements. All are
            thoroughly screened and must pass a legal home study. If you ultimately decide to
            decline the recipient couple, it is helpful if you can provide us any feedback or if
            there was a specific reason that led to your decision to decline the couple.</li>
          <li><b>As stated in your signed consent to donate embryos, if you are matched
            with and decline (5) FIVE proposed recipient couples without feedback, you
            will be charged $500 per year for storage fees, subject to change.</b> If this were
            to occur, we would also encourage you to consider making alternate storage
            arrangements for your embryos.</li>
        </ul>
      </section>
      <section>
        <h2>
          COMMUNICATION OF INFORMATION WITH DONOR CONCEIVED CHILDREN AND REALITIES OF DNA TESTING OPPORTUNITIES
        </h2>
        <p><b>We encourage all Donor Families and Recipient Families to be open and honest
          with their children regarding their birth stories. There are many books</b></p>
      </section>
      <section>
        <h2>LEGAL INFORMATION</h2>
        <p>While embryo donation has a fairly uniform and specific legal definition, as is outlined in
          your consent forms, embryo adoption does not. In fact, Embryo Adoption is not a legal
          ‘adoption’ at all, at least in the sense of a traditional adoption which occurs after birth.
          However, the term allows all parties to conceptualize the process and eventual reality of
          raising a non-genetically related child.</p>
        <p>Several states have codified (put into their state laws) embryo adoption as a specific
          entity, separate and distinct from traditional adoption. Please contact your state
          representative or senator to find out if this is true for your state. If not, consider
          advocating for such legislation.</p>
        <p>However, despite the relative paucity of laws concerning donating and
          receiving/adopting embryos, there have been few significant legal contests which have
          ensued. To our knowledge, as of the writing of this document, there have been no cases
          where an embryo adoptive birth mother/couple has had to relinquish her/their child to the
          genetic parent(s). Similarly, we know of no cases where a child born as a result of
          embryo donation/adoption has successfully made a claim to any assets or interests of
          the donor couple.</p>
        <p>We agree with the recommendations of the American Society for Reproductive Medicine
          that all couples considering donation of their embryos undergo psychological counseling
          as well as counseling with an adoption specialist. However, we do not require these
          things in order for you to donate your embryos.</p>
        <p>Our legal contracts have been written by an attorney with years of experience in this
          field, but we cannot guarantee that there will be no issues that arise in the future as a
          result of the donation of your embryos. You are welcome to have an attorney review or
          re-write this contract.</p>
      </section>
      <h3
        sx={{
          textAlign: 'center',
          fontSize: '2rem',
          fontWeight: '500',
          color: '#fff',
          my: '1.5rem',
        }}
      >
        Frequently Asked Questions
      </h3>
      {data.map((item) => (
        <Faq data={item} />
      ))}
      <section sx={{
        mt: '1.5rem'
      }}>
        <h2>
          IMPORTANT! IS ANONYMITY REALLY POSSIBLE?
        </h2>
        <p>It is important to know that the concept of anonymity is rapidly fading in our culture, anthere is no longer a guarantee that your embryo donation will remain anonymous forever.While the NEDC as an organization will protect your privacy and not disclose your contact information, it is vital to understand that the rapidly advancing technologies regarding DNA testing and ancestry websites have given unprecedented access to individuals born via reproductive technologies including sperm, egg, or embryo donation Websites such as <a href='https://www.ancestry.com/'>www.ancestry.com</a> or <a href='https://donorsiblingregistry.com/'>www.donorsiblingregistry.com</a> are becoming widely used by children and adults born of donor conception. Social media or a simpl Google search gives access to finding the identities of individuals even with just their basic information. So, consider that the information you share on your donor profile could be used for a child to search later in life. The NEDC can no longer guarantee that your embryo adoption will remain ‘closed’ as a child born of your embryo donation may search online, and the future medical or technological advances will make it easier for someone to identify a donor.</p>
        <p>For this reason, more donors are choosing various levels of open adoption. Donors can choose from a very open contact plan, in which all parties have visits and talk often, to a semi-open adoption where you only share a private non-identifying email to provide medical or genetic updates. Donors can also elect to use a 3rd party mediator service that provides updates to the recipient couple, but they do not share their direct contact information. This provides an avenue of communication for the purposes of medical or genetic updates and allows a child the ability to have a means of contact in the event they express a desire for more information in the future. This minimal sharing of contact also limits a child’s desire to search and ‘surprise’ a donor later in life without their prior knowledge. Donors can be more prepared but also can have some privacy maintained.</p>
      </section>
    </section>
  );
};

export default Faqs;
