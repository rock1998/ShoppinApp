import { createSelector } from "reselect";
import { RootState } from "../store";

export const shoppingListData = (state: RootState) => state.shoppingList

export const shoppingItemData = createSelector(shoppingListData, (shoppingListData) => shoppingListData.items)