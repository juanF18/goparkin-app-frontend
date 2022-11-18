import L from "leaflet";

export function IconPinCreation(icon) {
  return L.icon({
    iconUrl: icon,
    iconRetinaUrl: icon,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    iconSize: [35, 35],
    className: "leaflet-venue-icon",
  });
}
