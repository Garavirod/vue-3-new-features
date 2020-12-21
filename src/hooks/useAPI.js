import {reactive, ref, onMounted, watch} from "vue";


export function useAPI( endpoint ){
    const url = ref(endpoint);    
    const state = reactive({        
        loading:false,
        data:[],        
    });
        
    onMounted(async() => {                
        const response = await fetch(url.value);
        state.data = await response.json();

    });

    watch(()=>state.data,()=>console.log("Ya llegó"));

    return  state ;
};