import TyfButton from '@/elements/tyf-button/tyf-button';
import TyfTypography from '@/elements/tyf-typography/tyf-typography';
import {
  IFlightColorStatus,
  IFlightStatus,
} from '@/models/enums/components/layouts/flight/flight-request-card';
import {IFlightStatusCollection} from '@/models/interfaces/services/api/flight-status';
import {
  FlightRequestCardStatusStyle,
  FlightRequestCardStatusStyled,
  FlightRequestCardStyled,
  FlightRequestCardTimeStyled,
} from '@/styles/components/layouts/flight/flight-request-card';
import {ColorLightStyle, ColorPrimaryStyle} from '@/styles/global/colors';
import moment from 'moment';
import React, {FC, useEffect, useState} from 'react';
import {Image, View, useColorScheme} from 'react-native';

const FlightRequestCardLayout: FC<IFlightStatusCollection> = props => {
  const {segment, status, estimatedDepartureTime, estimatedArrivalTime} = props;

  const isDarkMode = useColorScheme() === 'dark';

  const [borderColor, setBorderColor] = useState<string>();

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const init = () => {
    defineCardStyles();
  };

  const defineCardStyles = () => {
    setBorderColor(isDarkMode ? ColorLightStyle : ColorPrimaryStyle);
  };

  return (
    <FlightRequestCardStyled style={{borderColor}}>
      <FlightRequestCardStatusStyled>
        <TyfButton
          text={IFlightStatus[status]}
          color={IFlightColorStatus[status]}
          styles={FlightRequestCardStatusStyle}
          disabled
        />
      </FlightRequestCardStatusStyled>
      <FlightRequestCardTimeStyled>
        <View>
          <TyfTypography
            text={moment(new Date(estimatedDepartureTime)).format('hh:mm A')}
            fontWeight="Medium"
          />
          <TyfTypography text={segment.departureAirport} variant="Small" />
        </View>
        <View>
          <Image
            source={require(`../../../../assets/images/ARRIVAL-flight.png`)}
          />
        </View>
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
    </FlightRequestCardStyled>
  );
};

export default FlightRequestCardLayout;
