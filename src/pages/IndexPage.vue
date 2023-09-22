<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />{{}}
    <q-list bordered>
      <q-item v-for="mditem in mdList" :key="mditem.id">
        <q-item-section
          >{{ mditem.type }} {{ mditem.typeName }}
          {{ mditem.shortText }}</q-item-section
        >
      </q-item></q-list
    >
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
// import { useAxiosRepo } from "@pinia-orm/axios";
import { useRepo } from "pinia-orm";
import RoleRepo from "src/orm/repositories/RoleRepo";
import MasterDataRepo, {
  AffectivityRepo,
} from "src/orm/repositories/MasterDataRepo";
// import Role from "src/orm/models/Role";
import axios from "axios";

export default defineComponent({
  name: "IndexPage",
  computed: {
    // roleRepo() {
    //   return useRepo(RoleRepo); //.setAxios(this.ax);
    // },
    roles() {
      return this.roleRepo.all();
    },
    mdList() {
      return this.affectivityRepo.all();
    },
  },
  methods: {
    fetchData() {
      this.roleRepo
        .api()
        .get("/Role")
        .then((response) => {
          console.log(response.entities);
        });
      this.masterDataRepo.fetch();
      this.affectivityRepo.fetch();
    },
  },
  mounted() {
    this.fetchData();
  },
  setup() {
    const roleRepo = useRepo(RoleRepo);
    const masterDataRepo = useRepo(MasterDataRepo);
    const affectivityRepo = useRepo(AffectivityRepo);
    // const ax = axios.create({
    //   baseURL: "/api",
    //   withCredentials: false,
    // });
    // return { ax };
    return { roleRepo, masterDataRepo, affectivityRepo };
  },
});
</script>
