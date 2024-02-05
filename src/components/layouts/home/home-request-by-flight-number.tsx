import TyfButton from '@/elements/tyf-button/tyf-button';
import TyfDatePicker from '@/elements/tyf-date-picker/tyf-date-picker';
import TyfSelect from '@/elements/tyf-select/tyf-select';
import {
  HomeRequestGridStyled,
  HomeRequestStyled,
} from '@/styles/components/layouts/home/home-request';
import React, {FC, useState} from 'react';

const HomeRequesFlightByNumberLayout: FC = () => {
  const [state, setState] = useState<string>();
  const [stateDate, setStateDate] = useState<Date>();

  return (
    <HomeRequestStyled>
      <HomeRequestGridStyled>
        <TyfSelect
          value={state}
          placeholder="Flight number"
          options={[{value: '500', label: 'AM 500'}]}
          onChange={setState}
        />
      </HomeRequestGridStyled>
      <HomeRequestGridStyled>
        <TyfDatePicker
          value={stateDate}
          placeholder="Date of departure"
          onChange={setStateDate}
        />
      </HomeRequestGridStyled>
      <HomeRequestGridStyled>
        <TyfButton
          text="Search Flight"
          fontVariant="Paragraph"
          styles={{borderRadius: 8}}
        />
      </HomeRequestGridStyled>
    </HomeRequestStyled>
  );
};

export default HomeRequesFlightByNumberLayout;
