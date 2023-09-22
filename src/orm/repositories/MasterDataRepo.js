import { AxiosRepository } from "@pinia-orm/axios";
// import { Repository } from "@pinia-orm/axios";
import { axiosInstance } from "src/boot/axios";
import { MasterData, Affectivity } from "../models/MasterData";

export default class MasterDataRepo extends AxiosRepository {
  use = MasterData;
  mdType = -1;
  axios = axiosInstance;

  fetch() {
    console.log("fetching master data with type: " + this.mdType);
    if (this.mdType == -1) return this.api().get("/MasterData");
    else {
      this.api()
        .get("/MasterData?type=" + this.mdType)
        .then((result) => {
          //console.log(result.response.data);
          return result.response.data;
        });
    }
  }
}
class AffectivityRepo extends MasterDataRepo {
  use = Affectivity;
  mdType = 0;
  fetch() {
    return super.fetch(this.mdType);
  }
}

export { MasterDataRepo, AffectivityRepo };
