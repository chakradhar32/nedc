/** @jsx jsx */
import { jsx } from 'theme-ui';
import SectionHeader from '../Common/SectionHeader';

const AskingQuestions = () => {
  return (
    <section>
      <div className="text-content">
        <SectionHeader heading="Asking Questions" />
        {/* asking questions/CONNECTING */}
        <p>
          We’ve tried to include comprehensive information answering most of your questions about
          donating embryos in this section of our website. But we also realize you may have
          questions we haven’t answered. And sometimes it’s just helpful to reach out and connect
          with another voice to serve as a helpful guide. If you have further questions about
          donating your embryos, please reach out to us anytime! You may reach the NEDC’s donor
          coordinator at (865) 777-2013 x234 or{' '}
          <a href="mailto:nedc.donornurse@baby4me.net">NEDC.DonorNurse@baby4me.net.</a>
        </p>
        <p>
          You may also find our private Embryo Donors Group on Facebook to be a helpful source of
          information and support. You may find and request to join the group by going{' '}
          <a href="https://www.facebook.com/groups/embryodonation">here</a>.
        </p>
      </div>
    </section>
  );
};

export default AskingQuestions;
