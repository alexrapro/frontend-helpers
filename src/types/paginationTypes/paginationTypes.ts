import {SearchHitsMetadata, SearchRequest} from "@elastic/elasticsearch/lib/api/types";

namespace IPagination {
    export interface config {
        defaultSize?: number
        defaultSort?: SearchRequest['sort']
    }

    export interface root {
        page: number
        size: number
        sort?: SearchRequest['sort']
    }

    export interface query extends root {
        handleCheckTotal: <T>(hits?: SearchHitsMetadata<T>) => void
    }

    export interface setPagination {
        from: number;
        size: number;
        sort?: SearchRequest['sort']
    }

    export interface state extends root {
        setPagination?: React.Dispatch<React.SetStateAction<setPagination>>
    }
}


export default IPagination