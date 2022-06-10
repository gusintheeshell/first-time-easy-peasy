import {Action, action, Thunk, thunk} from "easy-peasy"

import api from "../../../services/api";

export interface CharacterType {
    name: string;
    birth_year: string;
}

export interface CharacterModel {
    characters: Array<any>,
    addCharacter: Action<CharacterModel, Array<any>>,
    getCharacter: Thunk<CharacterModel>
}

const characters: CharacterModel = {
    characters: [],
    addCharacter: action((state, payload: Array<any>) => {
        state.characters.push(payload)
    }),
    getCharacter: thunk(async (actions) => {
        const {data} = await api.get("people/");
        const {results} = data;
        // const newCharacters: Array<CharacterType> = [];
        // results.forEach(({name, birth_year}: CharacterType) => {
        //     newCharacters.push({
        //         name,
        //         birth_year
        //     })
        // })
        actions.addCharacter(results)
    })
}

export default characters