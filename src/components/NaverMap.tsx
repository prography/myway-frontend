import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Partner } from 'models/partner';

export type NaverMapProps = {
  placeList: Partner[];
  setPartner: (partnerData: Partner) => void;
};
const NaverMap: React.FC<NaverMapProps> = ({ placeList, setPartner }) => {
  const { naver } = window;

  const handleClickMarker = useCallback(
    (e) => {
      setPartner(e.overlay.title);
    },
    [setPartner],
  );

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

    placeList.length &&
      placeList.forEach((place) => {
        naver.maps.Event.addListener(
          new naver.maps.Marker({
            position: new naver.maps.LatLng(place.lat, place.lng),
            map,
            title: place,
          }),
          'click',
          handleClickMarker,
        );
      });

    return () => {
      placeList.length &&
        placeList.forEach((place) => {
          naver.maps.Event.removeListener(
            new naver.maps.Marker({
              position: new naver.maps.LatLng(place.lat, place.lng),
              map,
              title: place,
            }),
            'click',
            handleClickMarker,
          );
        });
    };
  }, [placeList, handleClickMarker, naver]);

  return <MapContainer id="map" />;
};

export default NaverMap;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;
