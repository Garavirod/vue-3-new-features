<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <h1>Conceptos básicos de VUE 3</h1>
      </div>
      <hr>
      <!-- VALUES -->
      <Values/>
      <!-- MÉTODOS -->
      <Methods/>
      <!-- DIRECTIVA V-MODEL -->
      <Dirmodel/>           
      <!-- DIRECTIVA V-FOR -->
      <Arrays/>      
      <!-- DIRECTIVA V-IF V-ELSE V-SHOW -->
      <Showif/>
      

      <!-- DIRECTIVA V-BIND -->

      <!-- DIRERIVA V-ON -->

      <!-- WATCHER -->

      <div class="col-md-12 mt-4">
        <h2>Vue Forms watchers</h2>
        <LoginForm
          v-model:email="loginForm.email"
          v-model:password="loginForm.password"
        />
      </div>

      <!-- COMUNICACIÓN ENTRE COMPONENTES -->
      <div class="col-md-12 mt-4">
        <h2>Components comunication</h2>
        <Parent />
      </div>

      <!-- CONSUMO DE API'S Y CICLO DE VIDA ONMOUNTED -->

      <div class="col-md-12 mt-4">
          <h2>API fetch</h2>
          <APIFetch />

          <h2>API Fetch 2</h2>
          <APIBBad/>
      </div>

    </div>
  </div>
</template>

<script>
import { computed, ref, reactive, watch } from "vue";
import Parent from "@/components/Parent";
import LoginForm from "@/components/LoginForm";
import APIFetch from "./components/APIFetch";
import APIBBad from '@/components/APIBBad';
import Values from '@/components/Values';
import Methods from './components/Methods';
import Dirmodel from './components/DirModel';
import Arrays from './components/Arrays.vue';
import Showif from './components/ShowIf';
export default {
  components: {
    Parent,
    LoginForm,
    APIFetch,
    APIBBad,
    Values,
    Methods,
    Dirmodel,
    Arrays,
    Showif,    
  },
  /* 
    Setup funciona como un obj que devueelve las pripiedades 
    que se utilizan en el template, en él reside toda la lógia del compoennte y 
    se ejecuta cuando la instance del componente es creada,
    recibe como primer paramtero las props, segudio del contexto
  */
  
  setup() {
    const name = ref("Rodrigo");
    const lastName = ref("Garcia");
    const frameWork = ref("vue 3");
    const frames = ref([]);    

    /* 
      las propiedades computadas se almacenan en caché según sus dependencias. Una propiedad computada solo se volverá a evaluar cuando alguna de sus dependencias haya cambiado.
    */
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
