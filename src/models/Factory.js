import WordsMemModel from "../models/DAO/words.models.mem.js"

class Factory{
    static get(persistencia){
        switch(persistencia){
            case "MEM":
                console.warn("Persistencia en la memoria del servidor")
                return new WordsMemModel()

            default:
                console.warn("Persistencia en default")
                return new WordsMemModel()
        }
    }
}

export default Factory