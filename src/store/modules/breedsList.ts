import axios from "axios";
import { State } from "../index";

const state: State = {
  breedNames: [],
  searchList: [],
  imagesArray: [],
  loading: true,
  endPoints: [],
};

const getters = {
  allBreedsList: (state: any) => state.breedsList,
  searchArray: (state: any) => state.searchList,
  imagesArray: (state: any) => state.imagesArray,
  loading: (state: any) => state.loading,
  breedNames: (state: any) => state.breedNames,
};

const actions = {
  async fetchBreedsList({ commit }) {
    try {
      const response = await axios.get("https://dog.ceo/api/breeds/list/all");
      commit("setBreedsList", response.data.message);
      return response;
    } catch (err) {
      console.log(err);
    }
  },

  async fetchBreedsListByBreed({ commit }, breedName) {
    try {
      const response = await axios.get(
        `https://dog.ceo/api/breed/${breedName}/images`
      );
      commit("setImagesArray", response.data.message);
      commit("setLoading", false);
    } catch (err) {
      console.log(err);
    }
  },

  async fetchAllBreedsImages({ dispatch, commit }) {
    try {
      const response = await dispatch("fetchBreedsList");
      commit("setEndPoints", Object.keys(response.data.message));
      commit("setLoading", false);
      commit("getUrl", (url) => {
        const response = axios.get(url).then((response) => {
          return response.data.message;
        });

        return response;
      });
    } catch (err) {
      console.log(err);
    }
  },

  search({ commit }, searchValue) {
    commit("setSearchList", searchValue);
  },
};

const mutations = {
  setBreedsList: (state: any, breedNames: any) =>
    (state.breedNames = Object.keys(breedNames)),

  setImagesArray: (state: any, imagesArray: any) =>
    (state.imagesArray = imagesArray),

  setLoading: (state: any, loading: any) => (state.loading = loading),

  setEndPoints: (state: any, breedNames) => {
    const endpoints = breedNames.map((element) => {
      return `https://dog.ceo/api/breed/${element}/images`;
    });
    state.endPoints = endpoints;
  },

  getUrl: (state, action) => {
    Promise.all(
      state.endPoints.map((url) => {
        action(url).then((response) => {
          const newImagesArray: any = [].concat(...response);
          state.imagesArray = newImagesArray;
        });
      })
    );
  },

  setSearchList: (state: any, searchValue: any) => {
    const searchString = searchValue.toLowerCase();
    const filteredCharacters = state.breedNames.filter((letter: string) =>
      letter.toLowerCase().includes(searchString)
    );
    state.searchList = filteredCharacters.slice(0, 5);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
