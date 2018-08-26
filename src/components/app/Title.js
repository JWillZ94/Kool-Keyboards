import React from 'react';
import GreetingContainer from '../../containers/GreetingContainer';
import LogoutContainer from '../../containers/LogoutContainer';
// <GreetingContainer />
// <LogoutContainer />

const Title = () => (
  <div>
    <p className="title">Kool Keyboards</p>
    <GreetingContainer />
    <LogoutContainer />
  </div>
);

export default Title;
