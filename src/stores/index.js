import { store } from "quasar/wrappers";
import { createPinia } from "pinia";
import { createORM } from "pinia-orm";
import { createPiniaOrmAxios } from "@pinia-orm/axios";

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store((/* { ssrContext } */) => {
  const pinia = createPinia();
  const piniaOrm = createORM();

  piniaOrm().use(createPiniaOrmAxios());

  pinia.use(piniaOrm);

  return pinia;
});
