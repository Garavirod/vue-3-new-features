<template>
    <div class="col-md-12 mt-4 p-3">
        <h2>Methods</h2>
        <div class="row text-center">
            <div class="col-md-12">
                <h3>{{ numero }}</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 text-center">
                <div class="card" >
                    <div class="card-body">
                        <button class="btn btn-info" @click="suma" >Suma 5</button>                                                        
                    </div>
                </div>
            </div>
            <div class="col-md-4 text-center">
                <div class="card" >
                    <div class="card-body">                        
                        <button class="btn btn-info" @click="resta" >Resta 5</button>                                               
                    </div>
                </div>
            </div>
            <div class="col-md-4 text-center">
                <div class="card" >
                    <div class="card-body">                        
                        <button class="btn btn-info" @click="multiplicar" >Multiplica por 5</button>                                               
                    </div>
                </div>
            </div>
            <div class="col-md-12 text-center">
                <div class="card" >
                    <div class="card-body">                        
                        <button class="btn btn-success" @click="reset" >Reset</button>                                               
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import {ref} from 'vue';
export default {
    setup() {
        
        // Definición de variables
        const numero = ref(100);

        // Métodos
        /* 
            Los métodos son subprogramas/funciones o bloques de codigo 
            que aplican lógica sobre ciertas propiedades del template
        */
        const suma = () => {
            numero.value += 5;
        }

        const resta = () => {
            numero.value -= 5;
        }

        const multiplicar = () => {
            numero.value *= 5;
        }

        const reset = () => {
            if(numero.value >= 5000){
                numero.value = 0;
            }
        }

        // retornar todo aquello que se desea usar en el template
        return { 
            numero,
            suma,
            resta,
            multiplicar,
            reset
        }
    }
}
</script>