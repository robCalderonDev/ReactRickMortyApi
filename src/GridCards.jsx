import React, { useState, useEffect } from 'react'
import { CharacterCard } from './CharacterCard'
import { useCharacter } from './useCharacter'
import { Oval } from 'react-loader-spinner'
export const GridCards = () => {
    const [pagina, setPagina] = useState(1)

    const [characters, loanding, error] = useCharacter(pagina)
    const [searchInput, setSearchInput] = useState('')


    const onIncrease = () => {
        if (characters.info.next != null) {
            setPagina(pagina + 1)

        }
        return null


    }
    const OnSubtract = () => {
        if (pagina !== 1) {
            setPagina(pagina - 1)


        }
        return null
    }
    useEffect(() => {
        setSearchInput('')
    }, [characters])

    if (loanding) return <><div className='flex justify-center animate-pulse'>
        <Oval
            height={80}
            width={80}
            color="#3c9892"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#3c9892"
            strokeWidth={2}
            strokeWidthSecondary={2}

        />
    </div></>
    if (error) return <h1>{error}</h1>
    return (
        <>

            <div className='flex justify-around'>
                <button onClick={OnSubtract} className='w-28 h-8 bg-cyan-700 text-zinc-100 rounded-sm'>Atras</button>
                <h1>pagina: {pagina}  </h1>
                <button onClick={onIncrease} className='w-28  h-8 bg-cyan-700 text-zinc-100 rounded-sm'>Siguiente</button>
            </div>

            <div >
                <div className='flex justify-center  mt-4'>
                    <input className='bg-white w-56 border text-center border-slate-300 rounded-sm h-7 placeholder:text-slate-400 focus:outline-none focus:border-cyan-700 focus:ring-sky-500 focus:ring-1 sm:text-sm' placeholder='Buscar Personaje' type="text"
                        onChange={e => setSearchInput(e.target.value)} />

                </div>

                <div className='w-full  flex justify-center mt-2'>


                    <div className='  bg-slate-200 w-11/12  grid grid-cols-2 gap-4 mt-2  lg:grid-cols-4' >


                        {
                            characters.results.filter((val) => {
                                if (searchInput == "") {

                                    return val
                                } else if (val.name.toLowerCase().includes(searchInput.toLowerCase())) {

                                    return val
                                }
                            }).map((t, i) => {
                                return (
                                    <div key={t.id} >

                                        <CharacterCard character={t} loanding={loanding} />


                                    </div>
                                )
                            })}

                    </div>

                </div>

            </div>
        </>

    )
}


/*grid grid-cols-4 gap-4 mt-2 */