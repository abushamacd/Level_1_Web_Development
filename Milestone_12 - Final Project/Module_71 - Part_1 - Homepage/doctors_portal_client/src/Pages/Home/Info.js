import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 px-6">
      <InfoCard img={clock} />
      <InfoCard img={marker} />
      <InfoCard img={phone} />
    </div>
  );
};

export default Info;
