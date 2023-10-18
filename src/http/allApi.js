import { $host } from ".";

// news-api
export const fetchNews = async () => {
  const { data } = await $host.get("api/news");
  return data;
};

export const deleteNews = async (id) => {
  const { data } = await $host.delete("api/news/" + id);
  return data;
};

export const addNews = async (formData) => {
  const { data } = await $host.post("api/news/", formData);
  return data;
};

// galery-api
export const fetchGalery = async () => {
  const { data } = await $host.get("api/galery");
  return data;
};

export const deleteGalery = async (id) => {
  const { data } = await $host.delete("api/galery/" + id);
  return data;
};

export const addGalery = async (formData) => {
  const { data } = await $host.post("api/galery/", formData);
  return data;
};

// marketing-contacts-api
export const fetchMarketingContacts = async () => {
  const { data } = await $host.get("api/marketingContacts");
  return data;
};

export const deleteMarketingContacts = async (id) => {
  const { data } = await $host.delete("api/marketingContacts/" + id);
  return data;
};

export const addMarketingContacts = async (formData) => {
  const { data } = await $host.post("api/marketingContacts/", formData);
  return data;
};

// director-contacts-api
export const fetchDirectorContacts = async () => {
  const { data } = await $host.get("api/directorContacts");
  return data;
};

export const deleteDirectorContacts = async (id) => {
  const { data } = await $host.delete("api/directorContacts/" + id);
  return data;
};

export const addDirectorContacts = async (formData) => {
  const { data } = await $host.post("api/directorContacts/", formData);
  return data;
};

// director-photo-contacts-api
export const fetchDirectorPhotoContacts = async () => {
  const { data } = await $host.get("api/directorPhotoContacts");
  return data;
};

export const deleteDirectorPhotoContacts = async (id) => {
  const { data } = await $host.delete("api/directorPhotoContacts/" + id);
  return data;
};

export const addDirectorPhotoContacts = async (formData) => {
  const { data } = await $host.post("api/directorPhotoContacts/", formData);
  return data;
};

// reporting and reporting-Links api
export const fetchReporting = async () => {
  const { data } = await $host.get("api/reporting");
  return data;
};

export const deleteReporting = async (id) => {
  const { data } = await $host.delete("api/reporting/" + id);
  return data;
};

export const addReporting = async (formData) => {
  const { data } = await $host.post("api/reporting/", formData);
  return data;
};

export const addReportingLink = async (formData, id) => {
  const { data } = await $host.post("api/reporting/addLink/" + id, formData);
  return data;
};

export const deleteReportingLink = async (id) => {
  const { data } = await $host.delete("api/reporting/deleteLink/" + id);
  return data;
};

// Items-api
export const fetchItems = async () => {
  const { data } = await $host.get("api/items");
  return data;
};

export const deleteItems = async (id) => {
  const { data } = await $host.delete("api/items/" + id);
  return data;
};

export const addItems = async (formData) => {
  const { data } = await $host.post("api/items/", formData);
  return data;
};

// Category-api
export const fetchCategory = async () => {
  const { data } = await $host.get("api/items");
  return data;
};

export const deleteCategory = async (id) => {
  const { data } = await $host.delete("api/category/" + id);
  return data;
};

export const addCategory = async (formData, id) => {
  const { data } = await $host.post("api/category/" + id, formData);
  return data;
};

export const addTableCharacteristics = async (formData, id) => {
  const { data } = await $host.post(
    "api/category/addTableCharacteristics/" + id,
    formData
  );
  return data;
};

export const deleteTableCharacteristics = async (id) => {
  const { data } = await $host.delete(
    "api/category/deleteTableCharacteristics/" + id
  );
  return data;
};

export const addCharacteristics = async (formData, id) => {
  const { data } = await $host.post(
    "api/category/addCharacteristics/" + id,
    formData
  );
  return data;
};

export const deleteCharacteristics = async (id) => {
  const { data } = await $host.delete(
    "api/category/deleteCharacteristics/" + id
  );
  return data;
};
