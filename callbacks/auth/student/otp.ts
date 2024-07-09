import axios, { AxiosResponse } from "axios";
import {
  STUDENT_AUTH_URL,
  ErrorType,
  SERVER_ERROR,
  StatusResponse,
} from "../../constants";
import { errorNotification, pushNotification } from "../../notification";

export interface OTPParams {
  user_id: string;
}
const authInstance = axios.create({
  baseURL: STUDENT_AUTH_URL,
  timeout: 15000,
  withCredentials: true,
  timeoutErrorMessage: SERVER_ERROR,
});

const otpRequest = {
  post: (body: OTPParams) =>
    authInstance
      .post<
        StatusResponse,
        AxiosResponse<StatusResponse, OTPParams>,
        OTPParams>("/api/auth/otp", body)
      .then((res) => {
        return res;
      })
      .catch((err: ErrorType) => {
        return err;
      }),
};

export default otpRequest;