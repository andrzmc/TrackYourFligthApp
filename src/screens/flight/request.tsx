import TyfTypography from '@/elements/tyf-typography/tyf-typography';
import FlightRequestCoverLayout from '@/layouts/flight/flight-request-cover';
import React from 'react';
import {SafeAreaView} from 'react-native';

const FlightRequestScreen = () => {
  return (
    <SafeAreaView>
      <FlightRequestCoverLayout />
      <TyfTypography text="FlightRequestScreen" />
    </SafeAreaView>
  );
};

export default FlightRequestScreen;
