<template>
  <div class="container-fluid">
    <h2 v-if="isLoading">Wait please...</h2>
    <h2 v-else>Users</h2>
    <h5 v-if="errorMessage">{{ errorMessage }}</h5>

    <div v-if="users.length > 0" class="list">
      <ul>
        <li v-for="user in users" :key="user.id">
          <h4>Name: {{ user.first_name }}</h4>
          <h6>email: {{ user.email }}</h6>
        </li>
      </ul>
    </div>

    <button @click="previousPage" class="btn btn-primary">Previous</button>
    <button @click="nextPage" class="btn btn-primary m-2">Next</button>
    <span class="m-2">Page: {{ currentPage }} </span>
  </div>
</template>

<script>
import useAPIUsers from "../hooks/useAPIUser";

export default {
  name: "Users",
  setup() {
    const {
      nextPage,
      previousPage,
      users,
      isLoading,
      currentPage,
      errorMessage,
    } = useAPIUsers();

    return {
      users,
      isLoading,
      currentPage,
      errorMessage,
      nextPage,
      previousPage,
    };
  },
};
</script>