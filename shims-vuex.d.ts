import { Store } from "vuex"; // path to store file
import {State} from "./src/store";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
