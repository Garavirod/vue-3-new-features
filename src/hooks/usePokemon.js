import axios from "axios"
import { ref } from "vue"

const usePokemon = ( pokemonid = '1') => {
    let pokemon = ref()
    let isLoadding = ref(false)
    let errorMessage = ref()


    const searchPokemon = async () => {
        isLoadding.value = true
        pokemon.value = null

        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonid}`)
            pokemon.value = data
            errorMessage.value = null
        } catch (error) {
            errorMessage.value = "Pokemon was not be loadded correctly"
        }

        isLoadding = false
    }

    searchPokemon()

    return{
        pokemon,
        isLoadding,
        errorMessage
    }

}


export default usePokemon