"use client";
import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Coords } from "@/app/types";
import { ElementRef, FC, useEffect, useRef, useState } from "react";
import { getLocation } from "@/app/utils/getLocation";

type MapProps = {
  defaultPosition: Coords;
};

export const Map: FC<MapProps> = ({ defaultPosition }) => {
  const [position, setPosition] = useState<Coords>({
    lat: 50,
    lng: 27,
  });
  const mapRef = useRef<ElementRef<typeof MapContainer>>(null);
  useEffect(() => {
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
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}></Marker>
    </MapContainer>
  );
};
