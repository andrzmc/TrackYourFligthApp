import TyfTypography from '@/elements/tyf-typography/tyf-typography';
import useNavigate from '@/hooks/use-navigate';
import FlightRequestCoverLayout from '@/layouts/flight/flight-request-cover';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';

const FlightRequestScreen = () => {
  const {getScreenParams} = useNavigate();

  useEffect(() => {
    console.log(getScreenParams());
  }, [getScreenParams]);

  return (
    <SafeAreaView>
      <FlightRequestCoverLayout />
      <TyfTypography text="FlightRequestScreen" />
    </SafeAreaView>
  );
};

export default FlightRequestScreen;
