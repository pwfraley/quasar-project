import { store } from "quasar/wrappers";
import { createPinia } from "pinia";
import { createORM } from "pinia-orm";
import { createPiniaOrmAxios } from "@pinia-orm/axios";
import axios from "axios";
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

  axios.defaults.baseURL = "/api";
  axios.defaults.withCredentials = false;

  const axinst = axios.create();

  // You can add Pinia plugins here
  // pinia.use(SomePiniaPlugin)
  piniaOrm().use(createPiniaOrmAxios(axinst));

  pinia.use(piniaOrm);

  return pinia;
});
