const removeUnderscoreProps = (obj: any): any => {
    for (let key in obj) {
        if (key.startsWith("_")) {
            delete obj[key]
        }
    }

    return obj
}

export default removeUnderscoreProps