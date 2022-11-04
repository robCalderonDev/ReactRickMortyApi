import { useState, useEffect } from 'react'

export const useCharacter = (pagina) => {
    const [characters, setCharacters] = useState({})

    const [loanding, setLoanding] = useState(true)
    const [error, setError] = useState(null)




    console.log(characters, "esta es la pagina")

    const fetchCharacters = async () => {

        try {
            setLoanding(true)

            const res = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`)

            const per = await res.json()
            setCharacters(per)




        } catch (error) {
            console.log("error:", error)
            setError(error)
        }
        finally {
            setLoanding(false)
        }

    }
    useEffect(() => {
        fetchCharacters()
    }, [pagina])



    return [characters, loanding, error]

}
