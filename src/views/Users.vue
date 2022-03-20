<template>
  <div class="container-fluid">
    <h2 v-if="isLoading">Wait please...</h2>
    <h2 v-else>Users</h2>
    <h5 v-if="errorMessage"> {{errorMessage}} </h5>

    <div v-if="users.length>0" class="list">
      <ul>
        <li v-for="user in users" :key="user.id">
          <h4>Name: {{user.first_name}} </h4>
          <h6>email: {{user.email}} </h6>
        </li>
      </ul>
    </div>

    <button @click="previousPage"  class="btn btn-primary">Previous</button>
    <button @click="nextPage" class="btn btn-primary m-2">Next</button>
    <span class="m-2">Page: {{ currentPage }} </span>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import axios from "axios";

export default {
  name: "Users",
  setup() {
    const users = ref([]);
    const isLoading = ref(false);
    const currentPage = ref(1);
    const errorMessage = ref("");

    const getUsers = async (page = 1) => {
      if (page <= 0) page = 1;
      isLoading.value = true;

      const response = await axios.get("https://reqres.in/api/users", {
        params: {
          page: page,
        },
      });      

        isLoading.value = false;
      if(response.data.data.length > 0){
          users.value = response.data.data
          currentPage.value = page
          errorMessage.value = null
      }else if(currentPage.value > 0){
        errorMessage.value = "No more  users"
      }
    };

    getUsers();

    const nextPage = () => getUsers( currentPage.value + 1 )
    const previousPage = () => getUsers( currentPage.value - 1 )


    return{
        users, 
        isLoading,
        currentPage,
        errorMessage,
        nextPage,
        previousPage
    }
  },
};
</script>