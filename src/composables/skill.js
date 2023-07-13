import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1";

export default function useSkills() {
  const skills = ref([]);
  const skill = ref({});
  const errors = ref({});
  const router = useRoute();
  console.log(skills);

  const getSkills = async () => {
    try {
      const response = await axios.get("/skills");
      skills.value = response.data?.data;
    } catch (error) {
      console.log(error);
    }
  };
  const getSkill = async (id) => {
    try {
      const response = await axios.get(`/skills/${id}`);
      skill.value = response.data?.data;
    } catch (error) {
      console.log(error);
    }
  };
  const storeSkill = async (data) => {
    try {
      await axios.post("/skills", data);
      await router.push({ name: "SkillIndex" });
    } catch (error) {
      console.log(error);
      if (error.response.status === 422) {
        errors.value = error.response.data?.errors;
      }
    }
  };
  const updateSkill = async (id) => {
    try {
      await axios.post(`/skills/${id}`, skill.value);
      await router.push({ name: "SkillIndex" });
    } catch (error) {
      console.log(error);
      if (error.response.status === 422) {
        errors.value = error.response.data?.errors;
      }
    }
  };
  const deleteSkill = async (id) => {
    try {
      if (!confirm("Are you sure you want to delete this skill?")) return;
      await axios.delete(`/skills/${id}`);
      await getSkills();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    skills,
    skill,
    errors,
    getSkills,
    getSkill,
    storeSkill,
    updateSkill,
    deleteSkill,
  };
}
