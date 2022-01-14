import ReactMapGL, { Marker, NavigationControl, GeolocateControl } from 'react-map-gl';
import { useState } from 'react';

const Map = () => {
    const [viewport, setViewport] = useState({
        latitude: 55.6677734,
        longitude: 12.5539442,
        zoom: 14,
        width: "100vw",
        height: "50vh",
    });

    const navigationControlStyle = {
        right: 20,
        top: 60
    }

    const geolocateControlStyle = {
        right: 20,
        top: 20
    }

    return ( 
        <>
            <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
            onViewportChange={setViewport}
            mapStyle='mapbox://styles/mapbox/streets-v11'>
                <NavigationControl style={navigationControlStyle}/>
                <GeolocateControl style={geolocateControlStyle} 
                trackUserLocation={true}
                positionOptions={{enableHighAccuracy: true}}
                showAccuracyCircle={true}
                auto
                />
                <Marker latitude={55.6677734} longitude={12.5539442}>
                    <div style={{width: "1em", height: "1em", backgroundColor:"orange"}}></div>
                </Marker>
            </ReactMapGL>
        </>
     );
}
 
export default Map;