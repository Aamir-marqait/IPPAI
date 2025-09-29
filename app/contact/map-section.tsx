"use client";
import React from "react";

const MapSection = () => {
  return (
    <div className="w-screen max-h-80vh relative">
      <iframe
        width="100%"
        height="600"
        src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Diamond%20House,%202nd%20Floor,%2011,%20Primrose%20Road,%20Bengaluru%20-%20560025+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
        className="pointer-events-none"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div
        className="absolute inset-0 bg-transparent cursor-pointer"
        onClick={() =>
          window.open(
            "https://maps.google.com/maps?q=Diamond%20House,%202nd%20Floor,%2011,%20Primrose%20Road,%20Bengaluru%20-%20560025",
            "_blank"
          )
        }
        onWheel={(e) => e.preventDefault()}
      ></div>
    </div>
  );
};

export default MapSection;
