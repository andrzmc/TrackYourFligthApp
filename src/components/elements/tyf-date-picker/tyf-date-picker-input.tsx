import {TyfDatePickerInputStyled} from '@/styles/components/elements/tyf-date-picker';
import React, {FC} from 'react';
import TyfTypography from '../tyf-typography/tyf-typography';
import {TouchableOpacity} from 'react-native';
import moment from 'moment';

const TyfDatePickerInput: FC<{
  value?: Date;
  placeholder: string;
  disabled?: boolean;
  onPress: () => void;
}> = props => {
  const {value, placeholder, disabled, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <TyfDatePickerInputStyled>
        <TyfTypography
          text={placeholder}
          variant={value ? 'Small' : 'Paragraph'}
        />
        {value && (
          <>
            <TyfTypography
              text={moment(value).format('dddd, MMM DD')}
              fontWeight="Medium"
            />
          </>
        )}
      </TyfDatePickerInputStyled>
    </TouchableOpacity>
  );
};

export default TyfDatePickerInput;
