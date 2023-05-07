import state from "./state";
import * as actions from "./actions";
import * as getters from "./actions";
import * as mutations from "./actions";

const jorunalModule = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default jorunalModule;
