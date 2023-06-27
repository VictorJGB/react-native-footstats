import axios from "axios";

export const apiBaseUrl = "https://apiv3.apifootball.com/";
export const apiKey =
  "ada3dea79f85a130ae8bf57c2359d089a10bd6ecf367c09954d841f46f868075";

export const apiBaseConfig = axios.create({
  baseURL: apiBaseUrl,
});
