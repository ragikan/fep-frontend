import axios, { AxiosResponse } from "axios";
import {
  STUDENT_AUTH_URL,
  ErrorType,
  SERVER_ERROR,
  StatusResponse,
} from "../../constants";
export interface ResetStudentParams {
  user_id: string;
  new_password:string;
  otp:string;
}
const authInstance = axios.create({
  baseURL: STUDENT_AUTH_URL,
  timeout: 15000,
  withCredentials:true,
  timeoutErrorMessage: SERVER_ERROR,
});
const studentResetRequest = {
  post: (body: ResetStudentParams) =>
    authInstance
      .post<
        StatusResponse,
        AxiosResponse<StatusResponse, ResetStudentParams>,
        ResetStudentParams
      >("/api/auth/reset-password", body)
      .then((res) => {
        return res;
      })
      .catch((err: ErrorType) => {
        return err;
      }),
};
export default studentResetRequest;