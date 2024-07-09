import axios, { AxiosResponse } from "axios";
import {
  STUDENT_AUTH_URL,
  ErrorType,
  SERVER_ERROR,
  StatusResponse,
} from "../../constants";
export interface LoginStudentParams {
  user_id: string;
  password:string;
  remember_me:boolean;
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
        StatusResponse,
        AxiosResponse<StatusResponse, LoginStudentParams>,
        LoginStudentParams
      >("/api/auth/login", body)
      .then((res) => {
        return res;
      })
      .catch((err: ErrorType) => {
        return err;
      }),
};
export default studentLoginRequest;