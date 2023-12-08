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
};

// galery-api
export const fetchGalery = async () => {
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
};

// marketing-contacts-api
export const fetchMarketingContacts = async () => {
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
};

// director-contacts-api
export const fetchDirectorContacts = async () => {
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
};

// director-photo-contacts-api
export const fetchDirectorPhotoContacts = async () => {
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
  return data;
};

// reporting and reporting-Links api
export const fetchReporting = async () => {
  const { data } = await $host.get("api/reporting");
  return data;
};

export const deleteReporting = async (id) => {
  const { data } = await $host.delete("api/reporting/" + id, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return data;
};

export const addReporting = async (formData) => {
  const { data } = await $host.post("api/reporting/", formData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return data;
};

export const addReportingLink = async (formData, id) => {
  const { data } = await $host.post("api/reporting/addLink/" + id, formData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return data;
};

export const deleteReportingLink = async (id) => {
  const { data } = await $host.delete("api/reporting/deleteLink/" + id, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return data;
};

// Items-api
export const fetchItems = async () => {
  const { data } = await $host.get("api/items");
  return data;
};

export const deleteItems = async (id) => {
  const { data } = await $host.delete("api/items/" + id, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return data;
};

export const addItems = async (formData) => {
  const { data } = await $host.post("api/items/", formData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return data;
};

// Category-api
export const fetchCategory = async () => {
  const { data } = await $host.get("api/items");
  return data;
};

export const deleteCategory = async (id) => {
  const { data } = await $host.delete("api/category/" + id, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return data;
};

export const addCategory = async (formData, id) => {
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
  );
  return data;
};

export const deleteTableCharacteristics = async (id) => {
  const { data } = await $host.delete(
    "api/category/deleteTableCharacteristics/" + id,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return data;
};

export const addTableNameCharacteristics = async (formData, id) => {
  const { data } = await $host.post(
    "api/category/addTableNameCharacteristics/" + id,
    formData,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return data;
};

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
