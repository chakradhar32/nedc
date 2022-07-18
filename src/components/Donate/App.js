/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

const App = () => {
  const data = [
    {
      question: 'What is the process?',
      answer: 'You will be asked to fill out an application, provide some medical and genetic history, and have some minimal testing. During the process, you may even decide which family will be privileged to adopt your embryos. You may also decide to what degree of contact, if any, you wish to have with the adopting family. During this same time period, you will be instructed to contact and inform the clinic where your frozen embryos are stored that you are donating your embryos to another infertile couple through the NEDC. They will probably require you to sign a medical record release form and a waiver/release of liability form. Once this paperwork is completed, the NEDC can then make arrangements directly with the clinic for the embryos to be shipped to <a href="https://southeasternfertility.org/">Southeastern Fertility</a>, our medical partners with whom we are co-located, at no cost to you. Once we have all the information we need from you, it can take 6 to 9 months until your embryos are shipped to the Southeastern Fertility lab.'
    },
    {
      question: 'Why choose the NEDC?',
      answer: "Many donate embryos through the NEDC because of the peace of mind provided by our home study requirement, which means your embryos will go to a stable, healthy family. Many choose to adopt through the NEDC because of our superior pregnancy rates (54% in the most recent reporting year). And all are reassured by our nearly two-decade-long track record and commitment to keep strengthening the NEDC long-term, ensuring the ability of embryo donors and recipients to receive and share information in the future."
    },
    {
      question: 'How do we get started?',
      answer: "Fill out our <a href='https://login.embryodonation.org/auth/registration'> online application.</a> You will be notified your application was received by email. Also, generally within 2 to 3 weeks, a follow-up packet of consents and forms to be completed and returned will be sent to you via email. You may call the National Embryo Donation Center toll free at 1-866-585-8549 with questions. We will happily provide you additional information and answer your questions. Don’t delay. Give these young lives a chance and provide hope to couples longing for a child."
    },
    {
      question: 'Where should I send my embryos for donation?',
      answer: "If you’re thinking about donating your embryos to the NEDC or another embryo donation agency, and are worried about ongoing storage fees, the NEDC has no storage fees for embryo donors. Your embryos will be shipped to Southeastern Fertility’s onsite laboratory free of charge, where they will be well cared for until a recipient family is found.<br>You can begin your donation by submitting your online donor application or call us Toll-Free: 866-585-8549<br>Once your online application and contact information has been received we will email you a follow-up packet of consents and forms to complete and return to the NEDC. Once all the follow-up paperwork is received back by the NEDC, we will make arrangements to have your embryos shipped here. You retain complete decision-making power over your embryos."
    },
    {
      question: 'If I donate embryos, what is the likelihood they will be adopted?',
      answer: "Our goal is to have all embryos adopted, and we will care for all until they are adopted. We are in particular need of embryos from minority ethnic backgrounds as they are currently in low supply and are most likely to be adopted quickly. The overwhelming majority of our embryos are Caucasian, and all need good homes regardless of ethnicity. We gladly accept and care for embryos of all ethnic backgrounds."
    },
    {
      question: 'What is the chance of embryos successfully implanting?',
      answer: "The national average for pregnancy from donated embryos is 50 percent and the national average live-birth rate is 40 percent, according to the Center for Disease Control (CDC). The CDC collects data annually from all U.S. assisted reproductive technology clinics and compiles all their reproductive efforts, including number of IVF cycles, number of live births and number of donated embryo transfers, for the past year.<br>The NEDC’s overall pregnancy rate per transfer is 55 percent and live-birth rate is 45 percent. Not all embryos survive the freeze/thaw process, though approximately 75 percent do, and thawing of your embryos may not lead to a transfer. However, this still offers the greatest hope for both your frozen embryos and many infertile couples."
    },
    {
      question: 'Is there a cost to donate embryos?',
      answer: "There are not any fees for the donating/genetic parents. The adopting families cover all costs."
    },
    {
      question: 'What types of donation are available?',
      answer: "The NEDC can arrange an open or anonymous donation between you and the adopting couple. If open communication is selected and once the donor and recipient families have approved each other, the arrangement is then mediated by a third party and finalized. All mediation fees will be paid by the adopting family."
    },
    {
      question: 'If I change my mind, can I get my embryos back?',
      answer: "The answer is yes, IF your donated embryos have not been matched or thawed and transferred. Then you can send a written request for the return of your embryos and must provide reimbursement for all of the lab and shipping fees we or our medical partners have paid, as well as $500/year for storage.  You can then pay a shipper directly to have your embryos shipped to the fertility center of your choice."
    },
    {
      question: 'Who can adopt?',
      answer: "We work hard to assure our donors that their embryos will be placed in healthy, stable homes with loving parents. <br> <ul> <li>Couples must be a genetic male and a genetic female married for a minimum of 3 years.</li> <li>Wife must be 45 years old or younger.</li> <li>Wife’s body mass index (BMI) must be below 38 at the time of the frozen embryo transfer.</li> <li>The combined age of applicant couple must not exceed 100 years.</li><li>The adopting mother must be healthy and able to carry a child to term. Surrogates are not an option for carrying the pregnancy.</li> <li>The wife must not smoke during the application process, embryo transfer preparation and procedure process, or during pregnancy.</li> <li>Both husband and wife must be free of alcohol dependence and other substance dependence for two years before adopting. A letter from an addiction specialist may be required.</li> <li>All couples must complete and pass a 10-panel urine drug screen as well as a blood test for sexually transmitted diseases.</li><li>Couples must complete and pass a comprehensive family assessment (home study) prepared by a licensed adoption agency in the couple’s state, territory or province of residency, or an embryo adoption-specific <a href='https://nightlight.org/snowflakes-embryo-adoption-donation/snowflakes-family-evaluations-sfe/' Snowflakes Family Evaluation</a> in lieu of a home study. Click <a href='/wp-content/uploads/2015/02/AA-link-list.xlsx' >here</a> for adoption agency information.</li> </ul> <p>We are not able to make any exceptions to these requirements. If you meet the requirements, our dedicated staff will help prepare you every step of the way for the exciting journey ahead.</p>"
    },
    {
      question: 'Can I decide to whom my embryos will go?',
      answer: "In an open relationship the donor and recipient families must approve each other. The open arrangement is then mediated by a third party so that all parties involved are clear on the level of communication they will share. If you choose to donate anonymously you are able to set certain stipulations for the recipient couple, such as, geographic location, religious preference, and education levels. The NEDC will honor your requests by selecting an anonymous family to receive your embryos.  The National Embryo Donation Center reserves the right to place certain restrictions on the adopting parents."
    },
    {

      question: 'Are the adopting couples screened?',
      answer: "Yes, they are screened for infectious diseases, general and reproductive health, and their ability to successfully parent children. All adopting families must undergo and pass a home study in the state in which they reside."
    },
    {
      question: 'Will we be responsible for our embryos or have parental rights?',
      answer: "Prior to donation, you will sign a form relinquishing your rights to your embryos and any children who are born from them. Your relinquishment does not officially begin until the embryos are physically transferred in to the recipient wife. At that time the adopting family receives all rights."
    },
    {
      question: 'Could the children from the embryo donation inadvertently meet their siblings andreproduce?',
      answer: "In our large society, the risk is negligible. Donating your embryos to someone in a different state will further minimize the risk."
    },
    {
      question: 'Do I have any legal liability?',
      answer: "No."
    },
    {
      question: 'What will happen to my embryos if I choose not to donate them?',
      answer: "Not making a decision is not a viable option! Even though embryos have an indefinite storage life, you do not have an indefinite life span, and by not making a decision, someone — very probably the living genetic siblings of those embryos — will eventually have to make it for you. Although you may be struggling with the idea of donating your embryos to another couple, your decision to help others have children is the most caring and compassionate option to choose."
    }]
  return (
    <section
      sx={{
        background: 'rgba(75, 147, 142, 0.9)',
        mt: '3rem',
        py: '32px',
      }}
    >
      {data.map((item) => (<div
        sx={{
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '20px',
          //lineHeight: '30px',
          color: '#666666',
          bg: '#FFFFFF',
          maxWidth: '1400px',
          mx: 'auto',
        }}
      >
        <p>{item.question}</p>
        <p sx={{
          mb: '1rem'
        }}>{item.answer}</p>
      </div>))}
    </section>
  );
};

export default App;
