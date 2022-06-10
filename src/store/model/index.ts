import characters, {CharacterModel} from "./character/character";

export interface StoreModel {
    characters: CharacterModel
}

const model: StoreModel = {
    characters
}

export default model;