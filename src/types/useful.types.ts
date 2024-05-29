import {QueryKey, UseQueryOptions} from "@tanstack/react-query";
import {AxiosError} from "axios";

export type INextSearchParams = Record<string, string | string[] | undefined>
export type IQueryOptions<T> = Omit<UseQueryOptions<T, AxiosError>, 'queryKey' | 'queryFn'>
export type IValueOf<T> = T[keyof T]

export interface IQueryConfig<T> {
    options?: IQueryOptions<T>
    key?: QueryKey
}