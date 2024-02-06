import TyfDatePicker from '@/elements/tyf-date-picker/tyf-date-picker';
import TyfTypography from '@/elements/tyf-typography/tyf-typography';
import useNavigate from '@/hooks/use-navigate';
import {IRouteParamsFlightCover} from '@/models/interfaces/routes/params';
import {IFlightStatusCollection} from '@/models/interfaces/services/api/flight-status';
import {
  FlightRequestCoverHeadStyled,
  FlightRequestCoverStyled,
} from '@/styles/components/layouts/flight/flight-request-cover';
import {CaretLeft} from 'phosphor-react-native';
import React, {FC} from 'react';
import {TouchableOpacity, View} from 'react-native';

const FlightRequestCoverLayout: FC<{
  routeParams: IRouteParamsFlightCover;
  flights: IFlightStatusCollection[];
}> = props => {
  const {routeParams, flights} = props;
  const {onUpdateParams} = useNavigate();

  const updateDateParams = (event: Date) => {
    onUpdateParams({flightDate: event});
  };

  return routeParams ? (
    <FlightRequestCoverStyled>
      <FlightRequestCoverHeadStyled>
        <TouchableOpacity>
          <CaretLeft weight="regular" size={32} />
        </TouchableOpacity>
        <View>
          <>
            {routeParams.flightType ? (
              <TyfTypography
                text={
                  routeParams.flightType === 'code'
                    ? `${routeParams.flightCarrier} ${routeParams.flightCode}`
                    : `${routeParams.flightDeparture} → ${routeParams.flightArrival}`
                }
                variant="Heading"
                fontWeight="Bold"
                alignment="right"
              />
            ) : null}
          </>
          {routeParams.flightDate && (
            <TyfDatePicker
              value={routeParams.flightDate}
              theme="Minimalist"
              onChange={updateDateParams}
            />
          )}
        </View>
      </FlightRequestCoverHeadStyled>
      <FlightRequestCoverHeadStyled style={{marginTop: 24}}>
        <View>
          <TyfTypography
            text={
              routeParams.flightType === 'code'
                ? `${flights.length ? `${flights[0].segment.departureAirport} to ${flights[0].segment.arrivalAirport}` : ''}`
                : `${routeParams.flightDeparture} → ${routeParams.flightArrival}`
            }
            variant="Small"
            fontWeight="Bold"
          />
        </View>
        <View>
          <TyfTypography
            text={`${flights.length} results`}
            variant="Small"
            color="Tertiary"
            fontWeight="Regular"
          />
        </View>
      </FlightRequestCoverHeadStyled>
    </FlightRequestCoverStyled>
  ) : null;
};

export default FlightRequestCoverLayout;
