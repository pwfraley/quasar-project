import { AxiosRepository } from "@pinia-orm/axios";
// import { Repository } from "@pinia-orm/axios";
import { axiosInstance } from "src/boot/axios";
import Role from "../models/Role";

export default class RoleRepo extends AxiosRepository {
  use = Role;
  axios = axiosInstance;

  fetch() {
    return this.api().get("/Role");
  }
}
