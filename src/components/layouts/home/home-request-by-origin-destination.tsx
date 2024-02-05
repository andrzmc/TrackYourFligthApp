import TyfTypography from '@/elements/tyf-typography/tyf-typography';
import {HomeRequestStyled} from '@/styles/components/layouts/home/home-request';
import React, {FC} from 'react';

const HomeRequesFlightByOriginDestinationLayout: FC = () => {
  return (
    <HomeRequestStyled>
      <TyfTypography text="Destination" />
    </HomeRequestStyled>
  );
};

export default HomeRequesFlightByOriginDestinationLayout;
