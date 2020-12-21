<template>
  <div class="parent">
    <p>Im parent</p>
    <button @click="greetsChild">Greets child</button>
    <p>My child says : {{ childMessage }}</p>
    <Child 
      @messageFromChild="recievedMessage" 
      :money="supply.money"
      :car="supply.car"
      :advice="supply.advice"
    />
  </div>
</template>

<script>
import Child from "@/components/Child";
import { reactive, ref } from "vue";
export default {
  name: "Parent",  
  components: { Child },
  setup() {
    const parentMessage = ref("");
    const childMessage = ref("");
    /* Supply */
    const supply = reactive({
      money:300,
      car:true,
      advice:"Do not drik a lot"
    })

    const recievedMessage = (message) => {
      childMessage.value = message;
    };

    /*  So in latest Vue, 
        you can not send events from parent to child, 
        you can pass props to child, and send event from child to parent. 
    */

    const greetsChild = () => {
      parentMessage.value = "Hi child!";
    };

    const callParent = () => {
      alert("Parents says: How can I help you?");
    };

    return {
      parentMessage,
      recievedMessage,
      childMessage,
      greetsChild,
      callParent,
      supply
    };
  },
};
</script>

<style>
.parent {
  width: 90%;
  height: 500px;
  background-color: aquamarine;
  margin: auto;
  padding: 10px;
  text-align: right;
  font-size: 20px;
}
</style>
