import { useState,useEffect } from "react"
import { getRandomFact } from '../services/facts'

export function useCatFact () {
    const [fact, setFact] = useState()

    //Recupera nuevos datos
    const refreshFact = ()=>{
        getRandomFact().then(newFact => setFact(newFact))
    }

     //Efecto que se ejecuta la primera vez
     useEffect(refreshFact, [])
    return {fact,refreshFact}
}