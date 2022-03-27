import axios from "axios"
import { ref } from "vue"

const usePokemon = ( pokemonid = '1') => {
    let pokemon = ref()
    let isLoadding = ref(false)
    let errorMessage = ref()


    const searchPokemon = async ( id ) => {

        if( !id ) return

        isLoadding.value = true
        pokemon.value = null

        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            pokemon.value = data
            errorMessage.value = null
        } catch (error) {
            errorMessage.value = "Pokemon was not be loadded correctly"
        }

        isLoadding = false
    }

    searchPokemon( pokemonid )

    return{
        pokemon,
        isLoadding,
        errorMessage,
        searchPokemon
    }

}


export default usePokemon