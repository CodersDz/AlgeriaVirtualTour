import React, { useState, useEffect, useRef } from "react";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
import axios from "axios";
import {
  PageContainer,
  LocationContainer,
  MapContainer,
  LocationHiddenContainer,
  LocationHiddenImg,
  LocationHiddenTextContainer,
  LocationHiddenH4,
  LocationHiddenP,
} from "./MapElements";
import { motion } from "framer-motion";
import { MdLocationOn } from "react-icons/md";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LocationCard from "../../components/LocationCard/LocationCard";
const Location = () => {
  return <LocationContainer></LocationContainer>;
};

const Map = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [locations, setLocations] = useState([]);
  const mapRef = useRef();
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(10);
  useEffect(() => {
    axios
      .get("http://www.algeriavirtualtour.com/api/location")
      .then((response) => {
        setLocations(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <PageContainer>
      <Navbar />
      <MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBxr1HboDoiuuX8XAZOLXi_aVWxW3CcGd4" }}
          defaultCenter={{
            lat: 3,
            lng: 36,
          }}
          defaultZoom={12}
        >
          {locations.map((location) => {
            return (
              <LocationContainer
                lat={location.latitude}
                lng={location.longitude}
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
      </MapContainer>
      <Footer />
    </PageContainer>
  );
};

export default Map;
