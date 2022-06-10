import React, {useCallback, useEffect} from 'react';
import './App.css';

import {useStoreActions, useStoreState} from "./store/store"
import {CharacterType} from "./store/model/character/character"

function App() {
  const {getCharacter} = useStoreActions((actions) => actions.characters);
  const {characters} = useStoreState((state) => state.characters);
  const callAPI = useCallback(() => getCharacter(), [characters]);
  
  useEffect(() => {
    callAPI()
    console.log('i fire once');
  }, []);

  return (
    <div className="App">
      <ul>
        {characters[0].map((char: CharacterType) => (
          <li>{char.name} - {char.birth_year}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
