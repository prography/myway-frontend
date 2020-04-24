import React, { useEffect } from 'react';
import styled from 'styled-components';

declare global {
  interface Window {
    naver: any; 
  }
}

const Map = () => {
  const { naver } = window;
  
  useEffect(() => {
    const container = document.getElementById('map');
    const mapOptions = {
      center: new naver.maps.LatLng(37.4999894, 127.027699),
      zoom: 16,
      minZoom: 6,
      scaleControl: false,
      logoControl: false,
      mapDataControl: false,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: naver.maps.MapTypeControlStyle.BUTTON,
        position: naver.maps.Position.TOP_RIGHT,
      },
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT,
      },
    };

    const map = new naver.maps.Map(container, mapOptions);

    const marker = new naver.maps.Marker({
      position: mapOptions.center,
      map,
    });

    const handleClickMap = (e: any) => {
      marker.setPosition(e.coord);
    }
    naver.maps.Event.addListener(map, 'click', handleClickMap);

    return () => {
      naver.maps.Event.removeListener(map, 'click', handleClickMap);
    }
  }, []);

  return (
    <>
      <MapContainer id="map" />
    </>
  );
}

export default Map;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;
