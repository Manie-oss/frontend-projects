import { useEffect, useRef } from "react"

export function useClickOutside(
    callback
){
    const elemRef = useRef(null);
    const clickOutside = (event) => {
        console.log('-->', elemRef.current);
        console.log('-->>>', event.target);
        if(elemRef.current  && !elemRef.current.contains(event.target)){
            callback();
        }
    }

    useEffect(()=>{
        document.addEventListener('click', clickOutside);
        return () => {
            document.removeEventListener('click', clickOutside);
        }
    }, [])

    return elemRef;
}
