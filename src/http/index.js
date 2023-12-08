import axios from "axios";

<<<<<<< HEAD
const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
=======
export const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
>>>>>>> ee089ccc58399865905efea16cecd4bb994ca5fe
