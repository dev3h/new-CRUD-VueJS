<template>
  <v-container>
    <div>
      <v-btn color="#5865f2" :to="{ name: 'SkillCreate' }"> Add </v-btn>
    </div>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Slug</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="skill in skills" :key="skill?.id">
          <td>{{ skill?.name }}</td>
          <td>{{ skill?.slug }}</td>
          <td>
            <v-btn
              :to="{ name: 'SkillEdit', params: { id: skill?.id } }"
              color="#92aa38"
              >Edit</v-btn
            >
            <v-btn @click="deleteSkill(skill?.id)" color="#72292f"
              >Delete</v-btn
            >
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>
<script setup>
import useSkills from "@/composables/skill";
import { onMounted } from "vue";

const { skills, getSkills, deleteSkill } = useSkills();
onMounted(() => getSkills());
</script>
