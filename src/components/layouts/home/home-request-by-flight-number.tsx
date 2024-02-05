import TyfButton from '@/elements/tyf-button/tyf-button';
import TyfDatePicker from '@/elements/tyf-date-picker/tyf-date-picker';
import TyfSelect from '@/elements/tyf-select/tyf-select';
import TyfTypography from '@/elements/tyf-typography/tyf-typography';
import {
  HomeRequestGridStyled,
  HomeRequestStyled,
} from '@/styles/components/layouts/home/home-request';
import {useNavigation} from '@react-navigation/native';
import React, {FC, useState} from 'react';
import {TouchableOpacity} from 'react-native';

const HomeRequesFlightByNumberLayout: FC = () => {
  const {navigate} = useNavigation();

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
          styles={{borderRadius: 8, width: '100%'}}
        />
      </HomeRequestGridStyled>
      <HomeRequestGridStyled>
        <TyfTypography
          text="Can’t find your flight number?"
          variant="Small"
          alignment="center"
        />
        <TouchableOpacity
          onPress={() => navigate('HomeDestinationScreen' as never)}>
          <TyfTypography
            text="Try searching by destination"
            variant="Small"
            fontWeight="Medium"
            alignment="center"
            decoration="underline"
          />
        </TouchableOpacity>
      </HomeRequestGridStyled>
    </HomeRequestStyled>
  );
};

export default HomeRequesFlightByNumberLayout;
