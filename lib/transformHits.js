"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transformHits = (data) => {
    if (data?.length) {
        return data?.map((entity) => {
            if (typeof entity === "string") {
                return entity;
            }
            else {
                return entity._id;
            }
        });
    }
    else {
        return [];
    }
};
exports.default = transformHits;
