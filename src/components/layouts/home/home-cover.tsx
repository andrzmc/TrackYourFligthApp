import TyfTypography from '@/elements/tyf-typography/tyf-typography';
import React, {FC} from 'react';
import HomeToogleScreenLayout from './home-toogle-screen';
import {
  HomeCoverStyled,
  HomeCoverTextStyled,
  HomeCoverToogleStyled,
} from '@/styles/components/layouts/home/home-cover';

const HomeCoverLayout: FC = () => {
  return (
    <HomeCoverStyled>
      <HomeCoverTextStyled>
        <TyfTypography
          text="Track your flight"
          variant="Subheading"
          fontWeight="Medium"
        />
        <TyfTypography
          text="Keep you informed in real time!"
          variant="Paragraph"
          fontWeight="Light"
        />
      </HomeCoverTextStyled>
      <HomeCoverToogleStyled>
        <HomeToogleScreenLayout />
      </HomeCoverToogleStyled>
    </HomeCoverStyled>
  );
};

export default HomeCoverLayout;
