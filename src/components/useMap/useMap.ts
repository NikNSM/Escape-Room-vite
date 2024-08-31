import { Map, TileLayer } from 'leaflet';
import { useState, useRef, useEffect, MutableRefObject } from 'react';

type TypeUseMapProps = {
  container: MutableRefObject<HTMLDivElement | null>;
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
};

const TITLE_LEAR_URL =
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const TITLE_LEAR_ATRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export default function useMap({container, center, zoom,}: TypeUseMapProps): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderRef = useRef(false);

  useEffect(() => {
    if (container.current !== null && !isRenderRef.current) {
      const newMap = new Map(container.current, {
        center,
        zoom,
      });

      const layer = new TileLayer(TITLE_LEAR_URL, {
        attribution: TITLE_LEAR_ATRIBUTION,
      });

      newMap.addLayer(layer);
      setMap(newMap);
      isRenderRef.current = true;
    }
  }, [container, center, zoom]);

  return map;
}
