/** @jsx jsx */
import { jsx } from 'theme-ui';

const SectionHeader = ({ heading }) => {
  return (
    <div sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3
        sx={{
          fontWeight: 400,
          fontSize: ['1.5rem', null, '2.5rem'],
          lineHeight: '80px',
          color: '#666666',
          mx: 'auto',
          textAlign: 'center',
          mt: '1rem',
        }}
      >
        {heading}
      </h3>
    </div>
  );
};

export default SectionHeader;
