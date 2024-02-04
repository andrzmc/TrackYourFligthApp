import React, {FC} from 'react';
import {View} from 'react-native';
import TyfTypography from '../tyf-typography/tyf-typography';
import {Item} from 'react-native-picker-select';

const TyfSelectContent: FC<{item?: Item; placeholder: string}> = props => {
  const {item, placeholder} = props;

  return (
    <View>
      <TyfTypography
        text={placeholder}
        variant={item ? 'Small' : 'Paragraph'}
      />
      {item && (
        <>
          <TyfTypography
            text={item.inputLabel || item.label}
            fontWeight="Medium"
          />
        </>
      )}
    </View>
  );
};

export default TyfSelectContent;
