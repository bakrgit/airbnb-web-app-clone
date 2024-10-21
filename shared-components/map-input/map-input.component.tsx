"use client";

import { Control, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import "./map-input.scss";
import Image from "next/image";
import { MapMarkerComponent } from "@/shared-components/map-marker/map-marker.component";

interface MapInputProps {
  control: Control<any>;
  name: string;
  label?: string;
  required?: boolean;
  defaultLocation?: { lat: number; lng: number };
}

interface Location {
  lat: number;
  lng: number;
}

export const MapInputComponent = ({
  name,
  control,
  defaultLocation,
  label,
  required,
}: MapInputProps) => {
  const [location, setLocation] = useState<Location | undefined>(
    defaultLocation,
  );

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  return (
    <div className="add-map-warpper position-relative z-1">
      {label && (
        <label
          className={`add-map-label ${required ? "add-map-label--required" : ""}`}
        >
          {label}
        </label>
      )}
      <div className="add-map">
        <Controller
          name={name}
          control={control}
          defaultValue={defaultLocation ? defaultLocation : defaultProps.center}
          render={({ field: { onChange, value } }): any => (
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyC2snLzmV5C-7mxBxkJ3ZpFN4qjw8jC5sQ",
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              center={location ? location : defaultProps.center}
              onClick={({ lat, lng }) => {
                console.log(lat, lng);
                const newLocation: Location = { lat, lng };
                setLocation(newLocation);
                onChange(newLocation);
              }}
            >
              {location && (
                <MapMarkerComponent lat={location?.lat} lng={location?.lng} />
              )}
            </GoogleMapReact>
          )}
        />
      </div>
    </div>
  );
};
