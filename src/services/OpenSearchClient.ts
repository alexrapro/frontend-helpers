import {Client} from "@opensearch-project/opensearch";
import {readFileSync} from 'fs';
import {SearchHit, SearchTemplateResponse} from "@opensearch-project/opensearch/api/types";
import {Get, Search} from "@opensearch-project/opensearch/api/requestParams";

class OpenSearchClient extends Client {
    private static instance: Client;

    private constructor() {
        super({
            node: process.env.OPEN_SEARCH_NODE,
            auth: {
                username: process.env.OPEN_SEARCH_USER as string,
                password: process.env.OPEN_SEARCH_PASSWORD as string
            },
            ssl: {
                cert: readFileSync(process.env.OPEN_SEARCH_CERT as string),
                rejectUnauthorized: false
            }
        })
    }

    static get getInstance() {
        if (!OpenSearchClient.instance) {
            OpenSearchClient.instance = new OpenSearchClient();
        }
        return OpenSearchClient.instance;
    }

    static async search<T>(params: Search<Record<string, any>>) {
        return this.getInstance.search<SearchTemplateResponse<T>>(params)
    }

    static async get<T>(params: Get) {
        return this.getInstance.get<SearchHit<T>>(params)
    }
}


export default OpenSearchClient