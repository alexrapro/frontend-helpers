"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const removeEmptyProps = (obj) => {
    if (Array.isArray(obj)) {
        return obj.map((item) => removeEmptyProps(item)).filter((item) => {
            return item !== undefined && item !== null && item !== "" && item !== false;
        });
    }
    else if (typeof obj === "object" && obj !== null) {
        const filteredObj = Object.fromEntries(Object.entries(obj).map(([key, value]) => {
            if (typeof value === "object" && value !== null) {
                value = removeEmptyProps(value);
            }
            return [key, value];
        }).filter(([_, value]) => {
            return value !== undefined && value !== null && value !== "";
        }));
        if (Object.keys(filteredObj).length === 0) {
            return undefined;
        }
        else {
            return filteredObj;
        }
    }
    else {
        return obj;
    }
};
exports.default = removeEmptyProps;
