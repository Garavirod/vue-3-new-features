<template>
  <div class="col-md-12 mt-4">
    <h2>Arrays y driectiva v-for</h2>
    <div class="row">
      <div class="col-md-4">
        <h5>Lenguajes de programación</h5>
        <ul class="list-group">
          <li class="list-group-item">
            <input
              v-model="lenguajes"
              class="form-check-input me-1"
              type="checkbox"
              value="Python"
              aria-label="..."
            />
            Python
          </li>
          <li class="list-group-item">
            <input
              v-model="lenguajes"
              class="form-check-input me-1"
              type="checkbox"
              value="Java"
              aria-label="..."
            />
            Java
          </li>
          <li class="list-group-item">
            <input
              v-model="lenguajes"
              class="form-check-input me-1"
              type="checkbox"
              value="C#"
              aria-label="..."
            />
            C#
          </li>
          <li class="list-group-item">
            <input
              v-model="lenguajes"
              class="form-check-input me-1"
              type="checkbox"
              value="Javascript"
              aria-label="..."
            />
            Javascript
          </li>
          <li class="list-group-item">
            <input
              v-model="lenguajes"
              class="form-check-input me-1"
              type="checkbox"
              value="Ruby"
              aria-label="..."
            />
            Ruby
          </li>
        </ul>
      </div>
      <div class="col-md-4">
        <h5>Lista de lenguajes seleccionados</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" v-for="len in lenguajes" :key="len">
            {{ len }}
          </li>
        </ul>
      </div>
      <div class="col-md-4">
        <h5>Valoración</h5>
        <ul class="list-group">
          <li
            v-for="v of valoraciones"
            :key="v.len"
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <button class="btn btn-success" @click="valorar( v.len )" >+</button>            
            {{ v.len }}
            <span class="badge bg-warning rounded-pill">{{ v.value }}</span>
          </li>         
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  setup() {
    // Definición de variables
    const lenguajes = ref([]);
    const valoraciones = reactive([
        {
            len:'Python',
            value:0,
        },
         {
            len:'java',
            value:0,
        },
         {
            len:'C#',
            value:0,
        },
         {
            len:'JavaScript',
            value:0,
        },
         {
            len:'Ruby',
            value:0,
        },
    ]);

    // Métodos
    const valorar = ( len ) => {
        const objLen = valoraciones.filter(obj => obj.len === len );        
        const idx = valoraciones.indexOf(objLen[0]);
        valoraciones[idx].value += 1;       
    }

    return {
      lenguajes,
      valoraciones,
      valorar
    };
  },
};
</script>
