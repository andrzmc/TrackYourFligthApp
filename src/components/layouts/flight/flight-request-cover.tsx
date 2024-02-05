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

  const [flightCode, setFlightCode] = useState<string>();
  const [flightCarrier, setFlightCarrier] = useState<string>();
  const [flightDate, setFlightDate] = useState<Date>();

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const init = () => {
    const params = getScreenParams() as IRouteParamsFlightCover;
    if (params) {
      setFlightDate(params.flightDate);
      setFlightCode(params.flightCode);
      setFlightCarrier(params.flightCarrier);
    }
  };

  return (
    <FlightRequestCoverStyled>
      <CaretLeft weight="regular" size={32} />
      <View>
        {flightCode && flightCarrier ? (
          <TyfTypography
            text={`${flightCarrier} ${flightCode}`}
            variant="Heading"
            fontWeight="Bold"
            alignment="right"
          />
        ) : null}
        {flightDate && (
          <TyfDatePicker
            value={flightDate}
            theme="Minimalist"
            onChange={setFlightDate}
          />
        )}
      </View>
    </FlightRequestCoverStyled>
  );
};

export default FlightRequestCoverLayout;
