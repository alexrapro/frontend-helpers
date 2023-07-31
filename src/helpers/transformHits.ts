import {SearchHit} from "@opensearch-project/opensearch/api/types";

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

export default transformHits