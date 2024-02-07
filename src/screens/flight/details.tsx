import TyfTypography from '@/elements/tyf-typography/tyf-typography';
import useNavigate from '@/hooks/use-navigate';
import React, {useEffect, useState} from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import {SwipeablePanel} from 'rn-swipeable-panel';

const FlightDetailScreen = () => {
  const {getScreenParams} = useNavigate();

  const [isPanelActive, setIsPanelActive] = useState(false);

  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };

  useEffect(() => {
    console.log(getScreenParams());
  }, [getScreenParams]);

  return (
    <View>
      <ImageBackground
        source={require('@/images/MEX.png')}
        resizeMode="cover"
        style={{width: '100%', height: 350}}
      />
      <TouchableOpacity onPress={openPanel}>
        <TyfTypography text="FlightDetailScreen" />
      </TouchableOpacity>
      <SwipeablePanel
        fullWidth={true}
        openLarge={true}
        showCloseButton
        smallPanelHeight={350}
        onClose={closePanel}
        isActive={isPanelActive}>
        <TyfTypography text="MY PANEL" />
      </SwipeablePanel>
    </View>
  );
};

export default FlightDetailScreen;
