export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CONFIRM_ITEM = "CONFIRM_ITEM";

export const addItem = (item) => ({
  type: ADD_ITEM,
  item,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  itemID,
});

export const confirmItem = (item) => ({
  type: CONFIRM_ITEM,
  payload,
});
