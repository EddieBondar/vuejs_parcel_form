import Vue from "vue";
import Vuex from "vuex";
import Parcel from "@/store/modules/Parcel";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    Parcel,
  },
  strict: debug,
});
