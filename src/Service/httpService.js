import Axios from "axios";

Axios.interceptors.response.use(null, (error) => {
  const ExpectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (ExpectedErrors) {
    console.log("logging the error", error);
    alert("An unexpected error occured");
    return Promise.reject(error);
  }
});

export default {
  get: Axios.get,
};
