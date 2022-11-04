import logo from './logo.svg';
import './App.css';
import { CharacterCard } from './CharacterCard';
import { GridCards } from './GridCards';


function App() {

  return (
    <div className="App bg-slate-50 ">
      <div className='flex justify-center'>
        <h1 className='text-4xl border-slate-600 mt-2  text-neutral-600'>Rick and morty API</h1>
      </div>

      <GridCards />


    </div>
  );
}

export default App;
