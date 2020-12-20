<template>
  <div class="parent">
    <p>Im parent</p>
    <button @click="greetsChild">Greets child</button>
    <p>My child says : {{childMessage}} </p>
    <Child @messageFromChild="recievedMessage"/>    

  </div>
</template>

<script>
  import Child from '@/components/Child';
  import {ref} from 'vue';
  export default {
    name:'Parent',
    emits:['messageFromParent'],
    components:{ Child },
    setup() {      
      const parentMessage = ref("");
      const childMessage = ref("");

      const recievedMessage = ( message ) => {
        childMessage.value = message;
      }

      const greetsChild = () => {

        parentMessage.value = "Hi child!";
      }

      const callParent = () => {
        alert("Parents says: How can I help you?");
      }

      return { 
        parentMessage, 
        recievedMessage, 
        childMessage, 
        greetsChild,
        callParent,
        
      }
    }
  }
</script>

<style>
  .parent{
    width: 90%;
    height: 500px;
    background-color: aquamarine;
    margin: auto;
    padding: 10px;
    text-align: right;
    font-size: 20px;
  }
</style>
