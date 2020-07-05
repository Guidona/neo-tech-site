import React from 'react';

import config from '../../config';

export default function Footer() {
  return (
    <header id="header">
      <h1>{config.heading}</h1>
      <p>{config.subHeading}</p>
      <p>
        If agriculture goes wrong, nothing else will have a chance to go right in the country and on the planet.
        At Neo-Tech Solutions, we understand that optimizing our food processes will need us to better understand our weather and how it affects our crops.
        Agriculture not only gives riches to a nation, but the only riches she can call her own.
        Agriculture is our wisest pursuit, because it will in the end contribute most to real wealth, good morals, and happiness.
      </p>
      <p>
        Seasonal and Sub-seasonal Forecasts help businesses minimize risk and maximize profits by planning for upcoming market shifts resulting from the weather in short- and long-term timeframes.
      </p>
    </header>
  );
}
