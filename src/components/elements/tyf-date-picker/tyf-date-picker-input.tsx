import {
  TyfDatePickerInputContentStyled,
  TyfDatePickerInputStyled,
} from '@/styles/components/elements/tyf-date-picker';
import React, {FC} from 'react';
import TyfTypography from '../tyf-typography/tyf-typography';
import {TouchableOpacity} from 'react-native';
import moment from 'moment';
import {CalendarBlank} from 'phosphor-react-native';
import {TyfDatePickerContentProps} from '@/models/interfaces/components/elements/tyf-date-picker';

const TyfDatePickerInput: FC<TyfDatePickerContentProps> = props => {
  const {value, placeholder, disabled, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <TyfDatePickerInputStyled>
        <TyfTypography
          text={placeholder}
          variant={value ? 'Small' : 'Paragraph'}
        />
        {value && (
          <TyfDatePickerInputContentStyled>
            <TyfTypography
              text={moment(value).format('dddd, MMM DD')}
              fontWeight="Medium"
            />
            <CalendarBlank />
          </TyfDatePickerInputContentStyled>
        )}
      </TyfDatePickerInputStyled>
    </TouchableOpacity>
  );
};

export default TyfDatePickerInput;
