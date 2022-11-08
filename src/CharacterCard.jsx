
import './App.css';
import { audio } from 'react-loader-spinner'
export const CharacterCard = ({ character, loanding }) => {

    if (loanding) return <><div className='flex justify-center animate-pulse    '><h1>Cargando.asds..</h1></div></>

    return (
        <div className='bg-slate-100 w-36 h-72 lg:w-64 lg:h-96 border-solid border-2 border-sky-300 rounded-lg drop-shadow-lg  m-auto mt-2 '>
            <img src={character.image} alt={character.name} />
            <div className='ml-2'>
                <h1 className='font-medium lg:text-xl text-sm nameCharacter'>{character.name}</h1>
                <h1>Last Location</h1>
                <h1 className='  lg:font-medium text-sm '>{character.location.name}</h1>
                <div className='flex justify-around mb-2 mt-2 '>
                    <h1 className='text-sm'>{character.species}</h1>
                    {character.status === 'Alive' ? (<button className='bg-green-600 text-slate-100 w-20  rounded-sm '>{character.status}</button>)
                        : null

                    }
                    {character.status === 'Dead' ? (<button className='bg-red-700 text-slate-100 w-20  rounded-sm'>{character.status}</button>)
                        : null

                    }
                    {character.status === 'unknown' ? (<button className='bg-yellow-500 text-slate-100 w-20  rounded-sm'>{character.status}</button>)
                        : null

                    }

                </div>


            </div>

        </div >

    )
}
