import {TyfSelecStyled} from '@/styles/components/elements/tyf-select';
import {ColorLightStyle, ColorPrimaryStyle} from '@/styles/global/colors';
import React, {FC, useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import TyfSelectContent from './tyf-select-content';
import {TyfSelectProps} from '@/models/interfaces/components/elements/tyf-select';
import {OptionsProps} from '@/models/interfaces/global/options';

const TyfSelect: FC<TyfSelectProps> = props => {
  const isDarkMode = useColorScheme() === 'dark';

  const {value, placeholder, options, disabled, onChange} = props;

  const [isReady, setIsReady] = useState<boolean>();
  const [selectedOption, setSelectedOption] = useState<OptionsProps>();
  const [selectPlaceholder, setSelectPlaceholder] = useState<string>();

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  useEffect(() => {
    setIsReady(!!selectPlaceholder && !!selectPlaceholder && !!options);
  }, [selectedOption, selectPlaceholder, options]);

  const init = () => {
    defineSelectedOption();
    definePlaceholder();
  };

  const defineSelectedOption = () => {
    const data = options?.find(item => item.value === value);
    setSelectedOption(data);
  };

  const definePlaceholder = () => {
    setSelectPlaceholder(placeholder || 'Select an option');
  };

  return isReady ? (
    <TyfSelecStyled
      style={{borderColor: isDarkMode ? ColorLightStyle : ColorPrimaryStyle}}>
      <RNPickerSelect
        value={value}
        darkTheme={isDarkMode}
        placeholder={selectPlaceholder}
        onValueChange={onChange}
        fixAndroidTouchableBug={true}
        items={options.map(item => ({...item, key: item.value}))}
        disabled={typeof disabled !== 'undefined' ? disabled : false}>
        <TyfSelectContent
          item={selectedOption}
          placeholder={selectPlaceholder as string}
        />
      </RNPickerSelect>
    </TyfSelecStyled>
  ) : null;
};

export default TyfSelect;
