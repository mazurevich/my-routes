"use client";
import { LatLng, LatLngExpression, LatLngTuple } from "leaflet";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Coords } from "@/app/types";
import { ElementRef, FC, useEffect, useRef, useState } from "react";
import { getLocation } from "@/app/utils/getLocation";

type MapProps = {
  defaultPosition: Coords;
  route?: LatLngTuple[];
};

export const Map: FC<MapProps> = ({ defaultPosition, route }) => {
  const defaultCoords = route
    ? {
        lat: route[0][0],
        lng: route[0][1],
      }
    : defaultPosition;
  const [position, setPosition] = useState<Coords>(defaultCoords);
  const mapRef = useRef<ElementRef<typeof MapContainer>>(null);
  useEffect(() => {
    if (route) return;

    getLocation().then(({ lat, lng }) => {
      setPosition({ lat, lng });
      mapRef.current?.panTo([lat, lng]);
    });
  }, []);

  return (
    <MapContainer
      ref={mapRef}
      center={[position.lat, position.lng]}
      zoom={13}
      scrollWheelZoom={false}
      className="w-[700px] h-[700px] overflow-hidden rounded-2xl shadow-2xl bg-slate-500"
    >
      {route ? (
        <Polyline pathOptions={{ color: "red" }} positions={route} />
      ) : null}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};
