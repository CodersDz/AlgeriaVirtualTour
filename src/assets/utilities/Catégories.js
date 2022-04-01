//Map Images catégories imports
import Art_Culture from "../Images/CatégoriesMapImages/Art&Culture.png";
import Hôtel from "../Images/CatégoriesMapImages/Hôtel.png";
import Park_Loisirs from "../Images/CatégoriesMapImages/Park&Loisirs.png";
import Monument from "../Images/CatégoriesMapImages/Monument.png";
import Mosque from "../Images/CatégoriesMapImages/Mosque.png";
import Shopping from "../Images/CatégoriesMapImages/Shopping.png";
import Service from "../Images/CatégoriesMapImages/Service.png";
import Directories from "../Images/CatégoriesMapImages/Directories.png";
import Museum from "../Images/CatégoriesMapImages/Museum.png";
import Restaurant from "../Images/CatégoriesMapImages/Restaurant.png";
//BgImages Imports
import Bg_Art_Culture from "../Images/SearchImages/Art&Culture.jpg";
import Bg_Hôtel from "../Images/SearchImages/Hôtel.jpg";
import Bg_Park_Loisirs from "../Images/SearchImages/Park&Loisirs.jpg";
import Bg_Monument from "../Images/SearchImages/Monument.jpg";
import Bg_Mosque from "../Images/SearchImages/Mosque.jpg";
import Bg_Shopping from "../Images/SearchImages/Shopping.jpg";
import Bg_Service from "../Images/SearchImages/Service.jpg";
import Bg_Directories from "../Images/SearchImages/Directories.jpg";
import Bg_Museum from "../Images/SearchImages/Museum.jpg";
import Bg_Restaurant from "../Images/SearchImages/Restaurant.jpg";
//IconesCatégories Imports
import AnnuaireIcone from "../svg/IconeCatégorieSvg/AnnuaireIcone.svg";
import Art_CultureIcone from "../svg/IconeCatégorieSvg/ArtIcone.svg";
import HotelIcone from "../svg/IconeCatégorieSvg/HotelIcone.svg";
import Park_LoisirsIcone from "../svg/IconeCatégorieSvg/LoisirsIcone.svg";
import MonumentIcone from "../svg/IconeCatégorieSvg/MonumentIcone.svg";
import MosqueIcone from "../svg/IconeCatégorieSvg/MosqueIcone.svg";
import MusuemIcone from "../svg/IconeCatégorieSvg/MusuemIcone.svg";
import RestaurantIcone from "../svg/IconeCatégorieSvg/RestaurantIcone.svg";
import ServicesIcone from "../svg/IconeCatégorieSvg/ServicesIcone.svg";
import ShoppingIcone from "../svg/IconeCatégorieSvg/ShoppingIcone.svg";
//utilities imports
const Catégories = [
  {
    catégorieName: "Art&Culture",
    bgImageCatégorie: Bg_Art_Culture,
    mapImageCatégorie: Art_Culture,
    idCatégorie: 8,
    icone: Art_CultureIcone,
    catégorieSearchUrl: "/Search/Art&Culture",
  },
  {
    catégorieName: "Hôtel",
    bgImageCatégorie: Bg_Hôtel,
    mapImageCatégorie: Hôtel,
    idCatégorie: 5,
    icone: HotelIcone,
    catégorieSearchUrl: "/Search/Hôtel",
  },
  {
    catégorieName: "Park&Loisirs",
    bgImageCatégorie: Bg_Park_Loisirs,
    mapImageCatégorie: Park_Loisirs,
    idCatégorie: 4,
    icone: Park_LoisirsIcone,
    catégorieSearchUrl: "/Search/Park&Loisirs",
  },
  {
    catégorieName: "Monument",
    bgImageCatégorie: Bg_Monument,
    mapImageCatégorie: Monument,
    idCatégorie: 6,
    icone: MonumentIcone,
    catégorieSearchUrl: "/Search/Monument",
  },
  {
    catégorieName: "Mosque",
    bgImageCatégorie: Bg_Mosque,
    mapImageCatégorie: Mosque,
    idCatégorie: 1,
    icone: MosqueIcone,
    catégorieSearchUrl: "/Search/Mosque",
  },
  {
    catégorieName: "Shopping",
    bgImageCatégorie: Bg_Shopping,
    mapImageCatégorie: Shopping,
    idCatégorie: 10,
    icone: ShoppingIcone,
    catégorieSearchUrl: "/Search/Shopping",
  },
  {
    catégorieName: "Service",
    bgImageCatégorie: Bg_Service,
    mapImageCatégorie: Service,
    idCatégorie: 9,
    icone: ServicesIcone,
    catégorieSearchUrl: "/Search/Service",
  },
  {
    catégorieName: "Directories",
    bgImageCatégorie: Bg_Directories,
    mapImageCatégorie: Directories,
    idCatégorie: 2,
    icone: AnnuaireIcone,
    catégorieSearchUrl: "/Search/Directories",
  },
  {
    catégorieName: "Museum",
    bgImageCatégorie: Bg_Museum,
    mapImageCatégorie: Museum,
    idCatégorie: 7,
    icone: MusuemIcone,
    catégorieSearchUrl: "/Search/Museum",
  },
  {
    catégorieName: "Restaurant",
    bgImageCatégorie: Bg_Restaurant,
    mapImageCatégorie: Restaurant,
    idCatégorie: 3,
    icone: RestaurantIcone,
    catégorieSearchUrl: "/Search/Restaurant",
  },
];
export default Catégories;
