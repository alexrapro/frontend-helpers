import {SearchHit} from "@elastic/elasticsearch/lib/api/types";

const transformHits = (data?: SearchHit[] | string[]) => {
    if (data?.length) {
        return data?.map((entity) => {
            if (typeof entity === "string") {
                return entity
            } else {
                return entity._id
            }
        })
    } else {
        return []
    }
}

module.exports = transformHits