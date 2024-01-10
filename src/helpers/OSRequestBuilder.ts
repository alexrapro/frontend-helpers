import {QueryDslQueryContainer, SearchRequest} from "@opensearch-project/opensearch/api/types";
import {removeEmptyProps} from "../index";

export const filterBuilder = (request: SearchRequest['body'], filter: QueryDslQueryContainer): SearchRequest['body'] => (removeEmptyProps({
    ...request,
    query: {
        ...request?.query,
        bool: {
            ...request?.query?.bool,
            filter: request?.query?.bool?.filter ? [...request.query.bool.filter as QueryDslQueryContainer[], filter] : [filter]
        }
    }
}))