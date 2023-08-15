import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1500,
  headers: { "X-Custom-Header": "foobar" },
});

// Add a request interceptor
api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // Object.assign(config.headers, {text:"Shashi Ross"})
    // console.log(config, "config");
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log(response, "response");
    Object.assign(response, {
      data: { list: response.data, message: "My name is shashi" },
    });
    console.log(response, "response");
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default api;
