import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import TyfTypography from '../tyf-typography/tyf-typography';
import {TyfDatePickerContentProps} from '@/models/interfaces/components/elements/tyf-date-picker';
import moment from 'moment';
import {TyfDatePickerMinimalistStyled} from '@/styles/components/elements/tyf-date-picker';
import {CalendarBlank} from 'phosphor-react-native';

const TyfDatePickerMinimalist: FC<TyfDatePickerContentProps> = props => {
  const {value, disabled, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <TyfDatePickerMinimalistStyled>
        <TyfTypography
          text={moment(value).format('dddd, MMM DD')}
          variant="Small"
        />
        <TyfTypography text="|" variant="Small" />
        <CalendarBlank size={16} />
        <TyfTypography
          text="Change"
          fontWeight="Medium"
          variant="Small"
          decoration="underline"
        />
      </TyfDatePickerMinimalistStyled>
    </TouchableOpacity>
  );
};

export default TyfDatePickerMinimalist;
