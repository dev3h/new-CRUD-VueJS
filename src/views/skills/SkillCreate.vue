<template>
  <v-container>
    <div v-if="errors">
      <ul>
        <li v-for="(error, field) in errors" :key="field">
          {{ error?.[0] }}
        </li>
      </ul>
    </div>
    <v-row class="mt-10" justify="center">
      <v-card width="400" class="pa-10" title="Create skill">
        <form @submit.prevent="storeSkill(form)">
          <v-text-field v-model="form.name" label="Name"></v-text-field>
          <v-text-field v-model="form.slug" label="Slug"></v-text-field>
          <v-btn class="me-4" type="submit"> Create </v-btn>
        </form>
      </v-card>
    </v-row>
  </v-container>
</template>

<script setup>
import { reactive } from "vue";
import useSkills from "@/composables/skill";

const { storeSkill, errors } = useSkills();
const form = reactive({
  name: "",
  slug: "",
});
console.log(errors);
</script>
