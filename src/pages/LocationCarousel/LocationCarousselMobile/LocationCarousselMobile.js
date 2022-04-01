import React, { useState, useEffect, useRef } from "react";
import MobileCatégorie from "../../../components/MobileCatégorie/MobileCatégorie";
import axios from "axios";
import ScrollContainer from "react-indiana-drag-scroll";
import GoogleMapReact from "google-map-react";
import {
  Container,
  Wrapper,
  ImagesContainer,
  ContentContainer,
  SliderImage,
  View360Btn,
  FullScreenBtn,
  LocationNameContainer,
  LocationName,
  LocationEmplacement,
  Hr,
  AboutContainer,
  AboutTitle,
  AboutP,
  GaleryContainer,
  GaleryTitle,
  GaleryImagesContainer,
  GaleryImage,
  MapContainer,
  MapWrapper,
  GoToMapBtn,
} from "./LocationCarousselMobileElements";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { ReactComponent as VrIcone } from "../VrIcone.svg";
import { ReactComponent as FullScreenIcone } from "../FullScreenIcone.svg";
import getWilayaInformation from "../../../assets/utilities/getWilayaInformation";
const LocationCarousselMobile = ({
  catégorieInformations,
  wilayaId,
  destination,
}) => {
  let options = {
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
    keyboardShortcuts: false,
  };
  const ref = useRef();
  const [location, setLocation] = useState({ images: [] });
  console.log(destination);
  const [images, setImages] = useState([]);
  const [largeImages, setLargeImages] = useState(false);
  const [wilaya, setWilaya] = useState({});
  useEffect(() => {
    setLocation(destination);
    if (destination !== {}) setImages(destination.images);
    console.log(destination);
  }, [destination]);
  useEffect(() => {
    axios
      .get(`http://www.algeriavirtualtour.com/api/wilaya/${wilayaId}`)
      .then((response) => {
        let wilayaInformation = response.data.data;
        getWilayaInformation(wilayaInformation, setWilaya, false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [destination]);
  return (
    <Container>
      <MobileCatégorie
        catégorieInformations={catégorieInformations}
        wilayaId={wilayaId}
      />
      <Wrapper>
        <ImagesContainer>
          <View360Btn
            href={`http://www.algeriavirtualtour.com/api/uploads/tours/${location.visit_360}/index.htm`}
          >
            <VrIcone />
          </View360Btn>
          <Slider dots={true} className="sliderStyling">
            {images.map((image) => {
              return (
                <SliderImage
                  onClick={() => {
                    setLargeImages(!largeImages);
                  }}
                  src={image.url}
                  largeImages={largeImages}
                />
              );
            })}
          </Slider>
          <FullScreenBtn
            onClick={() => {
              setLargeImages(!largeImages);
            }}
          >
            <FullScreenIcone />
          </FullScreenBtn>
        </ImagesContainer>
        <ContentContainer>
          <LocationNameContainer>
            <LocationName>{location.translatedName}</LocationName>
            <LocationEmplacement>{wilaya.translatedName}</LocationEmplacement>
          </LocationNameContainer>
          <Hr />
          <AboutContainer>
            <AboutTitle>About</AboutTitle>
            <AboutP>{location.translatedDescription}</AboutP>
          </AboutContainer>
          <Hr />
          <GaleryContainer>
            <GaleryTitle>
              {catégorieInformations.catégorieName}'s Galery
            </GaleryTitle>
          </GaleryContainer>
          <GaleryImagesContainer>
            <ScrollContainer
              innerRef={ref}
              vertical="false"
              className="ScrollContainer"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "stretch",
                maxHeight: "100%",
                overflowX: "visible",
              }}
            >
              {images.map((image) => {
                return <GaleryImage src={image.url} />;
              })}
            </ScrollContainer>
          </GaleryImagesContainer>
          <MapContainer>
            <MapWrapper>
              <GoToMapBtn>Open in maps</GoToMapBtn>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyA4Q7LOeewLHfzIEbF8gU7nisjVlef8f40",
                }}
                defaultCenter={{
                  lat: 23,
                  lng: 6,
                }}
                defaultZoom={12}
                zoom={12}
                options={options}
              ></GoogleMapReact>
            </MapWrapper>
          </MapContainer>
        </ContentContainer>
      </Wrapper>
    </Container>
  );
};

export default LocationCarousselMobile;
