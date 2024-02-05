import {TyfDatePickerThemeType} from '@/models/types/components/elements/tyf-date-picker';

export interface TyfDatePickerProps {
  value?: Date;
  theme?: TyfDatePickerThemeType;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: Date) => void;
}

export interface TyfDatePickerContentProps {
  value?: Date;
  placeholder: string;
  disabled?: boolean;
  onPress: () => void;
}
