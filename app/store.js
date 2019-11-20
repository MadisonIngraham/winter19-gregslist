import Value from "./Models/Value.js";
import Car from "./Models/Car.js";

let _state = {
  activeValue: new Value({ title: "something" }),
  /** @type {Value[]} */
  values: [],
  cars: []
};

//NOTE You should not need to change the code from this point down

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const store = new Store();
export default store;
