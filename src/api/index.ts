import axios, { AxiosRequestConfig } from "axios";

const basicHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers":
    "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
  app_id: "<app_id>",
  app_key: "<app_key>",
  "Content-Type": "application/json",
  "Access-Control-Allow-Credentials": "*",
};
const apiCallExecuter = async (config: AxiosRequestConfig) => {
  try {
    console.log("here is the request config", config);
    axios.interceptors.request.use((request) => {
      console.log("Starting Request", JSON.stringify(request, null, 2));
      return request;
    });

    axios.interceptors.response.use((response) => {
      console.log("Response:", JSON.stringify(response, null, 2));
      return response;
    });

    const response = await axios(config);
    if (response.data !== undefined) {
      return response.data;
    }
  } catch (e) {
    console.log("here is the issue", e);
  }
};

export const apiCall = async (
  url: string,
  method: "put" | "GET" | "post" | "patch",
  config: { params?: {} | any; data?: {} | any; header?: {} | any }
) => {
  let conf = {
    url: url,
    params: config.params,
    data: config.data,
    method: method,
    headers:
      config.header !== undefined
        ? { ...basicHeaders, ...config.header }
        : basicHeaders,
  };

  return await apiCallExecuter(conf);
};
