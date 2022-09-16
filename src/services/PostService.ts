
// hacemos los post reactivos haciendo que sean una referencia
import { ref, Ref } from 'vue'

// importamos la interface
import IPost from '@/interfaces/IPost'

// creamos una clase para el servicio
class PostService {
    private posts:Ref<Array<IPost>>

    constructor() {
        // inicializamos las referencias en un array vacío
        this.posts = ref<Array<IPost>>([])
    }

    getPosts ():Ref<Array<IPost>> {
        return this.posts
    }

    // obtenemos los datos de la API
    async fetchAll(): Promise<void> {
        try {
            // hacemos el consumo de la API
            const url = 'https://jsonplaceholder.typicode.com/posts' 
            // respuesta
            const response = await fetch(url)
            // preparamos los datos para ser tratados. Lo pasamos a json
            const json = await response.json()
            // pasamos los datos a la clase
            this.posts.value = await json

        } catch(error) {
            console.log(error)
        }
    }
}

// exportamos la clase
export default PostService