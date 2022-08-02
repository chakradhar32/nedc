/** @jsx jsx */
import { jsx } from 'theme-ui';
import SectionHeader from '../Common/SectionHeader';

const Anonymity = () => {
  return (
    <section
      sx={{
        mt: '1.5rem',
      }}
    >
      <div className="text-content">
        <SectionHeader heading="Important! Is Anonymity really Possible?" />
        <p>
          It is important to know that the concept of anonymity is rapidly fading in our culture,
          anthere is no longer a guarantee that your embryo donation will remain anonymous
          forever.While the NEDC as an organization will protect your privacy and not disclose your
          contact information, it is vital to understand that the rapidly advancing technologies
          regarding DNA testing and ancestry websites have given unprecedented access to individuals
          born via reproductive technologies including sperm, egg, or embryo donation Websites such
          as <a href="https://www.ancestry.com/">www.ancestry.com</a> or{' '}
          <a href="https://donorsiblingregistry.com/">www.donorsiblingregistry.com</a> are becoming
          widely used by children and adults born of donor conception. Social media or a simpl
          Google search gives access to finding the identities of individuals even with just their
          basic information. So, consider that the information you share on your donor profile could
          be used for a child to search later in life. The NEDC can no longer guarantee that your
          embryo adoption will remain ‘closed’ as a child born of your embryo donation may search
          online, and the future medical or technological advances will make it easier for someone
          to identify a donor.
        </p>
        <p>
          For this reason, more donors are choosing various levels of open adoption. Donors can
          choose from a very open contact plan, in which all parties have visits and talk often, to
          a semi-open adoption where you only share a private non-identifying email to provide
          medical or genetic updates. Donors can also elect to use a 3rd party mediator service that
          provides updates to the recipient couple, but they do not share their direct contact
          information. This provides an avenue of communication for the purposes of medical or
          genetic updates and allows a child the ability to have a means of contact in the event
          they express a desire for more information in the future. This minimal sharing of contact
          also limits a child’s desire to search and ‘surprise’ a donor later in life without their
          prior knowledge. Donors can be more prepared but also can have some privacy maintained.
        </p>
      </div>
    </section>
  );
};

export default Anonymity;
