import TyfTypography from '@/elements/tyf-typography/tyf-typography';
import useNavigate from '@/hooks/use-navigate';
import FlightRequestCoverLayout from '@/layouts/flight/flight-request-cover';
import {IRouteParamsFlightCover} from '@/models/interfaces/routes/params';
import {IFlightStatusCollection} from '@/models/interfaces/services/api/flight-status';
import {
  GetFlightsByCodeService,
  GetFlightsByTravelService,
} from '@/services/api/flight-status';
import React, {FC, useEffect, useState} from 'react';

const FlightRequestModule: FC = () => {
  const {getScreenParams} = useNavigate();

  const [routeParams, setRouteParams] = useState<IRouteParamsFlightCover>();
  const [flights, setFlights] = useState<IFlightStatusCollection[]>([]);

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    updateRouteParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getScreenParams]);

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeParams]);

  const init = () => {
    if (routeParams) {
      if (routeParams?.flightType === 'code') {
        getResultsByCode();
      }

      if (routeParams?.flightType === 'travel') {
        getResultsByTravel();
      }
    }
  };

  const updateRouteParams = () => {
    const params = getScreenParams() as IRouteParamsFlightCover;
    setRouteParams(params);
  };

  const getResultsByCode = async () => {
    const response = await GetFlightsByCodeService(
      routeParams?.flightCode as string
    );
    setFlights(response);
  };

  const getResultsByTravel = async () => {
    const response = await GetFlightsByTravelService(
      routeParams?.flightDeparture as string,
      routeParams?.flightArrival as string,
      routeParams?.flightDate as Date
    );

    setFlights(response);
  };

  return routeParams ? (
    <>
      <FlightRequestCoverLayout routeParams={routeParams} flights={flights} />
      <TyfTypography text="FlightRequestScreen" />
    </>
  ) : null;
};

export default FlightRequestModule;
