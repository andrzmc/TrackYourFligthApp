import {
  TyfDatePickerInputContentStyled,
  TyfDatePickerInputStyled,
} from '@/styles/components/elements/tyf-date-picker';
import React, {FC} from 'react';
import TyfTypography from '../tyf-typography/tyf-typography';
import {TouchableOpacity, useColorScheme} from 'react-native';
import moment from 'moment';
import {CalendarBlank} from 'phosphor-react-native';
import {TyfDatePickerContentProps} from '@/models/interfaces/components/elements/tyf-date-picker';
import {ColorLightStyle, ColorPrimaryStyle} from '@/styles/global/colors';

const TyfDatePickerInput: FC<TyfDatePickerContentProps> = props => {
  const isDarkMode = useColorScheme() === 'dark';

  const {value, placeholder, disabled, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <TyfDatePickerInputStyled
        style={{borderColor: isDarkMode ? ColorLightStyle : ColorPrimaryStyle}}>
        <TyfTypography
          text={placeholder as string}
          variant={value ? 'Small' : 'Paragraph'}
        />
        {value && (
          <TyfDatePickerInputContentStyled>
            <TyfTypography
              text={moment(value).format('dddd, MMM DD')}
              fontWeight="Medium"
            />
            <CalendarBlank size={16} />
          </TyfDatePickerInputContentStyled>
        )}
      </TyfDatePickerInputStyled>
    </TouchableOpacity>
  );
};

export default TyfDatePickerInput;
