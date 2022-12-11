import { Switch } from "react-native";
import { CATEGORIES } from "../../data/categories";
import { SELECTED_CATEGORY } from "../actions/category.action";

const initialState = {
  categories: CATEGORIES,
  selected: null,
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_CATEGORY:
      const IndexCategory = state.categories.findIndex(
        (cat) => cat.id === action.CategoryID
      );
      if (IndexCategory === -1) return state;
      return { ...state, selected: state.categories[IndexCategory] };

    default:
      break;

    /* return state;*/
  }
};

export default CategoryReducer;
