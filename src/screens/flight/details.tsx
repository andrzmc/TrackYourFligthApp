import TyfTypography from '@/elements/tyf-typography/tyf-typography';
import useNavigate from '@/hooks/use-navigate';
import React, {useEffect} from 'react';
import {View} from 'react-native';

const FlightDetailScreen = () => {
  const {getScreenParams} = useNavigate();

  useEffect(() => {
    console.log(getScreenParams());
  }, [getScreenParams]);

  return (
    <View>
      <TyfTypography text="FlightDetailScreen" />
    </View>
  );
};

export default FlightDetailScreen;
