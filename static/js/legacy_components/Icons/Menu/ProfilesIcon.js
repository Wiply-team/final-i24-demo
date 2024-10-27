import React from "react";
import Svg from "./../Svg";

// ProfilesIcon :: Props -> React.Component
export default ({
  width = 25,
  height = 25,
  "aria-label": ariaLabel,
  className = "",
}) => (
  <Svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 40 40"
    aria-label={ariaLabel}
  >
    <path d="M40,5 L40,35.2442628 L0,35.2442628 L0,5 L40,5 Z M37.6501321,7.39898017 L2.34986792,7.39898017 L2.34986792,32.7083858 L37.6501321,32.7083858 L37.6501321,7.39898017 Z M27.9178886,25.3225806 L28.0223611,25.3304178 C28.4299478,25.3924116 28.7096774,25.8137029 28.7096774,26.2903226 C28.7096774,26.8066606 28.3813837,27.2580645 27.9178886,27.2580645 L27.9178886,27.2580645 L23.6950147,27.2580645 L23.5905422,27.2502273 C23.1829554,27.1882335 22.9032258,26.7669423 22.9032258,26.2903226 C22.9032258,25.7739846 23.2315196,25.3225806 23.6950147,25.3225806 L23.6950147,25.3225806 L27.9178886,25.3225806 Z M12.9032258,14.0322581 C14.9598538,14.0322581 16.6330645,15.7054688 16.6330645,17.7620968 C16.6330645,19.0359879 15.9909526,20.1625756 15.0135837,20.8357359 C15.9261341,21.15063 16.7625252,21.6708165 17.4652218,22.3734879 C18.6120671,23.5203807 19.2739923,25.0229828 19.3478975,26.632506 L19.3548387,26.9354839 L18.3467742,26.9354839 C18.3467742,23.9338962 15.9048135,21.4919355 12.9032258,21.4919355 C9.97484756,21.4919355 7.57913037,23.8162288 7.46400816,26.7168816 L7.45967742,26.9354839 L6.4516129,26.9354839 C6.4516129,25.2121976 7.12270665,23.5920615 8.34125504,22.3734879 C9.04395161,21.6708165 9.88034274,21.15063 10.7928931,20.8357359 C9.81549899,20.1625756 9.1733871,19.0359879 9.1733871,17.7620968 C9.1733871,15.7054688 10.8465978,14.0322581 12.9032258,14.0322581 Z M33.0322581,21.4516129 L33.1333603,21.4583203 C33.5625498,21.5158615 33.8709677,21.9359153 33.8709677,22.4193548 C33.8709677,22.939982 33.5132759,23.3870968 33.0322581,23.3870968 L33.0322581,23.3870968 L23.7419355,23.3870968 L23.6408333,23.3803893 C23.2116438,23.3228482 22.9032258,22.9027943 22.9032258,22.4193548 C22.9032258,21.8987277 23.2609176,21.4516129 23.7419355,21.4516129 L23.7419355,21.4516129 L33.0322581,21.4516129 Z M12.9032258,14.9539171 C11.3786226,14.9539171 10.1382488,16.1942652 10.1382488,17.718894 C10.1382488,19.2435228 11.3786226,20.483871 12.9032258,20.483871 C14.427829,20.483871 15.6682028,19.2435228 15.6682028,17.718894 C15.6682028,16.1942652 14.427829,14.9539171 12.9032258,14.9539171 Z M33.0322581,17.5806452 L33.1333603,17.5873526 C33.5625498,17.6448938 33.8709677,18.0649476 33.8709677,18.5483871 C33.8709677,19.0690142 33.5132759,19.516129 33.0322581,19.516129 L33.0322581,19.516129 L23.7419355,19.516129 L23.6408333,19.5094216 C23.2116438,19.4518804 22.9032258,19.0318266 22.9032258,18.5483871 C22.9032258,18.02776 23.2609176,17.5806452 23.7419355,17.5806452 L23.7419355,17.5806452 L33.0322581,17.5806452 Z M33.0322581,13.7096774 L33.1267478,13.7167102 C33.5593784,13.7817287 33.8709677,14.2888365 33.8709677,14.8729183 C33.8709677,15.4987203 33.5132759,16.0361592 33.0322581,16.0361592 L33.0322581,16.0361592 L23.7419355,16.0361592 L23.6474457,16.0291264 C23.2148151,15.9641079 22.9032258,15.4570001 22.9032258,14.8729183 C22.9032258,14.2471163 23.2609176,13.7096774 23.7419355,13.7096774 L23.7419355,13.7096774 L33.0322581,13.7096774 Z" />
  </Svg>
);