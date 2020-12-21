<template>
    <div class="child">
        <p>I'm child</p>
        <!-- <button @click="$emit('messageFromChild',message)">send</button> -->
        <!-- Usgin setup -->
        <button @click="greetsParent">Greets parent</button>
        <p>my parent says : {{$parent.parentMessage}}</p>

        <button @click="$parent.callParent">Call for parent</button>

        <p>My props</p>
        <ul>
            <li>{{money}}</li>
            <li>{{car}}</li>
            <li>{{advice}}</li>
        </ul>

    </div>
</template>


<script>
    import {ref} from 'vue';
    export default {
        name:'Child',
        emits:['messageFromChild'],
        props:{
            money:Number,
            car: Boolean,
            advice:String,
        },
        setup(props, { emit }) {

            const message = ref("Hi parent");
            const greetsParent = ( ) => {
                emit( 'messageFromChild', message.value );
            }            

            return{
                message,
                greetsParent,                                                
            }
        }        
    }
</script>

<style>
  .child{
    width: 90%;
    height: 300px;
    background-color: rgb(127, 157, 255);
    margin: auto;
    padding: 10px;
    text-align: right;
    font-size: 20px;
  }
</style>