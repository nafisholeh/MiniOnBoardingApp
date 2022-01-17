import React, { useMemo } from "react";
import { useWindowDimensions } from "react-native";
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  G,
  Use,
} from "react-native-svg";

import { isTablet } from "#utils/screen";

const SvgComponent = (props) => {
  const { height, width } = useWindowDimensions();
  const isTablets = useMemo(() => isTablet(width, height), [width, height]);

  return (
    <Svg
      width="70%"
      height={isTablets ? 385 : 273}
      viewBox={`0 0 275 273`}
      {...props}
    >
      <Defs>
        <LinearGradient x1="-19.299%" y1="-25.348%" x2="50%" y2="50%" id="c">
          <Stop stopColor="#3D3F59" offset="0%" />
          <Stop stopColor="#1F2033" offset="100%" />
        </LinearGradient>
        <Path
          d="M95.633 0C128.755 0 161.878 3.671 195 11.014v172.972C161.878 191.33 128.755 195 95.633 195 63.432 195 31.554 191.53 0 184.59V10.41C31.554 3.47 63.432 0 95.633 0z"
          id="b"
        />
      </Defs>
      <G transform="translate(40 19)" fill="none" fillRule="evenodd">
        <Use fill="#000" filter="url(#a)" xlinkHref="#b" />
        <Use fill="url(#c)" xlinkHref="#b" />
      </G>
    </Svg>
  );
};

export default SvgComponent;
