import {useState} from "react";
import IPagination from "../types/PaginationTypes";

const useStatePagination = (props: IPagination.config = {}): IPagination.state => {
    const {
        defaultSort = [],
        defaultSize = 10
    } = props
    const [pagination, setPagination] = useState<IPagination.setPagination>({
        from: 1,
        size: defaultSize,
    })

    const handlePaginationModel = (model: { pageSize: number, page: number }) => setPagination({
        from: ++model.page,
        size: model.pageSize
    })

    return {
        page: (pagination.from - 1),
        size: pagination.size,
        sort: pagination?.sort || defaultSort,
        setPagination,
        handlePaginationModel
    }
}

export default useStatePagination