import { BREADS } from "../../data/bread";
import { SELECTED_BREAD, FILTERED_BREAD } from "../actions/bread.action";

const initalState = {
  breads: BREADS,
  filteredBread: [],
  selected: null,
};

const BreadReducer = (state = initalState, action) => {
  return state;
};

export default BreadReducer;
