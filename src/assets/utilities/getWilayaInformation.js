const getWilayaInformation = (wilayas, setWilayas, many) => {
  let language = localStorage.getItem("language");
  const getInfo = (wilaya) => {
    let info;
    switch (language) {
      case `"fr"`:
        info = { name: wilaya.name, description: wilaya.description };
        break;
      case `"ar"`:
        info = { name: wilaya.name_ar, description: wilaya.description_ar };
        break;
      case `"en"`:
        info = { name: wilaya.name_en, description: wilaya.description_en };
        break;
      default:
        info = { name: wilaya.name, description: wilaya.description };
        break;
    }

    return {
      name: wilaya.name,
      name_ar: wilaya.name_ar,
      name_en: wilaya.name_en,
      description: wilaya.description,
      description_ar: wilaya.description_ar,
      description_en: wilaya.description_en,
      id_wilaya: wilaya.id_wilaya,
      active: wilaya.active,
      pic_cover: wilaya.pic_cover,
      pic_map: wilaya.pic_map,
      position: wilaya.position,
      matricule: wilaya.matricule,
      translatedName: info.name,
      translatedDescription: info.description,
      latitude: wilaya.latitude,
      longitude: wilaya.longitude,
    };
  };
  let nonTranslatedWilayas = wilayas;
  if (many) {
    let translatedWilayas = [];
    for (let i = 0; i < nonTranslatedWilayas.length; i++) {
      translatedWilayas.push(getInfo(nonTranslatedWilayas[i]));
    }
    setWilayas(translatedWilayas);
  } else {
    setWilayas(getInfo(nonTranslatedWilayas));
  }
};
export default getWilayaInformation;
