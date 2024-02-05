import TyfDatePicker from '@/elements/tyf-date-picker/tyf-date-picker';
import TyfTypography from '@/elements/tyf-typography/tyf-typography';
import useNavigate from '@/hooks/use-navigate';
import {IRouteParamsFlightCover} from '@/models/interfaces/routes/params';
import {FlightRequestCoverStyled} from '@/styles/components/layouts/flight/flight-request-cover';
import {CaretLeft} from 'phosphor-react-native';
import React, {FC, useEffect, useState} from 'react';
import {View} from 'react-native';

const FlightRequestCoverLayout: FC = () => {
  const {getScreenParams} = useNavigate();

  const [routeParams, setRouteParams] = useState<IRouteParamsFlightCover>();
  const [flightDate, setFlightDate] = useState<Date>();

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const init = () => {
    const params = getScreenParams() as IRouteParamsFlightCover;
    if (params) {
      setRouteParams(params);
      setFlightDate(params.flightDate);
    }
  };

  return routeParams ? (
    <FlightRequestCoverStyled>
      <CaretLeft weight="regular" size={32} />
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
            value={flightDate}
            theme="Minimalist"
            onChange={setFlightDate}
          />
        )}
      </View>
    </FlightRequestCoverStyled>
  ) : null;
};

export default FlightRequestCoverLayout;
