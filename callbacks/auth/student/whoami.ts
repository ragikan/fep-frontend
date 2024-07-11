import axios, { AxiosResponse } from "axios";
import { STUDENT_AUTH_URL, ErrorType, SERVER_ERROR, setConfig } from "../../constants";

export interface WhoamiResponse {
  role_id: number;
  user_id: string;
  name: string;
}
const authInstance = axios.create({
  baseURL: STUDENT_AUTH_URL,
  timeout: 15000,
  timeoutErrorMessage: SERVER_ERROR,
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const whoami = {
  get: (token: string) =>
    authInstance
      .get<WhoamiResponse>("/api/auth/whoami", setConfig(token))
      .then(responseBody)
      .catch((err: ErrorType) => {
        if (err.response?.status === 401) {
          return {
            name: "error401",
            user_id: "error401",
            role_id: 0,
          } as WhoamiResponse;
        }
        return { user_id: "" } as WhoamiResponse;
      }),
  credits: (token: string) =>
    authInstance
      .get<WhoamiResponse>("/credits", setConfig(token))
      .then(responseBody)
      .catch(() => ({ role_id: 0 } as WhoamiResponse)),
};

export default whoami;