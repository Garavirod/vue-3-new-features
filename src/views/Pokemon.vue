<template>
    <div class="container-fluid text-center p-3">
        <h1 v-if="!pokemon && !errorMessage">Searching...</h1>
        <h1 v-else-if="errorMessage"> {{ errorMessage }} </h1>
        <template v-else >                            
            <h3> {{pokemon.name}} </h3>
            <img width="200" height="200" :src="pokemon.sprites.front_default" alt="" srcset="">
            <br>
            <router-link :to="{name:'pokemon-search', params:{} }">Go back</router-link>
        </template>
    </div>
</template>

<script>
import usePokemon from '@/hooks/usePokemon'
import { useRoute } from 'vue-router'
import { watch } from 'vue'
export default {
    name:'Pokemon',

    setup(){
        const route = useRoute()   
        const {
            pokemon,
            isLoadding,
            errorMessage,
            searchPokemon
        } = usePokemon( route.params.id )

        
        watch( 
            () => route.params.id, // when 'route.params.id' gets change
            (/* value, prevValue */) => searchPokemon( route.params.id )            
        )

        return {
            pokemon,
            isLoadding,
            errorMessage
        }
    }
    
}
</script>