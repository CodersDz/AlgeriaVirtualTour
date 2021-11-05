import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import {
  MapPageContainer,
  LocationContainer,
  LocationHiddenContainer,
  LocationHiddenImg,
  LocationHiddenTextContainer,
  LocationHiddenH4,
  LocationHiddenP,
} from "./MapElements";
import { motion } from "framer-motion";
import { MdLocationOn } from "react-icons/md";
import Navbar from "../../components/Navbar/Navbar";
import LocationCard from "../../components/LocationCard/LocationCard";
const Location = () => {
  return <LocationContainer></LocationContainer>;
};
const Locations = [
  {
    id: 1,
    lat: 59.955413,
    lng: 30.337844,
    LocationImg: "./Algerie.jpg",
    LocationName: "Alger",
    LocationDescription:
      "fslihfjpsie jfskbefisu hfseihfsiu fgsofij iseifugso fiehofishsefubsh",
  },
  {
    id: 2,
    lat: 59.956,
    lng: 30.338,
    LocationImg: "./Algerie.jpg",
    LocationName: "Alger",
    LocationDescription:
      "fslihfjpsie jfskbefisu hfseihfsiu fgsofij iseifugso fiehofishsefubsh",
  },
  {
    id: 3,
    lat: 59.9556,
    lng: 30.339,
    LocationImg: "./Algerie.jpg",
    LocationName: "Alger",
    LocationDescription:
      "fslihfjpsie jfskbefisu hfseihfsiu fgsofij iseifugso fiehofishsefubsh",
  },
  {
    id: 4,
    lat: 59.9557,
    lng: 30.337,
    LocationImg: "./Algerie.jpg",
    LocationName: "Alger",
    LocationDescription:
      "fslihfjpsie jfskbefisu hfseihfsiu fgsofij iseifugso fiehofishsefubsh",
  },
  {
    id: 5,
    lat: 59.9558,
    lng: 30.336,
    LocationImg: "./Algerie.jpg",
    LocationName: "Alger",
    LocationDescription:
      "fslihfjpsie jfskbefisu hfseihfsiu fgsofij iseifugso fiehofishsefubsh",
  },
  {
    id: 6,
    lat: 59.9559,
    lng: 30.335,
    LocationImg: "./Algerie.jpg",
    LocationName: "Alger",
    LocationDescription:
      "fslihfjpsie jfskbefisu hfseihfsiu fgsofij iseifugso fiehofishsefubsh",
  },
  {
    id: 7,
    lat: 59.9551,
    lng: 30.334,
    LocationImg: "./Algerie.jpg",
    LocationName: "Alger",
    LocationDescription:
      "fslihfjpsie jfskbefisu hfseihfsiu fgsofij iseifugso fiehofishsefubsh",
  },
  {
    id: 8,
    lat: 59.95511,
    lng: 30.333,
    LocationImg: "./Algerie.jpg",
    LocationName: "Alger",
    LocationDescription:
      "fslihfjpsie jfskbefisu hfseihfsiu fgsofij iseifugso fiehofishsefubsh",
  },
];
const Map = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const showDetails = (lat, lng) => {
    console.log(lat, lng);
  };
  return (
    <MapPageContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBxr1HboDoiuuX8XAZOLXi_aVWxW3CcGd4" }}
        defaultCenter={{
          lat: 59.955413,
          lng: 30.337844,
        }}
        defaultZoom={12}
      >
        {Locations.map((location) => {
          return (
            <LocationContainer
              lat={location.lat}
              lng={location.lng}
              onMouseOver={() => {
                setCurrentLocation(location.id);
                console.log(currentLocation);
              }}
              onMouseOut={() => {
                setCurrentLocation(null);
              }}
            >
              <MdLocationOn size="72" color="#006A79" />
              {currentLocation === location.id && (
                <LocationCard
                  as={motion.div}
                  initial={{ scale: 0 }}
                  animate={{ scale: 10 }}
                  location={location}
                />
              )}
            </LocationContainer>
          );
        })}
      </GoogleMapReact>
    </MapPageContainer>
  );
};

export default Map;
