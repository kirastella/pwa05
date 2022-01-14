import React, {useEffect} from 'react';
import './App.css';
import OneSignal from 'react-onesignal';
import Location from './components/Location';
import PWAPrompt from 'react-ios-pwa-prompt';
import Testlocalbase from './components/Testlocalbase';
import Map from './components/Map';
import { Link, Routes, Route } from 'react-router-dom';


function App() {
  
  useEffect(() => {
    OneSignal.init({
      appId: "83ef08d6-6c35-46ac-bf96-961cb844e95d",
    });
  }, []);



  return (
  
    <div className="App">

      <h1>Dette er min app</h1>
      
      <nav>
        <Link to="/">Home</Link>
        <Link to="/map">Map</Link>
        <Link to="/database">Database</Link>
        <Link to="/fnyf">Et ottende sted</Link>
      </nav>


      <Routes>
        <Route path="/" element={<Location />} />
        <Route path="map" element={<Map />} />
        <Route path="database" element={<Testlocalbase />} />
      </Routes>

    <footer>
      <p>Don't do it like this - do it right!</p>
    </footer>
    
    <PWAPrompt />
  </div>
  );
}

export default App;
