import { useState,useEffect } from "react"

export function useCatImage({fact}) {
    const [imageUrl, setImageUrl] = useState()
    const CAT_PREFIX = 'https://cataas.com'
    //Efecto que se ejecuta una vez se actualiza el estado de la cadena, recordar siempre actualiza por defecto una vez al renderizar
    useEffect(() => {
        //Sepera con split slice para cuantos tomar y join para unir 
        //const firtWord = fact.split(' ').slice(0,3).join(' ')
        if (!fact) return
        const firtWord = fact.split(' ', 3).join(' ')
        console.log(firtWord)

        fetch(`https://cataas.com/cat/says/${firtWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(data => {
                const { url } = data
                setImageUrl(url)
            })
    }, [fact])
    return {imageUrl:`${CAT_PREFIX}${imageUrl}`}
}