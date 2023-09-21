<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
// import { useAxiosRepo } from "@pinia-orm/axios";
import { useRepo } from "pinia-orm";
import RoleRepo from "src/orm/repositories/RoleRepo";
// import Role from "src/orm/models/Role";
import axios from "axios";

export default defineComponent({
  name: "IndexPage",
  computed: {
    roleRepo() {
      return useRepo(RoleRepo); //.setAxios(this.ax);
    },
  },
  methods: {
    fetchRoles() {
      this.roleRepo
        .api()
        .get("/Role")
        .then((response) => {
          console.log(response.entities);
        });
    },
  },
  mounted() {
    this.fetchRoles();
  },
  setup() {
    // const ax = axios.create({
    //   baseURL: "/api",
    //   withCredentials: false,
    // });
    // return { ax };
  },
});
</script>
