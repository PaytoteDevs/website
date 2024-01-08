import React, { useState } from 'react';
import SignIn from '../components/SignIn';

function MainStorePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <SignIn setIsAuthenticated={setIsAuthenticated} />
    </div>
  );
}

export default MainStorePage;
