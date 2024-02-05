import TyfDatePicker from '@/elements/tyf-date-picker/tyf-date-picker';
import TyfTypography from '@/elements/tyf-typography/tyf-typography';
import useNavigate from '@/hooks/use-navigate';
import {IRouteParamsFlightCover} from '@/models/interfaces/routes/params';
import {
  FlightRequestCoverHeadStyled,
  FlightRequestCoverStyled,
} from '@/styles/components/layouts/flight/flight-request-cover';
import {CaretLeft} from 'phosphor-react-native';
import React, {FC, useEffect, useState} from 'react';
import {View} from 'react-native';

const FlightRequestCoverLayout: FC = () => {
  const {getScreenParams, onUpdateParams} = useNavigate();

  const [routeParams, setRouteParams] = useState<IRouteParamsFlightCover>();

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getScreenParams]);

  const init = () => {
    const params = getScreenParams() as IRouteParamsFlightCover;
    if (params) {
      setRouteParams(params);
    }
  };

  const updateDateParams = (event: Date) => {
    onUpdateParams({flightDate: event});
  };

  return routeParams ? (
    <FlightRequestCoverStyled>
      <FlightRequestCoverHeadStyled>
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
              value={routeParams.flightDate}
              theme="Minimalist"
              onChange={updateDateParams}
            />
          )}
        </View>
      </FlightRequestCoverHeadStyled>
    </FlightRequestCoverStyled>
  ) : null;
};

export default FlightRequestCoverLayout;
