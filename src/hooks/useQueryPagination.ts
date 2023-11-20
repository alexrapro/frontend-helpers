import {SearchHitsMetadata, SearchSort, SearchTotalHits} from "@opensearch-project/opensearch/api/types";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import qs from "qs";
import IPagination from "../types/PaginationTypes";

const useQueryPagination = (props: IPagination.config = {}): IPagination.query => {
    const {
        defaultSort = [],
        defaultSize = 10
    } = props
    const router = useRouter()
    const searchParams = useSearchParams()
    const query = Object.fromEntries(searchParams.entries())
    const pathname = usePathname()
    const size = Number(query.size) || defaultSize
    const page = Number(query.page) || 1
    const sort = typeof query?.sort === "string" ? Object.values(qs.parse(query?.sort)) as SearchSort : defaultSort

    const handleCheckTotal = <T>(hits?: SearchHitsMetadata<T>) => {
        if (hits?.total && (page - 1) * size > (hits?.total as SearchTotalHits)?.value) {
            const newQuery = new URLSearchParams({...query, page: '1', size: '10'})
            const url = pathname + '?' + newQuery.toString()
            router.push(url)
        }
    }

    const handlePaginationModel = (model: { pageSize: number, page: number }) => {
        const newParams = new URLSearchParams({
            ...query, page: `${++model.page}`,
            size: `${model.pageSize}`
        })
        router.push(pathname + '?' + newParams.toString())
    };

    if (page < 1 || (size < 1 || size >= 100)) {
        const newParams = new URLSearchParams({...query, page: '1', size: `10`})
        router.push(pathname + '?' + newParams.toString())
        return {
            page: (page - 1),
            size: size,
            sort,
            handleCheckTotal,
            handlePaginationModel
        }
    }

    return {
        page: (page - 1),
        size: size,
        sort,
        handleCheckTotal,
        handlePaginationModel
    }
}

export default useQueryPagination