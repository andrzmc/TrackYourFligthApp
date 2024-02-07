import React, {FC, useState} from 'react';
import TyfDatePickerInput from './tyf-date-picker-input';
import DatePicker from 'react-native-date-picker';
import {TyfDatePickerProps} from '@/models/interfaces/components/elements/tyf-date-picker';
import TyfDatePickerMinimalist from './tyf-date-picker-minimalist';

const TyfDatePicker: FC<TyfDatePickerProps> = props => {
  const {value, theme, placeholder, disabled, onChange} = props;
  const [open, setOpen] = useState<boolean>();

  const toogleDatePicker = () => {
    setOpen(prev => !prev);
  };

  const handdleDatePicker = (event: Date) => {
    setOpen(false);
    onChange && onChange(event);
  };

  return (
    <>
      {theme === 'Minimalist' ? (
        <TyfDatePickerMinimalist
          value={value}
          disabled={disabled}
          onPress={toogleDatePicker}
        />
      ) : (
        <TyfDatePickerInput
          value={value}
          placeholder={placeholder || 'Select Date'}
          disabled={disabled}
          onPress={toogleDatePicker}
        />
      )}
      <DatePicker
        modal
        theme="auto"
        mode="date"
        androidVariant="iosClone"
        open={open}
        date={value || new Date()}
        onConfirm={handdleDatePicker}
        onCancel={toogleDatePicker}
      />
    </>
  );
};

export default TyfDatePicker;
