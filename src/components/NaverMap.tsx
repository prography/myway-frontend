import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { Partner } from 'models/partner';

export type NaverMapProps = {
  place: Partner[];
}
const NaverMap: FC<NaverMapProps> = ({ place }) => {
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

    const handleClickMarker = (e: any) => {
      console.log(e);
      console.log(e.overlay.title);
    }

    { place && place.map(m => {
      naver.maps.Event.addListener(
        new naver.maps.Marker({
          position: new naver.maps.LatLng(m.lat, m.lng),
          map,
          title: m,
        }), 'click', handleClickMarker);
      });
    }

    return () => {
      { place && place.map(m => {
        naver.maps.Event.removeListener(
          new naver.maps.Marker({
            position: new naver.maps.LatLng(m.lat, m.lng),
            map,
            title: m,
          }), 'click', handleClickMarker);
        });
      }
    }
  }, [place]);

  return (
    <MapContainer id="map" />
  );
}

export default NaverMap;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;
