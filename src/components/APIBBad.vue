<template>
    <div>
        <ul>
            <li v-for="character in state.data" :key="character.id"> 
                {{character.name}}
            </li>
        </ul>
    </div>
</template>


<script>
import {useAPI} from '@/hooks/useAPI';
export default {
    setup() {
        const state = useAPI('https://www.breakingbadapi.com/api/characters');
        return { state }        
    }
}
</script>