import React from "react";
import Image from "next/image";
import "./map-marker.scss";

export const MapMarkerComponent = ({ lat, lng }: any) => {
  return (
    <div className="marker z-3">
      <div className="img-warpper">
        <Image src={"/assets/images/marker.png"} alt={""} fill={true} />
      </div>
    </div>
  );
};
