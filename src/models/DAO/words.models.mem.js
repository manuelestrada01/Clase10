class WordsMemModel{
    constructor(){
        this.words = [
            { id: 1, palabra: "Hola" },
            { id: 2, palabra: "que" },
            { id: 3, palabra: "tal" }
        ]
    }

    getWords = async () =>{
        const words = this.words.map((e) => {return e.palabra})
        const resultado = words.join(" ")
        return resultado
    }

    postWords = async (data) =>{
        data.id = this.words[this.words.length - 1].id + 1
        this.words.push(data)
        return data
    }

    patchWords = async (id, data) =>{
       
       try {
        const index = this.words.findIndex((e)=> e.id == id)
        if(index == -1) throw new Error ("el inidice no existe")

        const obj = {...this.words[index], ...[data]} 
        this.words.splice(index, 1, obj)
        return obj
       } catch (error) {
            console.error("ha ocurrido un error")
       }
     
    }

}

export default WordsMemModel
