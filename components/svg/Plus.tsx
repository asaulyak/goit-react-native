import { View, ViewProps } from 'react-native';
import { SvgXml } from 'react-native-svg';

const iconXml = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12.5" cy="12.5" r="12" fill="white" stroke="#FF6C00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z" fill="#FF6C00"/>
</svg>
`;

export const PlusSvg = ({ style }: ViewProps) => {
  return (
    <View style={style}>
      <SvgXml xml={iconXml}></SvgXml>
    </View>
  );
};

