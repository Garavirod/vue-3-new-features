<template>
  <div class="col-md-12 mt-4">
    <h2>Directiva V-model</h2>
    <div class="row">
      <div class="col-md-6 card">
        <div class="card-body">
          <input v-model="state.username" class="form-control mt-2" type="text" name="" id="" placeholder="Username" />
          <input v-model="state.email" class="form-control mt-2" type="email" name="" id="" placeholder="Email" />
          <input v-model="state.password" class="form-control mt-2" type="password" name="" id="" placeholder="Password" />
          <input v-model="state.edad" class="form-control mt-2" type="number" name="" id="" placeholder="Edad" />
          <button class="btn btn-success mt-2" @click="verificaCredenciales">Validar</button>
        </div>
      </div>
      <div class="col-md-6">
        <div class="list-group list-group-flush">
          <ul>
            <li class="list-group-item">Username :> {{state.username}} </li>
            <li class="list-group-item">Email :> {{ state.email }} </li>
            <li class="list-group-item">Password :> {{ state.password }} </li>
            <li class="list-group-item">Edad :> {{state.edad}} </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
export default {
    setup() {
        // Definición de variables
        const state = reactive({
            username:'',
            email:'',
            password:'',
            edad:0,
        });

        // Métodos

        const verificaCredenciales = () => {

          const credenciales = {
            username: '@user',
            paswword: 'secret',
          }

          let mensaje = "";

          if (state.username === credenciales.username && 
              state.password === credenciales.paswword){
                mensaje = "Credenciales Correctas";
              }
          else{
                mensaje = "Credenciales Incorrectas";
          }

          alert(mensaje);
        };  


        return { 
            state,
            verificaCredenciales
        }
        
    }
}
</script>