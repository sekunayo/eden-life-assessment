import axios from "axios";
import {State} from "../index";

const state : State = {
  breedNames: [],
  searchList: [],
};

const getters = {
  allBreedsList: (state: any) => state.breedsList,
  searchArray: (state: any) => state.searchList,
};

const actions = {
  async fetchBreedsList({ commit }) {
    const response = await axios.get("https://dog.ceo/api/breeds/list/all");
    commit("setBreedsList", response.data.message);
  },
  search({ commit }, searchValue) {
    let searchString = searchValue.toLowerCase();
    let filteredCharacters: any = state.breedNames.filter((letter: string) => {
      return letter.toLowerCase().includes(searchString);
    });
    commit("setSearchList", filteredCharacters.slice(0, 5));
  },
};

const mutations = {
  setBreedsList: (state: any, breedNames: any) =>
    (state.breedNames = breedNames),
  // updateSearchValue(state, searchValue) {
  //   state.obj.searchValue = searchValue;
  // },
  setSearchList: (state: any, searchList: any) =>
    (state.searchList = searchList),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
