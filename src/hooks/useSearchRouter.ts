import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useCallback} from "react";

const useSearchRouter = (): [query: { [p: string]: string }, setSearchParams: (rawData: {
    [p: string]: string
}) => void] => {
    const searchParams = useSearchParams()
    const query = Object.fromEntries(searchParams.entries())
    const router = useRouter()
    const pathname = usePathname()

    const setSearchParams = useCallback((rawData: { [p: string]: string }) => {
        const newQuery = new URLSearchParams({...rawData})
        const url = pathname + '?' + newQuery.toString()

        router.replace(url, {
            scroll: false
        })
    }, [searchParams])

    return [query, setSearchParams]
}

export default useSearchRouter