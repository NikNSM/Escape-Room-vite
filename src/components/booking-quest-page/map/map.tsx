import { useEffect, useRef } from 'react';
import useMap from '../../useMap/useMap';
import { InformationQuestBooking } from '../../../type/type';
import 'leaflet/dist/leaflet.css';
import { Icon, layerGroup, Marker } from 'leaflet';
import { useAppDispatch, useAppSelector } from '../../../utils';
import { changeActive } from '../../../store/booking-slice/booking-slice';

const activeMarkerUrl = '/img/svg/pin-active.svg';
const defaultMarkerUrl = '/img/svg/pin-default.svg';

const defaultMarkerIcon = new Icon({
  iconUrl: defaultMarkerUrl,
  iconAnchor: [20, 40],
  iconSize: [25, 40],
});

const activeMarkerIcon = new Icon({
  iconUrl: activeMarkerUrl,
  iconAnchor: [20, 40],
  iconSize: [25, 40],
});

type MapProps = {
  informationsBooking: InformationQuestBooking[];
}

export default function Map({ informationsBooking }: MapProps): JSX.Element {
  const activeId = useAppSelector((state) => state.booking.active);
  const dispatch = useAppDispatch();
  const container = useRef<HTMLDivElement | null>(null);
  const center = {
    lat: informationsBooking[0].location.coords[0],
    lng: informationsBooking[0].location.coords[1],
  };
  const map = useMap({ container, center, zoom: 10 });

  const address = informationsBooking.find((item) => item.id === activeId)?.location.address;
  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);


      informationsBooking.forEach((item) => {
        const marker = new Marker({
          lat: item.location.coords[0],
          lng: item.location.coords[1],
        });
        const onClick = () => {
          dispatch(changeActive(item.id));
        };

        marker.setIcon(item.id === activeId ? activeMarkerIcon : defaultMarkerIcon).addTo(markerLayer).on('click', onClick);
      });

      return () => {
        markerLayer.clearLayers();
      };
    }
  }, [map, informationsBooking, activeId, dispatch]);
  return (
    <div className="booking-map">
      <div className="map">
        <div className="map__container" ref={container}></div>
      </div>
      <p className="booking-map__address">Вы&nbsp;выбрали: {address}</p>
    </div>
  );
}
