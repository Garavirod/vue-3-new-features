<template>
  <h1>Conceptos básicos de VUE 3</h1>
  <!-- VALUES -->
  <h2>Values</h2>
  {{ fullName }}
  <h2>Methods</h2>
  <button @click="helloUser">push me</button>
  <h2>V-model</h2>
  <input type="text" name="" id="" v-model="frameWork" />
  <p>You chose {{ frameWork }}</p>
  <h2>Arrays</h2>
  <input type="checkbox" name="" id="" v-model="frames" value="Django" />
  <label for="">Django</label>
  <input type="checkbox" name="" id="" v-model="frames" value="Laravel" />
  <label for="">Laravel</label>
  <input type="checkbox" name="" id="" v-model="frames" value="ASP" />
  <label for="">ASP</label>
  <p>{{ frames }}</p>
  <h2>Components comunication</h2>
  <Parent />
  <h2>Vue Forms watchers</h2>
  <LoginForm
    v-model:email="loginForm.email"
    v-model:password="loginForm.password"
  />
  <h2>API fetch</h2>
  <APIFetch />

</template>

<script>
import { computed, ref, reactive, watch } from "vue";
import Parent from "@/components/Parent";
import LoginForm from "@/components/LoginForm";
import APIFetch from "./components/APIFetch";
export default {
  components: {
    Parent,
    LoginForm,
    APIFetch,

  },
  setup() {
    const name = ref("Rodrigo");
    const lastName = ref("Garcia");
    const frameWork = ref("vue 3");
    const frames = ref([]);

    const fullName = computed(() => {
      return `${name.value} ${lastName.value}`;
    });

    const helloUser = () => {
      alert(`Hello ${name.value}`);
    };

    const loginForm = reactive({
      //This defines reactive data
      email: "",
      password: "",
    });
    /* 
      loginform : elemnt to hear
      newForm
    */
    watch(loginForm, (newForm) => {
      console.log("NEW FORM >: ", newForm);
    });

    return {
      fullName,
      helloUser,
      frameWork,
      frames,
      loginForm,
    };
  },
};
</script>
