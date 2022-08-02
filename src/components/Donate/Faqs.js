/** @jsx jsx */
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
      answer:
        'Not necessarily. Although there has never been a case of infectious disease transmission after a frozen embryo transfer, the best practice recommendations call for storage of potentially infectious embryos in a specially designated tank. If you have an infectious disease such as Hepatitis or HIV, we require matching of your embryos with a specific recipient prior to shipping because we do not have a ‘biohazard’ embryo storage tank, and because your embryos may take many months or even years to match with a recipient. <br> Similarly, if you have embryos which have been genetically tested and found to be abnormal in any way, or if you have a known genetic condition, or your current child or children do, then we will in general need to identify a specific donor for your embryos prior to shipping, because it is likely that a longer than usual period of time will be required to find a recipient.',
    },
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
      {data.map((item, index) => (
        <Faq data={{ ...item, index }} />
      ))}
    </section>
  );
};

export default Faqs;
