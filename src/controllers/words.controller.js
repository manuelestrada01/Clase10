import WordsRoutes from "../services/words.service.js";
import WordsService from "../services/words.service.js"

class WordsController{
    constructor(){
        this.service = new WordsService()
    }

    getWords = async (req, res) =>{
        const words = await this.service.getWords()
        res.send(words)
    }

    postWords = async (req, res) =>{
        const data = req.body
        const newWord = await this.service.postWords(data)
        res.send(newWord)
    }

    patchWords = async (req, res) =>{
        const { id } = req.params
        const data = req.body
        const update = await this.service.patchWords(id, data)
        res.send(update)
    }
}

export default WordsController