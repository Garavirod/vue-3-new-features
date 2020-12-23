<template>
  <div class="col-md-12 mt-4 mx-auto d-grid gap-2 ">
    <h2>Directivas v-if/else/else-if v-show</h2>
    <!-- EMAIL -->
    <div class="row text-center" v-if="band">
      <div class="col-md-6 text-center">
        <label for="exampleFormControlInput1" class="form-label"
          >Email address</label
        >
        <input
          v-model="email"
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="email"
        />
        <div class="text-success" v-if="isAllowedEmaill">
          Acceso permitido
        </div>
        <div class="text-danger" v-else-if="isAllowedEmaill === false">
          El email no fué encontrado
        </div>
      </div>
    </div>
    <!-- USERNAME -->
    <div class="row mt-3" v-else>
      <div class="col-md-6 text-center">
        <label for="exampleFormControlInput1" class="form-label"
          >Username</label
        >
        <input
          v-model="username"
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="username"
        />
        <div class="text-success" v-if="isAllowedUsername">
          Acceso permitido
        </div>
        <div class="text-danger" v-else-if="isAllowedUsername === false">
          El username no fué encontrado
        </div>
      </div>
    </div>

    <div class="row mt-2">
      <div class="col-md-6 d-grid gap-2">
        <button @click="cambiaViaDeAcceso" class="btn btn-primary btn-sm">
          Modo de acceso '{{ via }}'
        </button>
      </div>
    </div>

    <div class="row mt-2">
      <div class="col-md-6 d-grid gap-2">
        <button @click="verificaCredenciales" class="btn btn-success btn-sm">
          Validar
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    // Definición de variables
    const via = ref("email");
    const band = ref(false);

    const email = ref ("");
    const username = ref("");
    const isAllowedEmaill = ref(null);
    const isAllowedUsername = ref(null);

    // Métodos
    const cambiaViaDeAcceso = () => {
      if (band.value === false) {
        via.value = "username";
        band.value = true;
      } else {
        via.value = "email";
        band.value = false;
      }
    };

    //---
    const verificaCredenciales = () => {
        const validEmail = "test@test.com";
        const validUsername = "@qwerty";

        if( band.value === true ){ //Modo email
            if( email.value === validEmail ){
                isAllowedEmaill.value = true;                
            }else{
                isAllowedEmaill.value = false;
            }
        }else{
            if( username.value ===  validUsername ){
                isAllowedUsername .value = true;
            }else{
                isAllowedUsername .value = false;
            }
        }
    }

    return {
      via,
      band,
      cambiaViaDeAcceso,
      //-----
      email,
      username,
      isAllowedEmaill,
      isAllowedUsername,
      verificaCredenciales
    };
  },
};
</script>
