import useNavigate from '@/hooks/use-navigate';
import FlightDetailsCoverLayout from '@/layouts/flight/flight-details-cover';
import FlightDetailsSwipUpLayout from '@/layouts/flight/flight-details-swip-up';
import {IFlightStatusCollection} from '@/models/interfaces/services/api/flight-status';
import React, {FC, useEffect, useState} from 'react';

const FlightDetailsModule: FC = () => {
  const {getScreenParams} = useNavigate();

  const [routeParams, setRouteParams] = useState<{
    params: IFlightStatusCollection;
  }>();

  useEffect(() => {
    getScreenParams() && init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getScreenParams]);

  const init = () => {
    setRouteParams(getScreenParams() as {params: IFlightStatusCollection});
  };

  return routeParams ? (
    <>
      <FlightDetailsCoverLayout {...routeParams.params} />
      <FlightDetailsSwipUpLayout {...routeParams.params} />
    </>
  ) : null;
};

export default FlightDetailsModule;
