import React from 'react';
import GreetingContainer from '../../containers/GreetingContainer';
import LogoutContainer from '../../containers/LogoutContainer';
// <GreetingContainer />
// <LogoutContainer />

const Title = () => (
  <div id="title-section">
    <p className="title">Kool Keyboards</p>
    <div id="title-user-status">
      <GreetingContainer />
      <LogoutContainer />
    </div>
  </div>
);

export default Title;
