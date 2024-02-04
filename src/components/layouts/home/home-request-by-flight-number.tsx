import TyfTypography from '@/elements/tyf-typography/tyf-typography';
import {HomeRequestStyled} from '@/styles/components/layouts/home/home-request';
import React, {FC} from 'react';

const HomeRequesFlightByNumberLayout: FC = () => {
  return (
    <HomeRequestStyled>
      <TyfTypography text="Flight Number" color="Error" />
    </HomeRequestStyled>
  );
};

export default HomeRequesFlightByNumberLayout;
