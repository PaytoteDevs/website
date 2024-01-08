import React from 'react'
import SignIn from '../components/SignIn'
import Authorize from '../components/Authorize';

const MainStorePage = () => {

  return (
    <div>
        <SignIn />
        <div>
            <div> Hi! Click here to sign your store up on PayTote!</div>
            <Authorize/>
        </div>

    </div>
  )
}

export default MainStorePage