import * as React from "react";

import {
  Svg,
  Use,
  G,
  Defs,
  LinearGradient,
  Path,
  Mask,
  Stop,
} from "react-native-svg";

const OnBoardingFooter = (props) => {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox={`0 -101 375 443`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Defs>
        <LinearGradient x1="85.828%" y1="100%" x2="14.172%" y2="21.069%" id="b">
          <Stop stopColor="#420BE6" offset="0%" />
          <Stop stopColor="#A16BB3" offset="100%" />
        </LinearGradient>
        <LinearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="c">
          <Stop stopColor="#1E2033" stopOpacity={0} offset="0%" />
          <Stop stopColor="#1E2033" offset="100%" />
        </LinearGradient>
        <Path
          d="M375 443H0V93c60.633 26.667 122.51 40 185.633 40 1.122 0 2.245-.004 3.367-.013v-93C251 39.522 313 26.192 375 0v443z"
          id="a"
        />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Mask id="d" fill="#fff">
          <Use xlinkHref="#a" />
        </Mask>
        <Use fill="url(#b)" xlinkHref="#a" />
        <Path
          fill="url(#c)"
          opacity={0.1}
          Mask="url(#d)"
          d="M188-20h187v463H188z"
        />
      </G>
    </Svg>
  );
};

export default OnBoardingFooter;
