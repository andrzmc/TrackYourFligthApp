import TyfTypography from '@/elements/tyf-typography/tyf-typography';
import useNavigate from '@/hooks/use-navigate';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';

const FlightDetailScreen = () => {
  const {getScreenParams} = useNavigate();

  useEffect(() => {
    console.log(getScreenParams());
  }, [getScreenParams]);

  return (
    <SafeAreaView>
      <TyfTypography text="FlightDetailScreen" />
    </SafeAreaView>
  );
};

export default FlightDetailScreen;
