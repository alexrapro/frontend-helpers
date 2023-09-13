import {removeEmptyProps, removeUnderscoreProps} from "../index";

const objectCleaner = <T>(obj: T) => ({
    removeUnderscoreFields: () => objectCleaner(removeUnderscoreProps(obj)),
    removeEmptyFields: () => objectCleaner(removeEmptyProps(obj)),
    get: (): T => obj
})

export default objectCleaner
