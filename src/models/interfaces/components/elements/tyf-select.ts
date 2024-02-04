import {OptionsProps} from '../../global/options';

export interface TyfSelectProps {
  value?: string;
  options: OptionsProps[];
  placeholder?: string;
  onChange: (value?: string) => void;
}
