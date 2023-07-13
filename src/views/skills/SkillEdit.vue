<template>
  <v-container>
    <v-row class="mt-10" justify="center">
      <v-card width="400" class="pa-10" title="Create skill">
        <form @submit.prevent="updateSkill($route?.params?.id)">
          <v-text-field
            required
            v-model="skill.name"
            :rules="nameRules"
            label="Name"
          ></v-text-field>
          <v-text-field
            v-model="skill.slug"
            required
            :rules="slugRules"
            label="Slug"
          ></v-text-field>
          <v-btn class="me-4" type="submit"> Update </v-btn>
        </form>
      </v-card>
    </v-row>
  </v-container>
</template>

<script setup>
import useSkills from "@/composables/skill";
import { onMounted } from "vue";
const { skill, getSkill, updateSkill, errors } = useSkills();

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});
onMounted(() => getSkill(props?.id));

const nameRules = [(v) => !!v || errors?.value?.name];

const slugRules = [(v) => !!v || errors?.value?.slug];
</script>
