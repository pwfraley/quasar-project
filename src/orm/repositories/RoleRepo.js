import { AxiosRepository } from "@pinia-orm/axios";
// import { Repository } from "@pinia-orm/axios";
import Role from "../models/Role";

export default class RoleRepo extends AxiosRepository {
  use = Role;

  fetch() {
    return this.api().get("/Role");
  }
}
