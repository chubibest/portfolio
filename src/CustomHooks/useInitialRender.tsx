import { useRef, useEffect } from 'react'

const useInitialRender = () => {
    const initialRender = useRef(true)

    useEffect(() => {
        initialRender.current = false
    }, [])

    return initialRender.current
}

export default useInitialRender