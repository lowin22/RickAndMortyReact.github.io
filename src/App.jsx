import imageRickAndMorty from './img/rick-and-morty.png'
import { useState } from 'react'
import Characters from './Components/Characters';
function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character")
    const characterApi = await api.json();

    setCharacters(characterApi.results);
  }

  return (
    <>
       <div className='app'>
        <div className="App-header">
              <h1 className='title'> Rick & Morty</h1>
              {characters ? (

                <Characters characters={characters} setCharacters={setCharacters}/>
              ): (
                <>
                <img  src={imageRickAndMorty} alt="Rick and morty" className="img-home" />
                <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
                </>
              )}
        </div>
       </div>
       
    </>
  )
}

export default App
