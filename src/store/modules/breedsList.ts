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
  allBreedsList: (state) => state.breedsList,
  searchArray: (state) => state.searchList,
  imagesArray: (state) => state.imagesArray,
  loading: (state) => state.loading,
  breedNames: (state) => state.breedNames,
  errorStats: (state) => state.errorStats,
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
    } catch (err) {
      commit("setError", true);
      console.log(err);
      commit("setErrorMessage", [`${err.message}`]);
    }
  },

  async fetchAllBreedsImages({ dispatch, commit }) {
    try {
      const response = await dispatch("fetchBreedsList");
      commit("setEndPoints", Object.keys(response.data.message));
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
  setError: (state: State, error: boolean) => {
    state.errorStats = error;
  },
  setErrorMessage: (state: State, errorMessage: string[]) => {
    state.errorMessage = errorMessage;
  },

  setBreedsList: (state: State, breedNames: string[]) =>
    (state.breedNames = Object.keys(breedNames)),

  setImagesArray: (state: State, imagesArray: string[]) => {
    state.imagesArray = imagesArray;
  },

  setLoading: (state: State, loading: boolean) => (state.loading = loading),

  setEndPoints: (state: State, breedNames) => {
    const endpoints = breedNames.map((element) => {
      return `https://dog.ceo/api/breed/${element}/images`;
    });
    state.endPoints = endpoints;
  },

  getUrl: (state, action) => {
    Promise.all(
      state.endPoints.map((url) => {
        action(url).then((response) => {
          const newImagesArray: string[] = [].concat(...response);
          localStorage.setItem("images", JSON.stringify(newImagesArray));
          const data = localStorage.getItem("images");
          if (data) {
            state.imagesArray = JSON.parse(data);
          }
        });
      })
    );
  },

  setSearchList: (state: State, searchValue: string) => {
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
