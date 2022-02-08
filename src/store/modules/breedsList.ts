import axios from "axios";
import { State } from "../index";

const state: State = {
  breedNames: [],
  searchList: [],
  imagesArray: [],
  loading: true,
  endPoints: [],
  errorStats: false,
  errorMessage: [],
};

const getters = {
  allBreedsList: (state: any) => state.breedsList,
  searchArray: (state: any) => state.searchList,
  imagesArray: (state: any) => state.imagesArray,
  loading: (state: any) => state.loading,
  breedNames: (state: any) => state.breedNames,
  errorStats: (state: any) => state.errorStats,
};

const actions = {
  async fetchBreedsList({ commit }) {
    try {
      const response = await axios.get("https://dog.ceo/api/breeds/list/all");
      commit("setBreedsList", response.data.message);
      return response;
    } catch (err) {
      commit("setError", true);
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
      commit("setError", true);
      console.log(err);
      //  commit("setErrorMessage", err.message);
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
      commit("setError", true);
    }
  },

  search({ commit }, searchValue) {
    commit("setSearchList", searchValue);
  },
};

const mutations = {
  setError: (state: any, error: any) => {
    state.errorStats = error;
  },
  setErrorMessage: (state: any, errorMessage: any) => {
    state.errorMessage = errorMessage;
  },

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
