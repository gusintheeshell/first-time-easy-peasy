import {Action, action} from "easy-peasy"

interface CharacterType {
    name: string;
    birth_year: string;
}

export interface CharacterModel {
    characters: Array<CharacterType>,
    add: Action<CharacterModel, CharacterType>
}

const characters: CharacterModel = {
    characters: [],
    add: action((state, payload: CharacterType) => {
        state.characters.push(payload)
    })
}

export default characters