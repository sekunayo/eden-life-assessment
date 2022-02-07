import { createStore } from "vuex";
import Vue from "vue";
import breedsList from "./modules/breedsList";

interface StateProps {
  breedNames: string[];
  searchList : string[];
}

export type State = StateProps;

export const store  = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    breedsList,
  },
});
