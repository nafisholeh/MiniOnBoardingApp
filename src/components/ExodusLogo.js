import * as React from "react";
import Svg, { Defs, LinearGradient, Stop, G, Path } from "react-native-svg";

const ExodusLogo = (props) => (
  <Svg width="16%" height={100} viewBox={`0 0 324 324`} {...props}>
    <Defs>
      <LinearGradient id="a" x1="0%" y1="50%" y2="50%">
        <Stop offset="0%" stopColor="#00BFFF" />
        <Stop offset="100%" stopColor="#6619FF" />
      </LinearGradient>
      <LinearGradient id="b" x1="0%" y1="50%" y2="50%">
        <Stop offset="0%" stopColor="#00BFFF" />
        <Stop offset="100%" stopColor="#287DFF" />
      </LinearGradient>
      <LinearGradient id="c" x1="0%" y1="50%" y2="50%">
        <Stop offset="0%" stopColor="#3B61FF" />
        <Stop offset="100%" stopColor="#6619FF" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path
        fill="url(#a)"
        d="M97.161 2.65 6.76 92.855a22.094 22.094 0 0 0-6.406 15.61v34.095l96.811-96.83 96.802 96.83v-34.095a22.094 22.094 0 0 0-6.402-15.61L97.158 2.654l.003-.004Z"
        transform="translate(64.8 181.44)"
      />
      <Path
        fill="url(#b)"
        d="M49.692 6.772A22.084 22.084 0 0 0 34.085.369H0L96.811 97.2 0 194.03h34.16a22.084 22.084 0 0 0 15.606-6.48l90.111-90.35L49.692 6.772Z"
        transform="translate(0 64.8)"
      />
      <Path
        fill="url(#c)"
        d="m45.674 97.2 96.811 96.83h-34.162a22.084 22.084 0 0 1-15.607-6.48L2.608 97.2 92.79 6.772A22.084 22.084 0 0 1 108.397.369h34.085L45.674 97.2Z"
        transform="translate(181.44 64.8)"
      />
      <Path
        fill="url(#a)"
        d="m97.161 139.91 90.406-90.205a22.094 22.094 0 0 0 6.402-15.61V0L97.161 96.83.35 0v34.095a22.094 22.094 0 0 0 6.409 15.61l90.402 90.201v.004Z"
        transform="translate(64.8)"
      />
    </G>
  </Svg>
);

export default ExodusLogo;
