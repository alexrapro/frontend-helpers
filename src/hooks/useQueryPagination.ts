import {usePathname, useRouter, useSearchParams} from "next/navigation";
import IPagination from "../types/pagination.types";

const useQueryPagination = (props: IPagination.config = {}): IPagination.query => {
    const {defaultSort, defaultSize = 10} = props
    const router = useRouter()
    const searchParams = useSearchParams()
    const query = Object.fromEntries(searchParams.entries())
    const pathname = usePathname()
    const size = Number(query.size) || defaultSize
    const page = Number(query.page) || 1
    const sort = query.sort || defaultSort

    const handleCheckTotal = ({meta}: IPagination.meta) => {
        if (meta?.total && (page - 1) * size > meta.total) {
            const newQuery = new URLSearchParams({...query, page: '1', size: `${defaultSize}`})
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