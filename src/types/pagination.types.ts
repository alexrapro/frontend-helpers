import React from "react";

namespace IPagination {
    export interface config {
        defaultSize?: number
        defaultSort?: string
    }

    export interface root {
        page: number
        size: number
        sort?: string
        handlePaginationModel: (model: { pageSize: number, page: number }) => void
    }

    export interface meta {
        meta: {
            total: number
            size: number
            from: number
        }
    }

    export interface query extends root {
        handleCheckTotal: <T>(meta: meta) => void
    }

    export interface setPagination {
        from: number
        size: number
        sort?: string
    }

    export interface state extends root {
        setPagination?: React.Dispatch<React.SetStateAction<setPagination>>
    }
}


export default IPagination