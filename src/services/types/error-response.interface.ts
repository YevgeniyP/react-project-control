import { AxiosError } from 'axios';

export type ErrorResponseInterface = AxiosError<ErrorInterface>;

export interface ErrorInterface {
  status_message?: string;
  status_code?: number;
  errors?: string[];
  success?: boolean;
}
