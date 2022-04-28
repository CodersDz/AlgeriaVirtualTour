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
  MapWrapper2,
  LocationContainer,
} from "./LocationCarousselMobileElements";
import { MdLocationOn } from "react-icons/md";
import Slider from "react-slick";
import { generalAPILink } from "../../../assets/Variables/Links";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { ReactComponent as VrIcone } from "../VrIcone.svg";
import getWilayaInformation from "../../../assets/utilities/getWilayaInformation";
import useTranslation from "../../../hooks/useTranslation/useTranslation";
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
  const { t } = useTranslation();
  const ref = useRef();
  const [location, setLocation] = useState({ images: [] });
  console.log(destination);
  const [images, setImages] = useState([]);
  const [lat, setLat] = useState(3);
  const [lng, setLng] = useState(36);
  const [largeImages, setLargeImages] = useState(false);
  const [wilaya, setWilaya] = useState({});
  useEffect(() => {
    setLocation(destination);
    if (destination.images) setImages(destination.images);
    if (destination.latitude) setLat(parseFloat(destination.latitude));
    if (destination.longitude) setLng(parseFloat(destination.longitude));
  }, [destination]);
  useEffect(() => {
    axios
      .get(`${generalAPILink}/wilaya/${wilayaId}`)
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
      <MobileCatégorie catégorieInformations={catégorieInformations} />
      <Wrapper>
        <ImagesContainer>
          <View360Btn href={location.visit_360}>
            <VrIcone />
          </View360Btn>
          <Slider adaptiveHeight={true} dots={true} className="sliderStyling">
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
          {/* <FullScreenBtn
            onClick={() => {
              setLargeImages(!largeImages);
            }}
          >
            <FullScreenIcone />
          </FullScreenBtn> */}
        </ImagesContainer>
        <ContentContainer>
          <LocationNameContainer>
            <LocationName>{location.translatedName}</LocationName>
            <LocationEmplacement>{wilaya.translatedName}</LocationEmplacement>
          </LocationNameContainer>
          <Hr />
          <AboutContainer>
            <AboutTitle>{t("CarousselPage.About")}</AboutTitle>
            <AboutP>{location.translatedDescription}</AboutP>
          </AboutContainer>
          <Hr />
          <GaleryContainer>
            <GaleryTitle>{t(`CarousselPage.Gallery`)}</GaleryTitle>
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
              <MapWrapper2>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyA4Q7LOeewLHfzIEbF8gU7nisjVlef8f40",
                  }}
                  defaultCenter={{
                    lat: lat,
                    lng: lng,
                  }}
                  center={{
                    lat: lat,
                    lng: lng,
                  }}
                  defaultZoom={12}
                  zoom={12}
                  options={options}
                >
                  <LocationContainer
                    key={`location-${location.id_location}`}
                    lat={location.latitude}
                    lng={location.longitude}
                  >
                    <MdLocationOn
                      size="56"
                      color="#4BCB02"
                      style={{
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </LocationContainer>
                </GoogleMapReact>
              </MapWrapper2>
              <GoToMapBtn
                to={`/map`}
                state={{ lat: location.latitude, lng: location.longitude }}
              >
                {t(`CarousselPage.OpenMap`)}
              </GoToMapBtn>
            </MapWrapper>
          </MapContainer>
        </ContentContainer>
      </Wrapper>
    </Container>
  );
};

export default LocationCarousselMobile;
