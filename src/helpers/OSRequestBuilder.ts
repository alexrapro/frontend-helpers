import {QueryDslQueryContainer, SearchRequest} from "@opensearch-project/opensearch/api/types";
import {removeEmptyProps} from "../index";

export const filterBuilder = (request: SearchRequest['body'], filters: QueryDslQueryContainer | QueryDslQueryContainer[]): SearchRequest['body'] => {
    let filter: QueryDslQueryContainer[] = request?.query?.bool?.filter ? [...request.query.bool.filter as QueryDslQueryContainer[]] : []

    if (Array.isArray(filters)) filters.map(item => filter.push(item))
    else filter.push(filters)

    return removeEmptyProps({
        ...request,
        query: {
            ...request?.query,
            bool: {
                ...request?.query?.bool,
                filter
            }
        }
    })
}