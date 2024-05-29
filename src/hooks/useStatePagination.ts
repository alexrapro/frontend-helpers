import {useState} from "react";
import IPagination from "../types/pagination.types";

const useStatePagination = (props: IPagination.config = {}): IPagination.state => {
    const {defaultSize = 10, defaultSort} = props
    const [pagination, setPagination] = useState<IPagination.setPagination>({
        from: 1,
        size: defaultSize,
        sort: defaultSort
    })

    const handlePaginationModel = (model: { pageSize: number, page: number }) => setPagination({
        from: ++model.page,
        size: model.pageSize
    })

    return {
        page: (pagination.from - 1),
        size: pagination.size,
        sort: pagination?.sort,
        setPagination,
        handlePaginationModel
    }
}

export default useStatePagination