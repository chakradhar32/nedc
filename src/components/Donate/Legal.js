/** @jsx jsx */
import { jsx } from 'theme-ui';
import SectionHeader from '../Common/SectionHeader';

const Legal = () => {
  return (
    <section>
      <div className="text-content">
        <SectionHeader heading="LEGAL INFORMATION" />
        <p>
          While embryo donation has a fairly uniform and specific legal definition, as is outlined
          in your consent forms, embryo adoption does not. In fact, Embryo Adoption is not a legal
          ‘adoption’ at all, at least in the sense of a traditional adoption which occurs after
          birth. However, the term allows all parties to conceptualize the process and eventual
          reality of raising a non-genetically related child.
        </p>
        <p>
          Several states have codified (put into their state laws) embryo adoption as a specific
          entity, separate and distinct from traditional adoption. Please contact your state
          representative or senator to find out if this is true for your state. If not, consider
          advocating for such legislation.
        </p>
        <p>
          However, despite the relative paucity of laws concerning donating and receiving/adopting
          embryos, there have been few significant legal contests which have ensued. To our
          knowledge, as of the writing of this document, there have been no cases where an embryo
          adoptive birth mother/couple has had to relinquish her/their child to the genetic
          parent(s). Similarly, we know of no cases where a child born as a result of embryo
          donation/adoption has successfully made a claim to any assets or interests of the donor
          couple.
        </p>
        <p>
          We agree with the recommendations of the American Society for Reproductive Medicine that
          all couples considering donation of their embryos undergo psychological counseling as well
          as counseling with an adoption specialist. However, we do not require these things in
          order for you to donate your embryos.
        </p>
        <p>
          Our legal contracts have been written by an attorney with years of experience in this
          field, but we cannot guarantee that there will be no issues that arise in the future as a
          result of the donation of your embryos. You are welcome to have an attorney review or
          re-write this contract.
        </p>
      </div>
    </section>
  );
};

export default Legal;
