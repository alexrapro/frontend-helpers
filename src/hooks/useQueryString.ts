const useQueryString = () => {
    const url = new URL(window.location.toString())

    const setParam = ({key, value}: { value: string, key: string }) => {
        const currentUrl = new URL(window.location.toString())

        currentUrl.searchParams.set(key, value)
        window.history.pushState({}, "", currentUrl);
    }

    const getParam = (key: string) => {
        return url.searchParams.get(key)
    }

    const getAllParams = () => {
        const all = url.searchParams.entries()
        return Object.fromEntries(all)
    }

    const removeParam = (key: string) => {
        url.searchParams.delete(key)
        window.history.pushState({}, "", url);
    }

    return {setParam, getParam, getAllParams, removeParam}
}

export default useQueryString