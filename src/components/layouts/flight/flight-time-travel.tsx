import TyfTypography from '@/elements/tyf-typography/tyf-typography';
import {FlightTimeTravelProps} from '@/models/interfaces/components/layouts/flight-time-travel';
import {FlightRequestCardTimeStyled} from '@/styles/components/layouts/flight/flight-request-card';
import {flightRequestCardImageUtil} from '@/utils/components/layouts/flight/flight-request-card';
import moment from 'moment';
import React, {FC} from 'react';
import {View, Image, ImageSourcePropType} from 'react-native';

const FlightTimeTravelLayout: FC<FlightTimeTravelProps> = props => {
  const {flight, styles} = props;
  const {segment, status, estimatedDepartureTime, estimatedArrivalTime} =
    flight;

  return (
    <FlightRequestCardTimeStyled style={styles}>
      <View>
        <TyfTypography
          text={moment(new Date(estimatedDepartureTime)).format('hh:mm A')}
          fontWeight="Medium"
        />
        <TyfTypography text={segment.departureAirport} variant="Small" />
      </View>
      <Image
        style={{width: 160}}
        resizeMode="stretch"
        source={flightRequestCardImageUtil[status] as ImageSourcePropType}
      />
      <View>
        <TyfTypography
          text={moment(new Date(estimatedArrivalTime)).format('hh:mm A')}
          fontWeight="Medium"
          alignment="right"
        />
        <TyfTypography
          text={segment.arrivalAirport}
          alignment="right"
          variant="Small"
        />
      </View>
    </FlightRequestCardTimeStyled>
  );
};

export default FlightTimeTravelLayout;
