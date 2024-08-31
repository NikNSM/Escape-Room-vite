import useMap from '../../useMap/useMap';
import { useEffect, useRef } from 'react';
import { COORDINATE_CONTACTS } from '../../../const';
import 'leaflet/dist/leaflet.css';
import { Icon, layerGroup, Marker } from 'leaflet';

const markerUrl = './public/img/svg/pin-default.svg';

const markerIcon = new Icon({
  iconUrl: markerUrl,
  iconAnchor: [20, 40],
  iconSize: [25, 40],
});

export default function Map(): JSX.Element {
  const container = useRef<HTMLDivElement | null>(null);
  const map = useMap({ container, center: COORDINATE_CONTACTS, zoom: 15 });


  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      const marker = new Marker(COORDINATE_CONTACTS);
      marker.setIcon(markerIcon).addTo(markerLayer);
    }
  }, [map]);


  return (
    <div className="contacts__map">
      <div className="map">
        <div className="map__container" ref={container}></div>
      </div>
    </div>
  );
}
