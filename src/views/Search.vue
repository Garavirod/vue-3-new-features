<template>
  <div class="container fluid">
    <h1>Search pokem : {{ pokemonid }}</h1>
    <form @submit.prevent="onSubmit">
      <input
        ref="InputID"
        v-model="pokemonid"
        class="form-control"
        placeholder="Number pokemon"
        type="number"
      />
    </form>
  </div>
</template>

<script>
import { ref, onActivated } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Search",
  setup() {
    const router = useRouter();
    const pokemonid = ref(1);
    const InputID = ref();

    // Local
    const onSubmit = () => {
      //console.log(pokemonid.value);
      router.push({ name: "pokemon-detail", params: { id: pokemonid.value } });
    };

    //Life cycle
    onActivated(() => {
      InputID.value.select();
    });

    return {
      pokemonid,
      onSubmit,
      InputID,
    };
  },
};
</script>