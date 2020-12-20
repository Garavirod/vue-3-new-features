<template>
    <div>
        <ul v-if="users.length">
            <li v-for="user in users" :key="user.id">{{user.name}} {{user.email}}</li>
        </ul>
        <p v-else>There are not users</p>
    </div>
</template>

<script>
import {onMounted, ref} from 'vue';
export default {    
    setup() {
        const users = ref([]);
        onMounted(async ()=>{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            users.value = await response.json();
        });

        return { users };
    }

}
</script>