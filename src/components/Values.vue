<template>
    <div class="col-md-12 mt-4 p-3">
        <div class="row">
            <h2>Definición y uso de variables</h2>
            <div class="col-md-6">
                <div class="card" >
                    <div class="card-body">
                        <h5>Usando la propiedad 'ref'</h5>                
                        <p>Nombre: {{ nombre }} </p>
                        <p>Edad:{{edad}} </p>   
                        <p>Hobbies : {{hobbies}}</p>                                   
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card" >
                    <div class="card-body">                        
                        <h5>Usando la propiedad 'reactive'</h5>
                        <p>Nombre: {{state.nombre}}</p>
                        <p>Edad: {{state.edad}}</p>
                        <p>Hobbies : {{state.hobbies}}</p>                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import {ref, reactive} from 'vue';
export default {
    setup() {
        /* 
            'ref' crea varaibales reactivas por separado 
            en el template, es decir
            cada vez que es alterado su valor este refleja en el
            lugar donde usamos dichas varibales.
        */
        const nombre = ref("Rodrigo");
        const edad = ref(25);
        const hobbies = ref(['Programar','leer','ver TV']);

        /* 
            'reactive' crea un conjunto de variables reativas.            
        */

        const state = reactive({
            nombre: 'Rodrigo',
            edad: 25,
            hobbies:['Programar','leer','ver TV']
        });

        // retornar todo aquello que se desea usar en el template
        return { 
            nombre,
            edad,
            hobbies,
            state
        }
    }
}
</script>