const getLocationInformation = (locations, setLocations, many) => {
  let language = localStorage.getItem("language");
  const getInfo = (location) => {
    let info;
    switch (language) {
      case `"fr"`:
        info = { name: location.name, description: location.description };
        break;
      case `"ar"`:
        info = { name: location.name_ar, description: location.description_ar };
        break;
      case `"en"`:
        info = { name: location.name_en, description: location.description_en };
        break;
      default:
        info = { name: location.name, description: location.description };
        break;
    }
    return {
      name: location.name,
      name_ar: location.name_ar,
      name_en: location.name_en,
      description: location.description,
      description_ar: location.description_ar,
      description_en: location.description_en,
      id_location: location.id_location,
      longitude: location.longitude,
      latitude: location.latitude,
      added_date: location.added_date,
      visit_360: location.visit_360,
      shared_num: location.shared_num,
      cover_pic: location.cover_pic,
      id_wilaya: location.id_wilaya,
      id_type_location: location.id_type_location,
      visitedBy: location.visitedBy,
      pic_cover: location.pic_cover,
      images: location.images,
      originalName: location.name,
      translatedName: info.name,
      translatedDescription: info.description,
    };
  };
  let nonTranslatedLocations = locations;
  if (many) {
    let translatedLocations = [];
    for (let i = 0; i < nonTranslatedLocations.length; i++) {
      translatedLocations.push(getInfo(nonTranslatedLocations[i]));
    }
    setLocations(translatedLocations);
  } else {
    setLocations(getInfo(nonTranslatedLocations));
  }
};
export default getLocationInformation;
