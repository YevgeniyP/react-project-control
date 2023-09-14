import { AxiosError } from "axios";

export type ErrorResponseInterface = AxiosError<ErrorInterface>;

export interface ErrorInterface {
	errors: string[];
	success: boolean;
}
