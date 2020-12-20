<template>
  <div>
    {{ profile.name }}
  </div>
</template>

<script>
import { provideProfile, useProfile } from "@/plugins/profile";
export default {
  setup() {
    provideProfile({
      name: "Rodrigo",
      age: 25,
      skills: {
        programer: "Laravel",
        instructor: "Python",
      },
    });

    const profile = useProfile();

    return { profile };
  },
};
</script>
