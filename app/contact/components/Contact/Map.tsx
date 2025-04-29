"use client";
import React from "react";

const LocationMap = () => {
  // Location coordinates for Medagama (6M7X+JP)
  const latitude = 6.940775; 
  const longitude = 81.073235;
  
  // Add click handler to open Google Maps with "Rise Tech Village" search
  const handleMapClick = () => {
    window.open(`https://www.google.com/maps/search/Rise+Tech+Village/@${latitude},${longitude},15z`, '_blank');
  };

  return (
    <div className="relative w-full h-full cursor-pointer" onClick={handleMapClick}>
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.177742976403!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTYnMjYuOCJOIDgxwrAwNCcyMy42IkU!5e0!3m2!1sen!2sus!4v1654123456789!5m2!1sen!2sus`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Rise Tech Village Location"
        className="rounded-lg"
      ></iframe>
      <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-20 bg-white transition-opacity duration-200"></div>
    </div>
  );
};

export default LocationMap;
