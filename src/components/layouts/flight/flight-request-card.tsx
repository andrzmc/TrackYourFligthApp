import TyfButton from '@/elements/tyf-button/tyf-button';
import TyfTypography from '@/elements/tyf-typography/tyf-typography';
import {
  IFlightColorStatus,
  IFlightStatus,
} from '@/models/enums/components/layouts/flight/flight-request-card';
import {IFlightStatusCollection} from '@/models/interfaces/services/api/flight-status';
import {
  FlightRequestCardFooterLinkStyled,
  FlightRequestCardFooterStyled,
  FlightRequestCardStatusStyle,
  FlightRequestCardStatusStyled,
  FlightRequestCardStyled,
  FlightRequestCardTimeStyled,
} from '@/styles/components/layouts/flight/flight-request-card';
import {flightRequestCardImageUtil} from '@/utils/components/layouts/flight/flight-request-card';
import moment from 'moment';
import {CaretRight} from 'phosphor-react-native';
import React, {FC} from 'react';
import {Image, ImageSourcePropType, TouchableOpacity, View} from 'react-native';

const FlightRequestCardLayout: FC<IFlightStatusCollection> = props => {
  const {segment, status, estimatedDepartureTime, estimatedArrivalTime} = props;

  return (
    <FlightRequestCardStyled>
      <FlightRequestCardStatusStyled>
        <TyfButton
          text={IFlightStatus[status]}
          color={IFlightColorStatus[status]}
          styles={FlightRequestCardStatusStyle}
          disabled
        />
      </FlightRequestCardStatusStyled>
      <FlightRequestCardTimeStyled style={{borderBottomWidth: 1}}>
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
      <FlightRequestCardFooterStyled>
        <TyfTypography
          text={`${segment.marketingCarrier} ${segment.marketingFlightCode}`}
          fontWeight="Medium"
          alignment="right"
          variant="Small"
        />
        <TouchableOpacity>
          <FlightRequestCardFooterLinkStyled>
            <TyfTypography
              text="Details"
              alignment="right"
              variant="Small"
              decoration="underline"
            />
            <CaretRight size={12} weight="regular" />
          </FlightRequestCardFooterLinkStyled>
        </TouchableOpacity>
      </FlightRequestCardFooterStyled>
    </FlightRequestCardStyled>
  );
};

export default FlightRequestCardLayout;
