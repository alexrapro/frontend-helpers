import {UseQueryOptions} from "@tanstack/react-query";
import {AxiosError} from "axios";

export type TNextSearchParams = Record<string, string | string[] | undefined>
export type TQueryOption<T> = Omit<UseQueryOptions<T, AxiosError>, 'queryKey' | 'queryFn'>
export type TValueOf<T> = T[keyof T]