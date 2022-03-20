<template>
    <div class="container fluid">
        <h1>Search pokem : {{pokemonid}} </h1>
        <form @submit.prevent="onSubmit">
            <input
            v-model="pokemonid"
            class="form-control" 
            placeholder="Number pokemon"
            autofocus
            type="number">
        </form>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

export default {
    name:'Search',
    setup(){
        const router = useRouter()
        const pokemonid = ref(1)
        const onSubmit = () => {
            console.log(pokemonid.value);
            router.push({name:'pokemon-detail',params:{id:pokemonid.value}})
        }
        return{
            pokemonid,
            onSubmit
        }
    }
}
</script>