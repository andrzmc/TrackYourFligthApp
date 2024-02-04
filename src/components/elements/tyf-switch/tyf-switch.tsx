import React, {FC} from 'react';
import {View} from 'react-native';
import TyfButton from '../tyf-button/tyf-button';

const TyfSwitch: FC = () => {
  return (
    <View
      style={{
        padding: 2,
        borderRadius: 4,
        borderColor: '#D6D6D6',
        borderWidth: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
      }}>
      <TyfButton text="Flight Number" color="Primary" />
      <TyfButton text="Destination" color="Light" />
    </View>
  );
};

export default TyfSwitch;
