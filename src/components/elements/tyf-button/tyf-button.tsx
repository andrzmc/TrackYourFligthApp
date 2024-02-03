import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import TyfTypography from '../tyf-typography/tyf-typography';

const TyfButton: FC = () => {
  return (
    <TouchableOpacity
      style={{width: 'auto', backgroundColor: 'red'}}
      onPress={() => console.warn('kakak')}>
      <TyfTypography text="jajaj" />
    </TouchableOpacity>
  );
};

export default TyfButton;
