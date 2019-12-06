import React from 'react';
import StyledNightmode from './styles/StyledNightmode';


const NightMode = ({nightModeCallback, nightMode}) => (
  <StyledNightmode>
    <span>Nightmode: </span>
    <label className="switch">
      <input checked={nightMode} onChange={nightModeCallback} />
      <span className="slider round" />
    </label>
  </StyledNightmode>
)

export default NightMode;
