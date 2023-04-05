import React, {useEffect, useState} from 'react';
import './App.css';
import Login from './Components/Login/Login';
import { getTokenFromUrl } from './Components/Login/spotify';

function App() {

  const [token, setToken] = useState(null);

    //run code on base of condn
    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = "";
        const _token= hash.access_token;

        if(_token){
            setToken(_token);
        }
        console.log("I have a token", token);

    },[]);

  return (
    <div className="App">
      {
        token ? (
          <h1>I am logged IN</h1>
        ) : (<Login/>)
      }
    
    </div>
  );
}

export default App;
