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
import useCounter from '@/hooks/useCounter'
export default {
    setup() {
        
       const {
            numero,
            suma,
            resta,
            multiplicar,
            reset

       } = useCounter( 2 )


       return{
            numero,
            suma,
            resta,
            multiplicar,
            reset
       }
    }
}
</script>