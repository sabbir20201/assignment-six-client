import axios from "axios";
// import { cookies } from "next/headers";
import Cookies from "js-cookie";
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

// axiosInstance.interceptors.request.use(function (config) {
//   const cookieStore = cookies();
//   const accessToken = cookieStore.get("accessToken")?.value;
//   if(accessToken){
//     config.headers.Authorization = `Bearer ${accessToken}`;
//   }
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });

// axiosInstance.interceptors.response.use(function (response) {
//   return response;
// }, function (error) {
//   return Promise.reject(error);
// });

axiosInstance.interceptors.request.use(
  function (config) {
    const accessToken = Cookies.get("accessToken");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default axiosInstance;
