import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import ScrollContainer from "react-indiana-drag-scroll";
import ContentLoader from "react-content-loader";
import {
  WilayaPageContainer,
  WilayaPageContentContainer,
  LeftContainer,
  RightContainer,
  InfoLeftContainer,
  InfoLeftContainerContent,
  InfoH1,
  InfoP,
  InfoRightContainer,
  SvgInfoImg,
  RightWilayaNav,
  RightNavLi,
  DiscoverLeftContainer,
  DiscoverLeftContainerContent,
  DiscoverRightContainer,
  DiscoverH1,
  DiscoverCatégoriesContainer,
  DiscoverCatégoriesLi,
  DestinationLeftContainer,
  DestinationRightContainer,
  DestinationH1,
  DestinationNameContainer,
  DestinationLi,
  DestinationImgDiv,
  DestinationImg,
  DestinationTextContainer,
  DestinationName,
  DestinationDescription,
  SvgDestinationImg,
  RightNavHr,
  Pub,
  ThreePointContainer,
  sideBarDestinationLi,
} from "./WilayaElements";
import {
  ImgLoader,
  TextContainerLoader,
  NameLoader,
  DescriptionLoader,
} from "./WilayaElements";
import { ReadMoreBtn } from "../../GlobalStyles";
import { AiOutlineEllipsis, AiOutlineHeart } from "react-icons/ai";
import Navbar from "../../components/Navbar/Navbar";
import { AnimateSharedLayout, motion } from "framer-motion";
import useTranslation from "../../hooks/useTranslation/useTranslation";
import "./WilayaStyles.css";
import { ReactComponent as Position } from "./Svg/Position.svg";
import { useLocalStorage } from "../../hooks/useStorage";
import axios from "axios";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const BtnVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
};
const Wilaya = (props) => {
  const { wilayaname } = useParams();
  const [locations, setLocations] = useState([]);
  const [wilaya, setWilaya] = useState({});
  useEffect(() => {
    axios
      .get("http://www.algeriavirtualtour.com/api/location")
      .then((response) => {
        console.log(response.data.data);
        setLocations(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    if (props.location.state) {
      setWilaya(props.location.state.wilaya);
    } else {
      axios
        .get(`http://www.algeriavirtualtour.com/api/wilaya?name=${wilayaname}`)
        .then((response) => {
          console.log(response.data.data);
          setWilaya(response.data.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  const [readMore, setReadMore] = useState(false);
  const [banners, setBanners] = useLocalStorage("banners", {});
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  const Catégories = [
    {
      CatégorieName: t("SearchPage.Card.Art_Culture"),
    },
    {
      CatégorieName: t("SearchPage.Card.Hôtel"),
    },
    {
      CatégorieName: t("SearchPage.Card.Loisirs"),
    },
    {
      CatégorieName: t("SearchPage.Card.Monument"),
    },
    {
      CatégorieName: t("SearchPage.Card.Mosque"),
    },
    {
      CatégorieName: t("SearchPage.Card.Shopping"),
    },
    {
      CatégorieName: t("SearchPage.Card.Service"),
    },
    {
      CatégorieName: t("SearchPage.Card.Park"),
    },
    {
      CatégorieName: t("SearchPage.Card.Museum"),
    },
    {
      CatégorieName: t("SearchPage.Card.Restaurant"),
    },
  ];

  const loaderArray = [1, 2, 3, 4];
  const [currentSection, setCurrentSection] = useState("Info");
  const [CurrentDiscoverOption, setCurrentDiscoverOption] =
    useState(wilayaname);
  const history = useHistory();
  const goToLocation = (destination) => {
    history.push({
      pathname: `/location/${destination.name}`,
      state: { destination: destination },
    });
  };
  const DisplayLoader = () => {
    return (
      <ScrollContainer
        hideScrollbars="false"
        className="ScrollContainer"
        horizontal="false"
      >
        {loaderArray.map(() => {
          return (
            <DestinationLi>
              <ImgLoader>
                <ContentLoader
                  speed={2}
                  backgroundColor="grey"
                  foregroundColor="#fff"
                  style={{ width: "100%", height: "100%" }}
                >
                  <rect x="0" y="0" rx="0" ry="0" width="1000" height="1000" />
                </ContentLoader>
              </ImgLoader>
              <DestinationTextContainer>
                <NameLoader>
                  <ContentLoader
                    speed={2}
                    backgroundColor="grey"
                    foregroundColor="#fff"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <rect
                      x="0"
                      y="0"
                      rx="0"
                      ry="0"
                      width="1000"
                      height="1000"
                    />
                  </ContentLoader>
                </NameLoader>
                <DescriptionLoader>
                  <ContentLoader
                    speed={2}
                    backgroundColor="grey"
                    foregroundColor="#fff"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <rect
                      x="0"
                      y="0"
                      rx="0"
                      ry="0"
                      width="1000"
                      height="1000"
                    />
                  </ContentLoader>
                </DescriptionLoader>
              </DestinationTextContainer>
            </DestinationLi>
          );
        })}
      </ScrollContainer>
    );
  };

  const ChangeLeft = () => {
    if (currentSection === "Info") {
      return (
        <InfoLeftContainer>
          <InfoLeftContainerContent>
            <InfoH1 as={motion.h1} layoutId={"h1"}>
              {wilaya.name}
            </InfoH1>
            <InfoP as={motion.p} readMore={readMore}>
              {wilaya.description}
            </InfoP>
            )
            <ReadMoreBtn
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              {!readMore && (
                <motion.span
                  variants={BtnVariants}
                  initial="initial"
                  animate="animate"
                >
                  Lire La suite
                </motion.span>
              )}
              {readMore && (
                <motion.span
                  variants={BtnVariants}
                  initial="initial"
                  animate="animate"
                >
                  Moins
                </motion.span>
              )}
            </ReadMoreBtn>
          </InfoLeftContainerContent>
        </InfoLeftContainer>
      );
    } else if (currentSection === "Discover") {
      return (
        <DiscoverLeftContainer>
          <DiscoverLeftContainerContent>
            <DiscoverH1 as={motion.h1} layoutId={"h1"}>
              {wilayaname}
            </DiscoverH1>
            <DiscoverCatégoriesContainer
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1.5 } }}
            >
              {Catégories.map((categorie) => {
                return (
                  <DiscoverCatégoriesLi
                    as={motion.li}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => {
                      setCurrentDiscoverOption(categorie.CatégorieName);
                      setCurrentSection("Destination");
                    }}
                  >
                    {categorie.CatégorieName}
                  </DiscoverCatégoriesLi>
                );
              })}
            </DiscoverCatégoriesContainer>
          </DiscoverLeftContainerContent>
        </DiscoverLeftContainer>
      );
    } else if (currentSection === "Destination") {
      if (locations) {
        return (
          <DestinationLeftContainer>
            <DestinationH1 as={motion.h1} layoutId={"h1"}>
              {CurrentDiscoverOption}
            </DestinationH1>

            <ScrollContainer
              hideScrollbars="false"
              className="ScrollContainer"
              horizontal="false"
            >
              {locations.map((destination) => {
                return (
                  <DestinationLi
                    as={motion.li}
                    onClick={() => {
                      goToLocation(destination);
                    }}
                  >
                    <DestinationImgDiv>
                      <DestinationImg src={destination.cover_pic} />
                    </DestinationImgDiv>
                    <DestinationTextContainer>
                      <DestinationNameContainer>
                        <Position />
                        <DestinationName>{destination.name}</DestinationName>
                      </DestinationNameContainer>
                      <DestinationDescription>
                        {destination.description}
                      </DestinationDescription>
                    </DestinationTextContainer>
                    <ThreePointContainer>
                      <AiOutlineEllipsis size="36" />
                      <sideBarDestinationLi>
                        <AiOutlineHeart />
                      </sideBarDestinationLi>
                    </ThreePointContainer>
                  </DestinationLi>
                );
              })}
            </ScrollContainer>
          </DestinationLeftContainer>
        );
      } else return <DisplayLoader />;
    } else return null;
  };
  const ChangeRight = () => {
    if (currentSection === "Info") {
      return (
        <InfoRightContainer>
          <SvgInfoImg
            as={motion.img}
            src={require(`./Svg/Ghardaïa/Ghardaïa.svg`).default}
          />
        </InfoRightContainer>
      );
    } else if (currentSection === "Discover") {
      return (
        <DiscoverRightContainer>
          <SvgInfoImg
            as={motion.img}
            layoutId={"SvgImg"}
            animate={{ scale: 0.9 }}
            src={require(`./Svg/Ghardaïa/Ghardaïa.svg`).default}
          />
        </DiscoverRightContainer>
      );
    } else if (currentSection === "Destination") {
      return (
        <DestinationRightContainer>
          <SvgDestinationImg
            as={motion.img}
            layoutId={"SvgImg"}
            animate={{ scale: 1.1 }}
            src={require(`./Svg/Ghardaïa/Ghardaïa.svg`).default}
          />
        </DestinationRightContainer>
      );
    } else return null;
  };
  console.log(wilayaname);
  return (
    <WilayaPageContainer
      bg={wilaya.pic_cover}
      as={motion.div}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <AnimateSharedLayout>
        <WilayaPageContentContainer>
          <LeftContainer currentSection={currentSection}>
            <ChangeLeft />
          </LeftContainer>
          <RightContainer>
            <ChangeRight />
            <Pub src={banners.banner_location} />
          </RightContainer>
        </WilayaPageContentContainer>
      </AnimateSharedLayout>
      <RightWilayaNav>
        <RightNavLi
          onClick={() => {
            setCurrentSection("Destination");
          }}
        >
          Déstination
          {currentSection === "Destination" ? (
            <RightNavHr as={motion.div} layoutId={"hr"} />
          ) : null}
        </RightNavLi>
        <RightNavLi
          onClick={() => {
            setCurrentSection("Info");
            setCurrentDiscoverOption(wilayaname);
          }}
        >
          Plus D'info
          {currentSection === "Info" ? (
            <RightNavHr as={motion.div} layoutId={"hr"} />
          ) : null}
        </RightNavLi>
        <RightNavLi
          onClick={() => {
            setCurrentSection("Discover");
            setCurrentDiscoverOption(wilayaname);
          }}
        >
          Découvrir
          {currentSection === "Discover" ? (
            <RightNavHr as={motion.div} layoutId={"hr"} />
          ) : null}
        </RightNavLi>
      </RightWilayaNav>
    </WilayaPageContainer>
  );
};

export default Wilaya;
