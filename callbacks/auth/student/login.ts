import axios, { AxiosResponse } from "axios";
import {
  STUDENT_AUTH_URL,
  ErrorType,
  SERVER_ERROR,
  StatusResponse,responseBody
} from "../../constants";
export interface LoginStudentParams {
  user_id: string;
  password:string;
  remember_me:boolean;
}
export interface LoginResponse {
  token: string;
  role_id: number;
  user_id: string;
}
const authInstance = axios.create({
  baseURL: STUDENT_AUTH_URL,
  timeout: 15000,
  withCredentials:true,
  timeoutErrorMessage: SERVER_ERROR,
});
const studentLoginRequest = {
  post: (body: LoginStudentParams) =>
  authInstance
    .post<
      LoginResponse,
      AxiosResponse<LoginResponse, LoginStudentParams>,
      LoginStudentParams
    >("/api/auth/login", body)
    .then(responseBody)
    .catch((err: ErrorType) => {
      return { user_id: "", token: "", role_id: 0 } as LoginResponse;
    }),
};
export default studentLoginRequest;