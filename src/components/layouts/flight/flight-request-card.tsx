import TyfButton from '@/elements/tyf-button/tyf-button';
import TyfTypography from '@/elements/tyf-typography/tyf-typography';
import useNavigate from '@/hooks/use-navigate';
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
} from '@/styles/components/layouts/flight/flight-request-card';
import {CaretRight} from 'phosphor-react-native';
import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import FlightTimeTravelLayout from './flight-time-travel';

const FlightRequestCardLayout: FC<IFlightStatusCollection> = props => {
  const {segment, status} = props;
  const {onNavigateScreen} = useNavigate();

  const onNavigateFlightDetails = () => {
    onNavigateScreen('FlightDetailScreen', props);
  };

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
      <FlightTimeTravelLayout flight={props} styles={{borderBottomWidth: 1}} />
      <FlightRequestCardFooterStyled>
        <TyfTypography
          text={`${segment.marketingCarrier} ${segment.marketingFlightCode}`}
          fontWeight="Medium"
          alignment="right"
          variant="Small"
        />
        <TouchableOpacity onPress={onNavigateFlightDetails}>
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
