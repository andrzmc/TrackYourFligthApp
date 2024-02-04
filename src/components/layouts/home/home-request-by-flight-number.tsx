import TyfDatePicker from '@/elements/tyf-date-picker/tyf-date-picker';
import TyfSelect from '@/elements/tyf-select/tyf-select';
import {HomeRequestStyled} from '@/styles/components/layouts/home/home-request';
import React, {FC, useState} from 'react';

const HomeRequesFlightByNumberLayout: FC = () => {
  const [state, setState] = useState<string>();

  return (
    <HomeRequestStyled>
      <TyfSelect
        value={state}
        options={[{value: '500', label: 'AM 500'}]}
        onChange={setState}
      />
      <TyfDatePicker disabled />
    </HomeRequestStyled>
  );
};

export default HomeRequesFlightByNumberLayout;
