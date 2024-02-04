import React, {FC, useState} from 'react';
import TyfDatePickerInput from './tyf-date-picker-input';
import DatePicker from 'react-native-date-picker';

const TyfDatePicker: FC = () => {
  const [value, setValue] = useState<Date>();
  const [open, setOpen] = useState<boolean>();

  const toogleDatePicker = () => {
    setOpen(prev => !prev);
  };

  const handdleDatePicker = (event: Date) => {
    setOpen(false);
    setValue(event);
  };

  return (
    <>
      <TyfDatePickerInput
        placeholder="Select Date"
        value={value}
        onPress={toogleDatePicker}
        disabled={true}
      />
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
