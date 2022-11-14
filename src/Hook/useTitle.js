import { useEffect } from "react"

const useTitle = PageTitle => {
    useEffect(() => {
        document.title = PageTitle
    }, [PageTitle])
}

export default useTitle;