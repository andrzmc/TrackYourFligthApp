import useNavigate from '@/hooks/use-navigate';
import {IFlightStatusCollection} from '@/models/interfaces/services/api/flight-status';
import {FlightDetailsCoverBackStyled} from '@/styles/components/layouts/flight/flight-details-cover';
import {ColorLightStyle, ColorPrimaryStyle} from '@/styles/global/colors';
import {flightDetailsCoverImageUtil} from '@/utils/components/layouts/flight/flight-details-cover';
import {CaretLeft} from 'phosphor-react-native';
import React, {FC} from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';

const FlightDetailsCoverLayout: FC<IFlightStatusCollection> = props => {
  const {segment} = props;

  const isDarkMode = useColorScheme() === 'dark';

  const {goBack} = useNavigate();

  return (
    <>
      <ImageBackground
        source={flightDetailsCoverImageUtil[segment.arrivalAirport]}
        resizeMode="cover"
        style={{height: Dimensions.get('screen').height}}>
        <SafeAreaView>
          <FlightDetailsCoverBackStyled
            style={{
              backgroundColor: isDarkMode ? ColorPrimaryStyle : ColorLightStyle,
            }}>
            <TouchableOpacity onPress={goBack}>
              <CaretLeft weight="regular" size={32} />
            </TouchableOpacity>
          </FlightDetailsCoverBackStyled>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default FlightDetailsCoverLayout;
