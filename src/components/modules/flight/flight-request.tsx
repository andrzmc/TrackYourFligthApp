import TyfTypography from '@/elements/tyf-typography/tyf-typography';
import useNavigate from '@/hooks/use-navigate';
import FlightRequestCoverLayout from '@/layouts/flight/flight-request-cover';
import {IRouteParamsFlightCover} from '@/models/interfaces/routes/params';
import React, {FC, useEffect, useState} from 'react';

const FlightRequestModule: FC = () => {
  const {getScreenParams} = useNavigate();

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

  return routeParams ? (
    <>
      <FlightRequestCoverLayout routeParams={routeParams} />
      <TyfTypography text="FlightRequestScreen" />
    </>
  ) : null;
};

export default FlightRequestModule;
