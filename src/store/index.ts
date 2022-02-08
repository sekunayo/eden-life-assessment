import breedsList from "./modules/breedsList";
import Vue from "vue";
import Vuex from "vuex";

interface StateProps {
  breedNames: string[];
  searchList: string[];
  imagesArray: string[];
  loading: boolean;
  endPoints: string[];
  errorStats: boolean;
  errorMessage: string[];
}

export type State = StateProps;

export const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    breedsList,
  },
});
