<<<<<<< HEAD
import { $host, $authHost } from ".";
import jwtDecode from "jwt-decode";

// news-api
export const fetchNews = async () => {
  try {
    const { data } = await $host.get("api/news");
    return data;
  } catch (error) {
    return { error: error.message || "Error fetching news" };
  }
};
export const fetchOneNews = async (id) => {
  try {
    const { data } = await $host.get("api/news/" + id);
    return data;
  } catch (error) {
    return { error: error.message || "Error fetching news" };
  }
};

export const deleteNews = async (id) => {
  try {
    const { data } = await $host.delete("api/news/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return data;
  } catch (error) {
    return {
      error: `Error deleting news item with id ${id}: ${error.message}`,
    };
  }
};

export const addNews = async (formData) => {
  try {
    const { data } = await $host.post("api/news/", formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return data;
  } catch (error) {
    return { error: error.message || "Error adding news" };
  }
=======
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
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
};

// galery-api
export const fetchGalery = async () => {
<<<<<<< HEAD
  try {
    const { data } = await $host.get("api/galery");
    return data;
  } catch (error) {
    return { error: error.message || "Ошибка подключения" };
  }
};

export const deleteGalery = async (id) => {
  try {
    const { data } = await $host.delete("api/galery/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return data;
  } catch (error) {
    return {
      error: `Error deleting gallery item with id ${id}: ${error.message}`,
    };
  }
};

export const addGalery = async (formData) => {
  try {
    const { data } = await $host.post("api/galery/", formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return data;
  } catch (error) {
    return { error: error.message || "Error adding gallery item" };
  }
=======
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
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
};

// marketing-contacts-api
export const fetchMarketingContacts = async () => {
<<<<<<< HEAD
  try {
    const { data } = await $host.get("api/marketingContacts");
    return data;
  } catch (error) {
    return { error: error.message || "Error fetching marketing contacts" };
  }
};

export const deleteMarketingContacts = async (id) => {
  try {
    const { data } = await $host.delete("api/marketingContacts/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return data;
  } catch (error) {
    return {
      error: `Error deleting marketing contact with id ${id}: ${error.message}`,
    };
  }
};

export const addMarketingContacts = async (formData) => {
  try {
    const { data } = await $host.post("api/marketingContacts/", formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return data;
  } catch (error) {
    return { error: error.message || "Error adding marketing contact" };
  }
=======
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
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
};

// director-contacts-api
export const fetchDirectorContacts = async () => {
<<<<<<< HEAD
  try {
    const { data } = await $host.get("api/directorContacts");
    return data;
  } catch (error) {
    return { error: error.message || "Error fetching director contacts" };
  }
};

export const deleteDirectorContacts = async (id) => {
  try {
    const { data } = await $host.delete("api/directorContacts/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return data;
  } catch (error) {
    return {
      error: `Error deleting director contact with id ${id}: ${error.message}`,
    };
  }
};

export const addDirectorContacts = async (formData) => {
  try {
    const { data } = await $host.post("api/directorContacts/", formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return data;
  } catch (error) {
    return { error: error.message || "Error adding director contact" };
  }
=======
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
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
};

// director-photo-contacts-api
export const fetchDirectorPhotoContacts = async () => {
<<<<<<< HEAD
  try {
    const { data } = await $host.get("api/directorPhotoContacts");
    return data;
  } catch (error) {
    return { error: error.message || "Error fetching director photo contacts" };
  }
};

export const deleteDirectorPhotoContacts = async (id) => {
  try {
    const { data } = await $host.delete("api/directorPhotoContacts/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return data;
  } catch (error) {
    return {
      error: `Error deleting director photo contact with id ${id}: ${error.message}`,
    };
  }
};

export const addDirectorPhotoContacts = async (formData) => {
  const { data } = await $host.post("api/directorPhotoContacts/", formData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
=======
  const { data } = await $host.get("api/directorPhotoContacts");
  return data;
};

export const deleteDirectorPhotoContacts = async (id) => {
  const { data } = await $host.delete("api/directorPhotoContacts/" + id);
  return data;
};

export const addDirectorPhotoContacts = async (formData) => {
  const { data } = await $host.post("api/directorPhotoContacts/", formData);
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
  return data;
};

// reporting and reporting-Links api
export const fetchReporting = async () => {
  const { data } = await $host.get("api/reporting");
  return data;
};

export const deleteReporting = async (id) => {
<<<<<<< HEAD
  const { data } = await $host.delete("api/reporting/" + id, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
=======
  const { data } = await $host.delete("api/reporting/" + id);
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
  return data;
};

export const addReporting = async (formData) => {
<<<<<<< HEAD
  const { data } = await $host.post("api/reporting/", formData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
=======
  const { data } = await $host.post("api/reporting/", formData);
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
  return data;
};

export const addReportingLink = async (formData, id) => {
<<<<<<< HEAD
  const { data } = await $host.post("api/reporting/addLink/" + id, formData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
=======
  const { data } = await $host.post("api/reporting/addLink/" + id, formData);
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
  return data;
};

export const deleteReportingLink = async (id) => {
<<<<<<< HEAD
  const { data } = await $host.delete("api/reporting/deleteLink/" + id, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
=======
  const { data } = await $host.delete("api/reporting/deleteLink/" + id);
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
  return data;
};

// Items-api
export const fetchItems = async () => {
  const { data } = await $host.get("api/items");
  return data;
};

export const deleteItems = async (id) => {
<<<<<<< HEAD
  const { data } = await $host.delete("api/items/" + id, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
=======
  const { data } = await $host.delete("api/items/" + id);
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
  return data;
};

export const addItems = async (formData) => {
<<<<<<< HEAD
  const { data } = await $host.post("api/items/", formData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
=======
  const { data } = await $host.post("api/items/", formData);
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
  return data;
};

// Category-api
export const fetchCategory = async () => {
  const { data } = await $host.get("api/items");
  return data;
};

export const deleteCategory = async (id) => {
<<<<<<< HEAD
  const { data } = await $host.delete("api/category/" + id, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
=======
  const { data } = await $host.delete("api/category/" + id);
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
  return data;
};

export const addCategory = async (formData, id) => {
<<<<<<< HEAD
  const { data } = await $host.post("api/category/" + id, formData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return data;
};

// Сharacteristics-api
export const addCharacteristics = async (formData, id) => {
  const { data } = await $host.post(
    "api/category/addCharacteristics/" + id,
    formData,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return data;
};

export const deleteCharacteristics = async (id) => {
  const { data } = await $host.delete(
    "api/category/deleteCharacteristics/" + id,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return data;
};

// TableCharacteristics - api

export const addTableCharacteristics = async (formData, id) => {
  const { data } = await $host.post(
    "api/category/addTableCharacteristics/" + id,

    formData,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
=======
  const { data } = await $host.post("api/category/" + id, formData);
  return data;
};

export const addTableCharacteristics = async (formData, id) => {
  const { data } = await $host.post(
    "api/category/addTableCharacteristics/" + id,
    formData
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
  );
  return data;
};

export const deleteTableCharacteristics = async (id) => {
  const { data } = await $host.delete(
<<<<<<< HEAD
    "api/category/deleteTableCharacteristics/" + id,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
=======
    "api/category/deleteTableCharacteristics/" + id
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
  );
  return data;
};

<<<<<<< HEAD
export const addTableNameCharacteristics = async (formData, id) => {
  const { data } = await $host.post(
    "api/category/addTableNameCharacteristics/" + id,
    formData,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
=======
export const addCharacteristics = async (formData, id) => {
  const { data } = await $host.post(
    "api/category/addCharacteristics/" + id,
    formData
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
  );
  return data;
};

<<<<<<< HEAD
export const deleteTableNameCharacteristics = async (id) => {
  const { data } = await $host.delete(
    "api/category/deleteTableNameCharacteristics/" + id,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return data;
};

// video-api

export const fetchVideo = async (id) => {
  const { data } = await $host.get("api/video/" + id);
  return data;
};

// token-api

export const login = async (formData) => {
  const { data } = await $host.post("api/auth/login", formData);
  return data;
};

export const checkToken = async () => {
  const { data } = await $authHost.get("api/auth/checkToken");
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};
=======
export const deleteCharacteristics = async (id) => {
  const { data } = await $host.delete(
    "api/category/deleteCharacteristics/" + id
  );
  return data;
};
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
