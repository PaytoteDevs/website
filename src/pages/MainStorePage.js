import React, { useState } from 'react';
import SignIn from '../components/SignIn';
import Authorize from '../components/Authorize';

function MainStorePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <SignIn setIsAuthenticated={setIsAuthenticated} />
      {isAuthenticated && (
        <div>
          <div> Hi! Click here to sign your store up on PayTote!</div>
          <Authorize />
        </div>
      )}
    </div>
  );
}

export default MainStorePage;
