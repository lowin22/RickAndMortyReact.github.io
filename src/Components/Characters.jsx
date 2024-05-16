
function Characters(props) {
    const {characters, setCharacters} = props;
    const resetCharacters = ()=>{
        setCharacters(null);

    }
    console.log(characters);
  return (
    <div className="characters">
        <h1>Personajes</h1>
        <span className="back-home" onClick={resetCharacters}>
            volver a la paguina principal
        </span>

       <div className="container-characters">
        {characters.map((character, index)=>(
            <div className="character-container" key={index}>
                <div>
                    <img src={character.image} alt={character.name} /> 
                </div>
                <div>
                    <h3>{character.name}</h3>
                    {character.status === "Alive" ?(
                        <>
                        <span className="alive" />
                        alive
                        </>
                    ):(
                        <>
                        <span className="dead" />
                        dead
                        </>
                    )}
                    <p>
                        <span className="text-grey">Episodios: </span>
                        <span>{character.episode.length}</span>
                    </p>
                    <p>
                        <span className="text-grey"> Especie</span>
                        <span>{character.species}</span>
                    </p>
                </div>
            </div>
        ))}
       </div>
       <span className="back-home" onClick={resetCharacters}>
        volver a la paguina principal 
       </span>
    </div>
  )
}

export default Characters