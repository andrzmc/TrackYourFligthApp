import TyfButton from '@/elements/tyf-button/tyf-button';
import TyfTypography from '@/elements/tyf-typography/tyf-typography';
import useNavigate from '@/hooks/use-navigate';
import {
  IFlightStatus,
  IFlightColorStatus,
} from '@/models/enums/components/layouts/flight/flight-request-card';
import {IFlightStatusCollection} from '@/models/interfaces/services/api/flight-status';
import {
  FlightDetailsSwipUpContentStyled,
  FlightDetailsSwipUpHeaderStyled,
  FlightDetailsSwipUpStyled,
} from '@/styles/components/layouts/flight/flight-details-swip-up';
import moment from 'moment';
import React, {FC} from 'react';
import {Dimensions, View} from 'react-native';
import {SwipeablePanel} from 'rn-swipeable-panel';
import {SwipeablePanelProps} from 'rn-swipeable-panel/dist/Panel';
import FlightTimeTravelLayout from './flight-time-travel';

const FlightDetailsSwipUpLayout: FC<IFlightStatusCollection> = props => {
  const {segment, status, estimatedDepartureTime} = props;
  const {goBack} = useNavigate();

  const swipeableConfig: SwipeablePanelProps = {
    fullWidth: true,
    onClose: () => goBack(),
    smallPanelHeight: Dimensions.get('screen').height * 0.65,
    onlySmall: true,
    noBackgroundOpacity: true,
    allowTouchOutside: true,
    closeOnTouchOutside: true,
    isActive: true,
  };

  return (
    <SwipeablePanel {...swipeableConfig}>
      <FlightDetailsSwipUpStyled>
        <FlightDetailsSwipUpHeaderStyled style={{borderBottomWidth: 0.5}}>
          <View>
            <TyfTypography
              text={`${segment.marketingCarrier} ${segment.marketingFlightCode}`}
              fontWeight="Medium"
              variant="Subheading"
            />
            <TyfTypography
              text={moment(new Date(estimatedDepartureTime)).format(
                'dddd, MMM DD'
              )}
              fontWeight="Light"
            />
          </View>
          <View>
            <TyfButton
              text={IFlightStatus[status]}
              color={IFlightColorStatus[status]}
              styles={{padding: 8}}
              disabled
            />
          </View>
        </FlightDetailsSwipUpHeaderStyled>
        <FlightDetailsSwipUpContentStyled>
          <FlightTimeTravelLayout
            flight={props}
            styles={{borderBottomWidth: 0.3, paddingBottom: 16}}
          />
        </FlightDetailsSwipUpContentStyled>
      </FlightDetailsSwipUpStyled>
    </SwipeablePanel>
  );
};

export default FlightDetailsSwipUpLayout;
