import React from 'react';
import GlobalConfigurationModule from '@/modules/global/global-configuration';
import TyfTypography from '@/elements/tyf-typography/tyf-typography';

const App = () => {
  return (
    <GlobalConfigurationModule>
      <TyfTypography
        text=" screen and then come back to see your edits."
        color="Secondary"
        variant="Paragraph"
      />
    </GlobalConfigurationModule>
  );
};

export default App;
