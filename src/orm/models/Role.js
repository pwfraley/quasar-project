import { Model } from "pinia-orm";

export default class Role extends Model {
  static entity = "role";

  static fields() {
    return {
      id: this.attr(null),
      name: this.string(""),
      normalizedName: this.string(""),
    };
  }
}
