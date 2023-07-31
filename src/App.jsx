import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firtWorLd}?size=50&color=red&json=true`


//Custom Hooks


export function App() {
    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick = () => {
        refreshFact()
    }
    return (
        <main>
            <button onClick={handleClick}>
                Got new fact
            </button>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`image extracted using the firt rhee words for ${fact}`} />}
        </main>
    )
} 