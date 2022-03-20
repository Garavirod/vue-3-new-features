import { ref } from "vue";

const useCounter = ( initValue = 100 ) => {
     // Definición de variables
     const numero = ref( initValue );

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
         numero.value = initValue;         
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


export default useCounter