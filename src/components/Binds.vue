<template>
  <div class="col-md-12 mt-4">
    <h2>Binds</h2>
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <!-- ANIMATIONS -->
            <label class="form-label">Animations</label>
            <select v-model="animation" class="form-select" id="validationCustom04" :disabled="false">
              <option v-for="item in animations" :key="item"> {{ item }} </option>                          
            </select>
            <!-- TEXT-ALIGNMENT-->
            <label class="form-label mt-3">Text alignment</label>
            <div class="row mt-3 text-center">
                <div class="col-md-4"><button class="btn btn-primary" @click="setAligment('center')" >Center</button></div>
                <div class="col-md-4"><button class="btn btn-primary" @click="setAligment('end')" >End</button></div>
                <div class="col-md-4"><button class="btn btn-primary" @click="setAligment('start')" >Start</button></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 border border-dark">
          <h3 :class="`text-${aligment} animate__animated ${animation}`">Text animated</h3>
      </div>
    </div>
  </div>
</template>
<script>
import {ref} from 'vue';
export default {
  setup(){
    const aligment = ref("center");
    const animation = ref("");
    const animations = ref([
      'animate__fadeInDown',
      'animate__backOutRight',
      'animate__flipInY',
      'animate__rotateInUpRight',
      'animate__jackInTheBox'
    ])

    // Métodos
    const setAligment = ( type ) => {
      aligment.value = type;
    }

    return { 
      aligment,
      animation,
      setAligment,
      animations
     }
  }
};
</script>
