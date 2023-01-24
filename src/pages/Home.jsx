import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';

const Home = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!authState || !authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      oktaAuth.getUser().then((info) => {
        setUserInfo(info);
        var oktaTokenrequest = window.oAppEnablementPosInstance_CST.createTokenRequest(authState.accessToken.accessToken, authState.idToken.idToken);
        console.log(oktaTokenrequest);
        window.oAppEnablementPosInstance_CST.pushOktaToken(
          'handleOktaLoginOk',
          'handleOktaLoginFailed',
          oktaTokenrequest
        );
        //oktaAuth.stop();
      }).catch((err) => {
        console.error(err);
      });
    }
  }, [authState, oktaAuth]); // Update if authState changes

	if (userInfo) {
		return (
			<div>
				<div>
					<p>You have successfuly sign in ....{userInfo.name}</p>
				</div>
			</div>
		);
	}


  
};

export default Home;
